import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/Module 1 - ROS 2 Nervous System/The-Digital-Nervous-System">
            Build Your Robot!
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="AI-Native Robotics Textbook">
      <HomepageHeader />
      <main>
        <div className="container padding-vert--xl">
          <div className="row">
            {/* Card 1 */}
            <div className="col col--4">
              <div className={styles.featureCard}>  {/* <--- Added Class Here */}
                <div className="text--center">
                  <h3>Cognitive Intelligence</h3>
                  <p>Deploy VLA models and LLMs for semantic understanding and decision-making.</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col col--4">
              <div className={styles.featureCard}> {/* <--- Added Class Here */}
                <div className="text--center">
                  <h3>Control Architecture</h3>
                  <p>Master ROS 2 middleware for real-time actuation and hardware communication.</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col col--4">
              <div className={styles.featureCard}> {/* <--- Added Class Here */}
                <div className="text--center">
                  <h3>Digital Twins</h3>
                  <p>Validate physical behaviors in physics-accurate simulated environments.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}