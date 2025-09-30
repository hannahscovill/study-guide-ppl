import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Li from '@theme/MDXComponents/Li'

import styles from './index.module.css';
import FeatureCard from '../components/FeatureCard/FeatureCard';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/groundSchoolPPL/principles_of_flight">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

const AboutTheHost = () => {
  return (
    <FeatureCard
      title="About the Maintainer"
      subtitle="Hi! I'm Hannah."
      // body='hello'
      body={<>
        <p>
          I'm a student at Twin Oaks (7S3) studying for my SPL written exam.<br/><br/>
          I'm also Software Engineer at Nike who values technical writing. I also teach CrossFit 1-2 nights/week.<br/><br/>
          I'm excited to find community working toward similar goals and offer my technical writing experience to learn about Aviation.
        </p>
      </>}
      imgSrc='https://cloudfilesdm.com/postcards/3906small-0a2d52c6.png'

    />
  )
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
        <AboutTheHost />
      </main>
    </Layout>
  );
}
