export interface MenuItem {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  calories: number;
  category: 'starters' | 'mains' | 'drinks' | 'desserts';
  image: string;
  tags: ('spicy' | 'vegetarian' | 'popular' | 'new')[];
  popularity: number;
  ingredients: string[];
}

export const menuItems: MenuItem[] = [
  // Starters
  {
    id: '1',
    slug: 'truffle-arancini',
    name: 'Truffle Arancini',
    description: 'Crispy risotto balls infused with black truffle, served with saffron aioli and microgreens.',
    price: 18,
    calories: 420,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?w=800&q=80',
    tags: ['popular'],
    popularity: 94,
    ingredients: ['Arborio rice', 'Black truffle', 'Parmesan', 'Saffron', 'Breadcrumbs']
  },
  {
    id: '2',
    slug: 'burrata-caprese',
    name: 'Heirloom Burrata',
    description: 'Creamy burrata with vine-ripened tomatoes, aged balsamic, and fresh basil pesto.',
    price: 22,
    calories: 380,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=800&q=80',
    tags: ['vegetarian', 'popular'],
    popularity: 91,
    ingredients: ['Burrata cheese', 'Heirloom tomatoes', 'Balsamic glaze', 'Fresh basil', 'Extra virgin olive oil']
  },
  {
    id: '3',
    slug: 'tuna-tartare',
    name: 'Yellowfin Tartare',
    description: 'Sushi-grade tuna with avocado mousse, sesame tuile, and wasabi-citrus emulsion.',
    price: 26,
    calories: 290,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=800&q=80',
    tags: ['popular'],
    popularity: 88,
    ingredients: ['Yellowfin tuna', 'Avocado', 'Sesame', 'Wasabi', 'Citrus']
  },
  {
    id: '4',
    slug: 'calamari-fritti',
    name: 'Calamari Fritti',
    description: 'Lightly fried calamari with cherry peppers, lemon zest, and herb marinara.',
    price: 16,
    calories: 340,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&q=80',
    tags: [],
    popularity: 82,
    ingredients: ['Calamari', 'Cherry peppers', 'Lemon', 'Marinara sauce', 'Parsley']
  },
  {
    id: '5',
    slug: 'soup-of-day',
    name: 'Chef\'s Daily Soup',
    description: 'Rotating seasonal soup served with artisan sourdough and compound butter.',
    price: 12,
    calories: 280,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80',
    tags: ['vegetarian'],
    popularity: 75,
    ingredients: ['Seasonal vegetables', 'Sourdough', 'Butter', 'Fresh herbs']
  },
  // Mains
  {
    id: '6',
    slug: 'wagyu-ribeye',
    name: 'Wagyu Ribeye',
    description: '12oz A5 Japanese Wagyu with bone marrow butter, roasted garlic, and truffle jus.',
    price: 95,
    calories: 780,
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80',
    tags: ['popular'],
    popularity: 98,
    ingredients: ['Wagyu ribeye', 'Bone marrow', 'Truffle', 'Garlic', 'Thyme']
  },
  {
    id: '7',
    slug: 'lobster-risotto',
    name: 'Maine Lobster Risotto',
    description: 'Butter-poached lobster tail with saffron risotto, Champagne beurre blanc, and caviar.',
    price: 58,
    calories: 820,
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&q=80',
    tags: ['popular', 'new'],
    popularity: 96,
    ingredients: ['Maine lobster', 'Arborio rice', 'Saffron', 'Champagne', 'Caviar']
  },
  {
    id: '8',
    slug: 'duck-confit',
    name: 'Duck Confit',
    description: 'Slow-cooked duck leg with cherry gastrique, potato galette, and wilted greens.',
    price: 42,
    calories: 640,
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=800&q=80',
    tags: [],
    popularity: 85,
    ingredients: ['Duck leg', 'Cherries', 'Potatoes', 'Greens', 'Gastrique']
  },
  {
    id: '9',
    slug: 'sea-bass',
    name: 'Mediterranean Sea Bass',
    description: 'Pan-seared branzino with olive tapenade, roasted tomatoes, and lemon caper butter.',
    price: 44,
    calories: 480,
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&q=80',
    tags: [],
    popularity: 83,
    ingredients: ['Sea bass', 'Olives', 'Tomatoes', 'Capers', 'Lemon']
  },
  {
    id: '10',
    slug: 'pasta-truffle',
    name: 'Truffle Tagliatelle',
    description: 'Fresh handmade pasta with black truffle cream sauce, aged Parmesan, and chives.',
    price: 36,
    calories: 620,
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&q=80',
    tags: ['vegetarian', 'popular'],
    popularity: 90,
    ingredients: ['Fresh pasta', 'Black truffle', 'Parmesan', 'Cream', 'Chives']
  },
  {
    id: '11',
    slug: 'lamb-chops',
    name: 'New Zealand Lamb',
    description: 'Herb-crusted rack of lamb with mint gremolata, roasted root vegetables, and red wine jus.',
    price: 52,
    calories: 710,
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=800&q=80',
    tags: ['popular'],
    popularity: 87,
    ingredients: ['Lamb rack', 'Mint', 'Garlic', 'Root vegetables', 'Red wine']
  },
  {
    id: '12',
    slug: 'vegetable-tower',
    name: 'Garden Vegetable Tower',
    description: 'Layered seasonal vegetables with quinoa, goat cheese mousse, and herb pistou.',
    price: 28,
    calories: 420,
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80',
    tags: ['vegetarian', 'new'],
    popularity: 78,
    ingredients: ['Seasonal vegetables', 'Quinoa', 'Goat cheese', 'Fresh herbs']
  },
  // Desserts
  {
    id: '13',
    slug: 'chocolate-souffle',
    name: 'Chocolate Soufflé',
    description: 'Valrhona dark chocolate soufflé with vanilla crème anglaise (20 min preparation).',
    price: 16,
    calories: 380,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=800&q=80',
    tags: ['popular'],
    popularity: 95,
    ingredients: ['Dark chocolate', 'Eggs', 'Sugar', 'Vanilla', 'Butter']
  },
  {
    id: '14',
    slug: 'tiramisu',
    name: 'Classic Tiramisu',
    description: 'Espresso-soaked ladyfingers with mascarpone cream and cocoa dust.',
    price: 14,
    calories: 420,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80',
    tags: ['popular'],
    popularity: 92,
    ingredients: ['Mascarpone', 'Espresso', 'Ladyfingers', 'Cocoa', 'Marsala']
  },
  {
    id: '15',
    slug: 'crème-brûlée',
    name: 'Madagascar Crème Brûlée',
    description: 'Tahitian vanilla bean custard with caramelized sugar crust and fresh berries.',
    price: 12,
    calories: 360,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=800&q=80',
    tags: ['vegetarian'],
    popularity: 86,
    ingredients: ['Vanilla beans', 'Cream', 'Eggs', 'Sugar', 'Berries']
  },
  {
    id: '16',
    slug: 'affogato',
    name: 'Tiramisu Affogato',
    description: 'Vanilla gelato drowned in hot espresso with amaretti crumble.',
    price: 10,
    calories: 280,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1558857563-b371033873b8?w=800&q=80',
    tags: ['vegetarian'],
    popularity: 80,
    ingredients: ['Gelato', 'Espresso', 'Amaretti', 'Cocoa']
  },
  // Drinks
  {
    id: '17',
    slug: 'signature-wine',
    name: ' somm Selected Red',
    description: 'Our sommelier\'s handpicked wine pairing, changing weekly. Ask your server for today\'s selection.',
    price: 18,
    calories: 120,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80',
    tags: ['popular'],
    popularity: 88,
    ingredients: ['Selected red wine']
  },
  {
    id: '18',
    slug: 'craft-cocktail',
    name: 'The Muse',
    description: 'Premium vodka, elderflower, cucumber, lime, and sparkling wine float.',
    price: 16,
    calories: 180,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80',
    tags: ['new'],
    popularity: 85,
    ingredients: ['Vodka', 'Elderflower', 'Cucumber', 'Lime', 'Sparkling wine']
  },
  {
    id: '19',
    slug: 'espresso-martini',
    name: 'Espresso Martini',
    description: 'Freshly brewed espresso, vodka, Kahlúa, with velvet foam.',
    price: 15,
    calories: 200,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1545438102-799c3991ffb2?w=800&q=80',
    tags: ['popular'],
    popularity: 91,
    ingredients: ['Espresso', 'Vodka', 'Kahlúa', 'Coffee beans']
  },
  {
    id: '20',
    slug: 'mocktail',
    name: 'Garden Fresca',
    description: 'Fresh-pressed watermelon, mint, lime, and ginger beer.',
    price: 8,
    calories: 90,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=800&q=80',
    tags: ['vegetarian', 'new'],
    popularity: 72,
    ingredients: ['Watermelon', 'Mint', 'Lime', 'Ginger beer']
  }
];

export const categories = [
  { id: 'all', name: 'All', label: 'All Items' },
  { id: 'starters', name: 'Starters', label: 'Starters' },
  { id: 'mains', name: 'Mains', label: 'Main Courses' },
  { id: 'drinks', name: 'Drinks', label: 'Beverages' },
  { id: 'desserts', name: 'Desserts', label: 'Desserts' }
] as const;

export const priceRange = {
  min: 0,
  max: 100
};
