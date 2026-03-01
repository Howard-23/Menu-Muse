import Image from 'next/image';
import { MapPin, Phone } from 'lucide-react';
import { locations } from '@/data/locations';
import styles from './page.module.css';

export default function LocationsPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.title}>Our Locations</h1>
          <p className={styles.subtitle}>Find a MenuMuse near you</p>
        </div>

        <div className={styles.grid}>
          {locations.map(location => (
            <article key={location.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={location.image}
                  alt={location.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.content}>
                <h2 className={styles.name}>{location.name}</h2>
                <div className={styles.address}>
                  <MapPin size={16} />
                  <span>{location.address}</span>
                </div>
                <div className={styles.phone}>
                  <Phone size={16} />
                  <span>{location.phone}</span>
                </div>
                <div className={styles.hours}>
                  <h3 className={styles.hoursTitle}>Hours</h3>
                  <div className={styles.hoursList}>
                    {location.hours.map((h, i) => (
                      <div key={i} className={styles.hoursItem}>
                        <span>{h.day}</span>
                        <span>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
