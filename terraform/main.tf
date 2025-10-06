terraform {
  backend "s3" {
    bucket = "terraform-state-calamari"
    region = "us-west-2"
    key = "skybound-dev"
  }
}

provider "aws" {
  region = "us-east-1"
}

resource "aws_cloudfront_function" "serve_index_files" {
  name    = "skybound-redirects"
  runtime = "cloudfront-js-1.0"
  comment = "managed by terraform"
  publish = true
  code    = file("redirect.js")
}

resource "aws_s3_bucket" "skybound" {
  bucket = "skybound-dev"
}

data "aws_acm_certificate" "skybound" {
  domain = "skybound.dev"
}

data "aws_cloudfront_cache_policy" "managed_caching_optimized" {
  name = "Managed-CachingOptimized"
}

resource "aws_cloudfront_distribution" "skybound" {
  price_class     = "PriceClass_100"
  aliases         = ["skybound.dev"]
  enabled         = true
  is_ipv6_enabled = true
  web_acl_id      = aws_wafv2_web_acl.skybound.arn

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

  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = aws_s3_bucket.skybound.bucket_regional_domain_name
    cache_policy_id        = data.aws_cloudfront_cache_policy.managed_caching_optimized.id
    compress               = true
    viewer_protocol_policy = "redirect-to-https"

    function_association {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.serve_index_files.arn
    }
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

# S3 Bucket Policy
resource "aws_s3_bucket_policy" "allow_cloudfront_only" {
  bucket = aws_s3_bucket.skybound.id
  policy = jsonencode({
    Version = "2008-10-17"
    Id      = "PolicyForCloudFrontPrivateContent"
    Statement = [
      {
        Sid = "AllowCloudFrontServicePrincipal"
        Principal = {
          "Service" = ["cloudfront.amazonaws.com"]
        }
        Action   = "s3:GetObject"
        Effect   = "Allow"
        Resource = "${aws_s3_bucket.skybound.arn}/*"
        Condition = {
          StringEquals = {
            "AWS:SourceArn" = aws_cloudfront_distribution.skybound.arn
          }
        }
      }
    ]
  })
}

resource "aws_cloudfront_origin_access_control" "skybound" {
  name                              = aws_s3_bucket.skybound.bucket_regional_domain_name
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_wafv2_web_acl" "skybound" {
  name  = "CreatedByCloudFront-f1f45350"
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
    metric_name                = "CreatedByCloudFront-f1f45350"
    sampled_requests_enabled   = true
  }
}
