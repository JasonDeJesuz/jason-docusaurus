import React from 'react';
import styles from './styles.module.css';

export function Journey() {
  const journeyItems = [
    {
      date: '2024',
      event: 'Started my personal blog and newsletter'
    },
    {
      date: '2023',
      event: 'Led development of project X at Company Y'
    },
    // Add more journey items
  ];

  return (
    <section className={styles.journey}>
      <h2>My Journey</h2>
      <div className={styles.timeline}>
        {journeyItems.map((item, idx) => (
          <div key={idx} className={styles.timelineItem}>
            <div className={styles.date}>{item.date}</div>
            <div className={styles.event}>{item.event}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 