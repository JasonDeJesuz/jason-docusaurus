import styles from './styles.module.css';
import BookingContent from '@site/content/booking.mdx';

export function Booking() {
    return (
        <section className={styles.booking}>
            <BookingContent />
            <a 
                href="https://cal.com/jasondejesuz/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
            >
                Schedule a Call
            </a>
        </section>
    );
} 