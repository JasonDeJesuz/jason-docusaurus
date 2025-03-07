import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import { ImageCarousel } from '@site/src/components/ImageCarousel';
import { NewsletterCTA } from '@site/src/components/NewsletterCTA';
import { Journey } from '@site/src/components/Journey';
import HeroContent from '@site/content/hero.mdx';
import { GitHubStats } from '@site/src/components/GitHubStats';
import { Travel } from '@site/src/components/Travel';
import { Booking } from '@site/src/components/Booking';

export default function Home() {
  return (
    <Layout
      title="Jason De Jesuz"
      description="Personal website of Jason De Jesuz">
      <main className={styles.main}>
        <section className={styles.hero}>
          <HeroContent />
        </section>
        <Journey />
        <GitHubStats />
        <Travel />
        <Booking />
      </main>
    </Layout>
  );
}
