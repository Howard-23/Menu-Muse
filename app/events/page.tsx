import Image from 'next/image';
import { events } from '@/data/locations';
import Button from '@/components/ui/Button';
import styles from './page.module.css';

export default function EventsPage() {
  const featuredEvent = events[0];
  const otherEvents = events.slice(1);

  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.title}>Events & Promotions</h1>
          <p className={styles.subtitle}>Special experiences at MenuMuse</p>
        </div>

        {featuredEvent && (
          <div className={styles.heroEvent}>
            <div className={styles.heroImage}>
              <Image
                src={featuredEvent.image}
                alt={featuredEvent.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.heroOverlay} />
            <div className={styles.heroContent}>
              <span className={styles.heroTag}>Featured</span>
              <h2 className={styles.heroTitle}>{featuredEvent.title}</h2>
              <p className={styles.heroDate}>{featuredEvent.date}</p>
              <p className={styles.heroDescription}>{featuredEvent.description}</p>
              <Button>{featuredEvent.cta}</Button>
            </div>
          </div>
        )}

        <div className={styles.grid}>
          {otherEvents.map(event => (
            <article key={event.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.content}>
                <p className={styles.date}>{event.date}</p>
                <h3 className={styles.cardTitle}>{event.title}</h3>
                <p className={styles.description}>{event.description}</p>
                <Button variant="outline" size="sm">{event.cta}</Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
