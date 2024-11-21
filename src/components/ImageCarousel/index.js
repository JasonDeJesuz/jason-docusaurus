import React from 'react';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export function ImageCarousel() {
  const images = [
    {
      src: '/img/me-and-dogs.jpg',
      alt: 'Me with my dogs',
      caption: 'Weekend adventures with the pups'
    },
    // Add more images as needed
  ];

  return (
    <section className={styles.carouselSection}>
      <div className={styles.carousel}>
        {images.map((image, idx) => (
          <div key={idx} className={styles.carouselItem}>
            <img src={image.src} alt={image.alt} />
            <p className={styles.caption}>{image.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 