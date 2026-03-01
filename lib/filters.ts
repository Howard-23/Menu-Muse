import { MenuItem, menuItems, priceRange } from '@/data/menu';

export interface FilterState {
  category: string;
  search: string;
  priceMin: number;
  priceMax: number;
  tags: string[];
  sort: 'popular' | 'price-low' | 'price-high' | 'default';
}

export const defaultFilters: FilterState = {
  category: 'all',
  search: '',
  priceMin: priceRange.min,
  priceMax: priceRange.max,
  tags: [],
  sort: 'default'
};

export function filterMenuItems(items: MenuItem[], filters: FilterState): MenuItem[] {
  let filtered = [...items];

  // Category filter
  if (filters.category !== 'all') {
    filtered = filtered.filter(item => item.category === filters.category);
  }

  // Search filter
  if (filters.search.trim()) {
    const searchLower = filters.search.toLowerCase();
    filtered = filtered.filter(
      item =>
        item.name.toLowerCase().includes(searchLower) ||
        item.description.toLowerCase().includes(searchLower)
    );
  }

  // Price filter
  filtered = filtered.filter(
    item => item.price >= filters.priceMin && item.price <= filters.priceMax
  );

  // Tags filter
  if (filters.tags.length > 0) {
    filtered = filtered.filter(item =>
      filters.tags.some(tag => item.tags.includes(tag as MenuItem['tags'][number]))
    );
  }

  // Sorting
  switch (filters.sort) {
    case 'popular':
      filtered.sort((a, b) => b.popularity - a.popularity);
      break;
    case 'price-low':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filtered.sort((a, b) => b.price - a.price);
      break;
    default:
      // Keep default order
      break;
  }

  return filtered;
}

export function getMenuItemBySlug(slug: string): MenuItem | undefined {
  return menuItems.find(item => item.slug === slug);
}

export function getRelatedItems(slug: string, limit: number = 4): MenuItem[] {
  const current = getMenuItemBySlug(slug);
  if (!current) return [];

  return menuItems
    .filter(item => item.slug !== slug && item.category === current.category)
    .slice(0, limit);
}
