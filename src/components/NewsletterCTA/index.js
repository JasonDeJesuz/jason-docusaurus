import React from 'react';
import styles from './styles.module.css';

export function NewsletterCTA() {
    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Stay in the loop</h2>
            <p className={styles.subheading}>Get the latest updates delivered straight to your inbox</p>
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
        </div>
    );
} 