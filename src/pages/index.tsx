import { useRef, type ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import FeatureCard from '../components/FeatureCard/FeatureCard';
import VideoPlayer from '../components/VideoPlayer/VideoPlayer';

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
      style={{ maxWidth: '600px' }}
      title="About the Maintainer"
      subtitle="Hi! I'm Hannah."
      body={<>
        <p>
          I'm a student at Twin Oaks (7S3) studying for my SPL written exam.<br /><br />
          I work as Software Engineer at Nike and teach CrossFit 1-2 nights/week.<br /><br />
          I'm excited to find community in aviation!
        </p>
      </>}
      imgSrc='https://cloudfilesdm.com/postcards/3906small-0a2d52c6.png'

    />
  )
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  // const playerRef = useRef();
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
