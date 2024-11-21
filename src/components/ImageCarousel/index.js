import React from 'react';
import styles from './styles.module.css';

// Define captions for specific images using their filenames
const captions = {
  'sapa.jpg': 'Sapa, Vietnam',
  'f1.jpg': 'Formula 1, Singapore',
  'golf.jpg': 'Golf with my best friend, South Africa',
  'luge.jpg': 'Fun on a Monday, in Singapore',
  'mma.jpg': 'First MMA training, Singapore',
  'bffs.jpg': 'My best friends and I, South Africa',
  // Add more captions as needed
};

export function ImageCarousel() {
  // Import all images from the carousel directory
  const images = require.context('@site/static/img/carousel', false, /\.(png|jpe?g|gif)$/)
    .keys()
    .map(path => {
      const filename = path.replace('./', '');
      const displayName = filename
        .replace(/\.(png|jpe?g|gif)$/, '')
        .replace(/-/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase());

      return {
        src: require(`@site/static/img/carousel${path.slice(1)}`).default,
        alt: displayName,
        filename: filename,
        caption: captions[filename] || null
      };
    });

  return (
    <section className={styles.carouselSection}>
      <div className={styles.carousel}>
        {images.map((image, idx) => (
          <div key={idx} className={styles.carouselItem}>
            <img src={image.src} alt={image.alt} />
            {image.caption && <p className={styles.caption}>{image.caption}</p>}
          </div>
        ))}
      </div>
    </section>
  );
} 