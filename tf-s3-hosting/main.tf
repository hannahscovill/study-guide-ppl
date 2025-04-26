provider "aws" {
  region = "us-east-1" # Change to your desired region

}

# S3 Bucket
resource "aws_s3_bucket" "skybound" {
  bucket = "skybound-dev" # Replace with your unique bucket name
}

data "local_file" "static_site_files" {
  #  for_each = fileset("../build/", "**^.DS_Store") 
  #  for_each = [ for fileName in fileset("../build/","**") : fileName if endswith(fileName, ".DS_Store") ]
  for_each = toset([
    for file in fileset("../build/", "**") : file
    if !endswith(file, ".DS_Store")
  ])
  filename = "../build/${each.value}"
}

resource "aws_s3_object" "static_site_files" {
  for_each = data.local_file.static_site_files
  bucket   = aws_s3_bucket.skybound.bucket
  key      = each.key
  source   = data.local_file.static_site_files[each.key].filename
  #  content_type = "text/plain" # Update content type based on your files 
  etag = filemd5(data.local_file.static_site_files[each.key].filename) # Ensure updates only for changed files 
}

data "aws_acm_certificate" "skybound" {
  domain = "skybound.dev"
}

data "aws_cloudfront_cache_policy" "managed_caching_optimized" {
  name = "Managed-CachingOptimized"
}


resource "aws_wafv2_web_acl" "skybound" {
  name  = "CreatedByCloudFront-78414b07-2b01-4c47-9ba9-b08591394d26"
  scope = "CLOUDFRONT"

  default_action {
    allow {}
  }

  rule {
    name     = "AWS-AWSManagedRulesAmazonIpReputationList"
    priority = 0

    override_action {
      none {}
    }

    statement {
      managed_rule_group_statement {
        name        = "AWSManagedRulesAmazonIpReputationList"
        vendor_name = "AWS"
      }
    }

    visibility_config {
      cloudwatch_metrics_enabled = true
      metric_name                = "AWS-AWSManagedRulesAmazonIpReputationList"
      sampled_requests_enabled   = true
    }
  }
  rule {
    name     = "AWS-AWSManagedRulesCommonRuleSet"
    priority = 1

    override_action {
      none {}
    }

    statement {
      managed_rule_group_statement {
        name        = "AWSManagedRulesCommonRuleSet"
        vendor_name = "AWS"
      }
    }

    visibility_config {
      cloudwatch_metrics_enabled = true
      metric_name                = "AWS-AWSManagedRulesCommonRuleSet"
      sampled_requests_enabled   = true
    }
  }

  rule {
    name     = "AWS-AWSManagedRulesKnownBadInputsRuleSet"
    priority = 2

    override_action {
      none {}
    }

    statement {
      managed_rule_group_statement {
        name        = "AWSManagedRulesKnownBadInputsRuleSet"
        vendor_name = "AWS"
      }
    }

    visibility_config {
      cloudwatch_metrics_enabled = true
      metric_name                = "AWS-AWSManagedRulesKnownBadInputsRuleSet"
      sampled_requests_enabled   = true
    }
  }

  visibility_config {
    cloudwatch_metrics_enabled = true
    metric_name                = "CreatedByCloudFront-78414b07-2b01-4c47-9ba9-b08591394d26"
    sampled_requests_enabled   = true
  }
}


# CloudFront Distribution
resource "aws_cloudfront_distribution" "skybound" {
  origin {
    domain_name              = aws_s3_bucket.skybound.bucket_regional_domain_name
    origin_id                = aws_s3_bucket.skybound.bucket_regional_domain_name
    origin_access_control_id = aws_cloudfront_origin_access_control.skybound.id
  }

  custom_error_response {
    error_code            = 403
    response_code         = 403
    response_page_path    = "/index.html"
    error_caching_min_ttl = 10
  }

  # aliases             = ["skybound.dev"]
  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"
  web_acl_id          = aws_wafv2_web_acl.skybound.arn

  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = aws_s3_bucket.skybound.bucket_regional_domain_name
    cache_policy_id        = data.aws_cloudfront_cache_policy.managed_caching_optimized.id
    compress               = true
    viewer_protocol_policy = "redirect-to-https"
  }

  viewer_certificate {
    acm_certificate_arn      = data.aws_acm_certificate.skybound.arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
}

data "aws_iam_policy_document" "allow_access_from_cloudfront" {
  policy_id = "PolicyForCloudFrontPrivateContent"
  statement {
    sid = "AllowCloudFrontServicePrincipal"
    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }

    actions = [
      "s3:GetObject"
    ]

    resources = [
      "${aws_s3_bucket.skybound.arn}/*",
    ]
    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"
      values   = [aws_cloudfront_distribution.skybound.arn]
    }
  }
}

# S3 Bucket Policy
resource "aws_s3_bucket_policy" "allow_cloudfront_only" {
  bucket = aws_s3_bucket.skybound.id
  policy = data.aws_iam_policy_document.allow_access_from_cloudfront.json
}

# CloudFront Origin Access Identity
resource "aws_cloudfront_origin_access_control" "skybound" {
  name                              = aws_s3_bucket.skybound.bucket_regional_domain_name
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}
