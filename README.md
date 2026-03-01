# MenuMuse - Premium Restaurant Website

A sophisticated restaurant website built with Next.js 14 (App Router), TypeScript, and CSS Modules.

## Features

- **Interactive Menu**: Browse dishes with filtering, sorting, and search
- **Category Tabs**: All, Starters, Mains, Drinks, Desserts
- **Filters**: Spicy 🌶️, Vegetarian 🥬, price range
- **Sorting**: Popular, Price Low-High, Price High-Low
- **Add to Tray**: Client-side cart functionality
- **Menu Item Details**: Full dish information with related items
- **Table Reservation**: Reservation form with validation
- **Locations**: Branch information with hours
- **Events**: Promotions and special events
- **Style Guide**: Design system reference

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- CSS Modules + CSS Variables
- No UI frameworks

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```
bash
# Clone the repository
git clone <repository-url>

# Navigate to the project
cd menumuse

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Build for Production

```
bash
npm run build
npm start
```

## Adding Menu Items

To add new menu items, edit `data/menu.ts`:

```
typescript
{
  id: 'unique-id',
  slug: 'dish-url-slug',
  name: 'Dish Name',
  description: 'Dish description',
  price: 29, // Price in USD
  calories: 450,
  category: 'mains', // 'starters' | 'mains' | 'drinks' | 'desserts'
  image: 'https://images.unsplash.com/...', // Image URL
  tags: ['vegetarian', 'popular'], // Optional: 'spicy' | 'vegetarian' | 'popular' | 'new'
  popularity: 85, // 1-100 rating
  ingredients: ['Ingredient 1', 'Ingredient 2']
}
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── menu/
│   │   ├── page.tsx       # Menu listing
│   │   └── [slug]/page.tsx # Menu detail
│   ├── locations/page.tsx # Locations
│   ├── reserve/page.tsx   # Reservation form
│   ├── events/page.tsx    # Events
│   └── style-guide/page.tsx
├── components/
│   ├── ui/                # Reusable UI components
│   └── layout/            # Navbar, Footer
├── data/
│   ├── menu.ts           # Menu items data
│   └── locations.ts      # Locations & reviews
├── lib/
│   ├── filters.ts        # Menu filtering logic
│   └── formatters.ts     # Utility functions
└── context/
    └── CartContext.tsx   # Cart state management
```

## Vercel Deployment

1. Push your code to a GitHub repository
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and configure the build settings
5. Deploy!

## Design System

### Colors

- Primary: `#1A1A1A`
- Accent: `#C9A962` (Gold)
- Wine: `#8B2635`
- Background: `#FDFBF7`

### Typography

- Headings: Playfair Display
- Body: DM Sans
- Accent: Cormorant Garamond

## License

MIT
# Menu-Muse
