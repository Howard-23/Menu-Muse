import Link from 'next/link';
import Image from 'next/image';
import { Star } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { menuItems } from '@/data/menu';
import { reviews } from '@/data/locations';
import styles from './page.module.css';

export default function Home() {
  const featuredDishes = menuItems.filter(item => item.tags.includes('popular')).slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Culinary Artistry<br /><span>Awaits</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Experience the perfect fusion of flavor, technique, and passion
          </p>
          <div className={styles.heroButtons}>
            <Link href="/menu">
              <Button size="lg">View Menu</Button>
            </Link>
            <Link href="/reserve">
              <Button size="lg" variant="outline" style={{ borderColor: '#fff', color: '#fff' }}>
                Reserve a Table
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Signature Dishes</h2>
            <p className={styles.sectionSubtitle}>Our most beloved creations, crafted with passion</p>
          </div>
          <div className={styles.dishesGrid}>
            {featuredDishes.map(dish => (
              <Card key={dish.id} item={dish} showAddToCart={false} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-7)' }}>
            <Link href="/menu">
              <Button variant="outline">Explore Full Menu</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.storyImage}>
              <Image
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80"
                alt="Chef preparing food"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.storyContent}>
              <h2>The MenuMuse Philosophy</h2>
              <p>
                At MenuMuse, we believe dining is an art form. Our culinary team combines 
                time-honored techniques with modern innovation to create dishes that 
                delight the senses and nourish the soul.
              </p>
              <p>
                Every ingredient is carefully sourced from trusted purveyers, and every 
                dish is crafted with meticulous attention to detail. This is not just 
                food — it's an experience.
              </p>
              <Link href="/locations">
                <Button>Visit Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>What Our Guests Say</h2>
            <p className={styles.sectionSubtitle}>Stories from our dining community</p>
          </div>
          <div className={styles.reviewsGrid}>
            {reviews.map(review => (
              <div key={review.id} className={styles.reviewCard}>
                <div className={styles.reviewStars}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < review.rating ? 'currentColor' : 'none'} />
                  ))}
                </div>
                <p className={styles.reviewText}>{review.text}</p>
                <p className={styles.reviewAuthor}>{review.name}</p>
                <p className={styles.reviewDate}>{review.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location CTA */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.locationCta}>
            <h2>Find Your Nearest MenuMuse</h2>
            <p>Three locations across the city, each offering a unique dining experience</p>
            <Link href="/locations">
              <Button variant="secondary">View Locations</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
