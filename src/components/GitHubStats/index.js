import styles from './styles.module.css';
import GitHubContent from '@site/content/github-stats.mdx';

export function GitHubStats() {
    return (
        <section className={styles.stats}>
            <GitHubContent />
            <div className={styles.imageWrapper}>
                <img
                    src="https://my-github-stats-umber.vercel.app/api?username=jasondejesuz&count_private=true&theme=radical&show_icons=true"
                    alt="Jason De Jesuz's GitHub Stats"
                    width="495"
                    height="195"
                />
            </div>
        </section>
    );
} 