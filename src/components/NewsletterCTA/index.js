import React from 'react';
import styles from './styles.module.css';

export function NewsletterCTA() {
    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Jason's Newsletter</h2>
            <p className={styles.subheading}>I'll be sharing my learnings, ideas and thoughts here.</p>
            <div className={styles.iframeContainer}>
                <iframe 
                    src="https://embeds.beehiiv.com/4c20e439-c71a-4a6a-ac20-aa3df95e1280?slim=true"
                    data-test-id="beehiiv-embed"
                    height="52"
                    frameborder="0"
                    scrolling="no"
                    style={{
                        margin: '0',
                        borderRadius: '0px',
                        backgroundColor: 'transparent'
                    }}
                ></iframe>
            </div>
            <div className={styles.socialLinks}>
                <a href="https://bsky.app/profile/jasondejesuz.bsky.social" target="_blank" rel="noopener noreferrer">
                    Follow me on Bluesky
                </a>
                <a href="www.linkedin.com/in/jason-de-jesuz-83a7b6158" target="_blank" rel="noopener noreferrer">
                    Connect on LinkedIn
                </a>
            </div>
        </div>
    );
} 