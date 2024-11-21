import clsx from 'clsx';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import { ImageCarousel } from '@site/src/components/ImageCarousel';
import { NewsletterCTA } from '@site/src/components/NewsletterCTA';
import { Journey } from '@site/src/components/Journey';

export default function Home() {
  return (
    <Layout
      title="Jason De Jesuz"
      description="Personal website of Jason De Jesuz">
      <main className={styles.main}>
        <section className={styles.hero}>
          <Heading as="h1" className={styles.title}>
            Who am I?
          </Heading>
          <p className={styles.intro}>
            Hey! I'm Jason, a software engineer passionate about building great products
            and sharing what I learn along the way. Currently working on making the web
            a better place, one commit at a time.
          </p>
        </section>

        <ImageCarousel />
        <NewsletterCTA />
        <Journey />
      </main>
    </Layout>
  );
}
