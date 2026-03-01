'use client';

import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { menuItems, categories } from '@/data/menu';
import { filterMenuItems, defaultFilters, FilterState } from '@/lib/filters';
import { useCart } from '@/context/CartContext';
import Card from '@/components/ui/Card';
import Tabs from '@/components/ui/Tabs';
import styles from './page.module.css';

export default function MenuPage() {
  const { addItem } = useCart();
  const [filters, setFilters] = useState<FilterState>(defaultFilters);
  const [isLoading, setIsLoading] = useState(false);

  const filteredItems = useMemo(() => {
    return filterMenuItems(menuItems, filters);
  }, [filters]);

  const handleCategoryChange = (category: string) => {
    setFilters(prev => ({ ...prev, category }));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({ ...prev, search: e.target.value }));
  };

  const handleTagToggle = (tag: string) => {
    setFilters(prev => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter(t => t !== tag)
        : [...prev.tags, tag]
    }));
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters(prev => ({ ...prev, sort: e.target.value as FilterState['sort'] }));
  };

  const handleAddToCart = (item: typeof menuItems[0]) => {
    addItem(item);
  };

  const categoryTabs = categories.map(cat => ({
    id: cat.id,
    label: cat.label
  }));

  return (
    <div className={styles.menuPage}>
      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.title}>Our Menu</h1>
          <p className={styles.subtitle}>Discover our culinary creations, crafted with passion</p>
        </div>

        <div className={styles.filters}>
          <Tabs
            tabs={categoryTabs}
            activeTab={filters.category}
            onChange={handleCategoryChange}
          />

          <div className={styles.filterRow}>
            <div className={styles.searchWrapper}>
              <div style={{ position: 'relative' }}>
                <Search style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#6B6B6B' }} size={18} />
                <input
                  type="text"
                  placeholder="Search dishes..."
                  value={filters.search}
                  onChange={handleSearchChange}
                  style={{
                    width: '100%',
                    padding: '12px 12px 12px 40px',
                    fontSize: '14px',
                    border: '1.5px solid #E8E4DE',
                    borderRadius: '8px',
                    backgroundColor: '#fff'
                  }}
                />
              </div>
            </div>

            <div className={styles.filterGroup}>
              <button
                className={`${styles.filterChip} ${filters.tags.includes('spicy') ? styles.active : ''}`}
                onClick={() => handleTagToggle('spicy')}
              >
                🌶️ Spicy
              </button>
              <button
                className={`${styles.filterChip} ${filters.tags.includes('vegetarian') ? styles.active : ''}`}
                onClick={() => handleTagToggle('vegetarian')}
              >
                🥬 Vegetarian
              </button>
            </div>

            <select
              className={styles.sortSelect}
              value={filters.sort}
              onChange={handleSortChange}
            >
              <option value="default">Sort by</option>
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        <p className={styles.resultsInfo}>
          Showing {filteredItems.length} {filteredItems.length === 1 ? 'dish' : 'dishes'}
        </p>

        {filteredItems.length > 0 ? (
          <div className={styles.menuGrid}>
            {filteredItems.map(item => (
              <Card
                key={item.id}
                item={item}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>🍽️</div>
            <h3 className={styles.emptyTitle}>No dishes found</h3>
            <p className={styles.emptyText}>Try adjusting your filters or search terms</p>
          </div>
        )}
      </div>
    </div>
  );
}
