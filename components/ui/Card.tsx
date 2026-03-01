'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Card.module.css';
import { MenuItem } from '@/data/menu';
import { formatPrice, cn } from '@/lib/formatters';
import Button from './Button';

interface CardProps {
  item: MenuItem;
  onAddToCart?: (item: MenuItem) => void;
  showAddToCart?: boolean;
}

const tagLabels: Record<string, string> = {
  spicy: '🌶️ Spicy',
  vegetarian: '🥬 Vegetarian',
  popular: '★ Popular',
  new: '✨ New'
};

export default function Card({ item, onAddToCart, showAddToCart = true }: CardProps) {
  return (
    <article className={styles.card}>
      <Link href={`/menu/${item.slug}`} className={styles.imageWrapper}>
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className={styles.image}
        />
      </Link>
      <div className={styles.content}>
        {item.tags.length > 0 && (
          <div className={styles.tags}>
            {item.tags.map(tag => (
              <span key={tag} className={cn(styles.tag, styles[tag])}>
                {tagLabels[tag]}
              </span>
            ))}
          </div>
        )}
        <Link href={`/menu/${item.slug}`}>
          <h3 className={styles.title}>{item.name}</h3>
        </Link>
        <p className={styles.description}>{item.description}</p>
        <div className={styles.meta}>
          <span className={styles.price}>{formatPrice(item.price)}</span>
          <span>•</span>
          <span>{item.calories} cal</span>
        </div>
        {showAddToCart && onAddToCart && (
          <Button
            variant="outline"
            size="sm"
            fullWidth
            onClick={() => onAddToCart(item)}
            style={{ marginTop: 'var(--space-3)' }}
          >
            Add to Tray
          </Button>
        )}
      </div>
    </article>
  );
}
