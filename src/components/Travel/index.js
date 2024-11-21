import styles from './styles.module.css';
import TravelContent from '@site/content/travel.mdx';

export function Travel() {
    return (
        <section className={styles.travel}>
            <TravelContent />
            <div className={styles.iframeWrapper}>
                <iframe 
                    width="100%" 
                    height="600" 
                    src="https://nomadlist.com/@dejeszio/embed" 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen
                    style={{ background: '#f9f9f9' }}
                />
            </div>
        </section>
    );
} 