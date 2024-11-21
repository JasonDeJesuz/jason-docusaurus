import React from 'react';
import styles from './styles.module.css';
import JourneyContent from '@site/content/journey.mdx';

export function Journey() {
  return (
    <section className={styles.journey}>
      <JourneyContent />
    </section>
  );
} 