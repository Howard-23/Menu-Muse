import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Minus, Plus } from 'lucide-react';
import { menuItems } from '@/data/menu';
import { getMenuItemBySlug, getRelatedItems } from '@/lib/filters';
import { formatPrice } from '@/lib/formatters';
import AddToCartButton from './AddToCartButton';
import Card from '@/components/ui/Card';
import styles from './page.module.css';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return menuItems.map((item) => ({
    slug: item.slug,
  }));
}

export default async function MenuItemPage({ params }: Props) {
  const { slug } = await params;
  const item = getMenuItemBySlug(slug);
  
  if (!item) {
    notFound();
  }

  const relatedItems = getRelatedItems(slug, 4);

  const tagLabels: Record<string, string> = {
    spicy: '🌶️ Spicy',
    vegetarian: '🥬 Vegetarian',
    popular: '★ Popular',
    new: '✨ New'
  };

  return (
    <div className={styles.detailPage}>
      <div className="container">
        <Link href="/menu" className={styles.backLink}>
          <ArrowLeft size={18} />
          Back to Menu
        </Link>

        <div className={styles.grid}>
          <div className={styles.imageWrapper}>
            <Image
              src={item.image}
              alt={item.name}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>

          <div className={styles.content}>
            <span className={styles.category}>{item.category}</span>
            <h1 className={styles.title}>{item.name}</h1>
            <p className={styles.price}>{formatPrice(item.price)}</p>
            <p className={styles.description}>{item.description}</p>

            <div className={styles.meta}>
              <span>{item.calories} calories</span>
              <span>•</span>
              <span>{item.popularity}% popular</span>
            </div>

            {item.tags.length > 0 && (
              <div className={styles.tags}>
                {item.tags.map(tag => (
                  <span key={tag} className={`${styles.tag} ${styles[tag]}`}>
                    {tagLabels[tag]}
                  </span>
                ))}
              </div>
            )}

            <div className={styles.ingredients}>
              <h4>Ingredients</h4>
              <div className={styles.ingredientsList}>
                {item.ingredients.map(ingredient => (
                  <span key={ingredient} className={styles.ingredient}>
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>

            <AddToCartButton item={item} />
          </div>
        </div>

        {relatedItems.length > 0 && (
          <section className={styles.related}>
            <h2 className={styles.relatedTitle}>You Might Also Like</h2>
            <div className={styles.relatedGrid}>
              {relatedItems.map(related => (
                <Card key={related.id} item={related} showAddToCart={false} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
