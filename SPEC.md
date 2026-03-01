# MenuMuse - Premium Restaurant Website Specification

## Project Overview
- **Project Name**: MenuMuse
- **Type**: Premium restaurant website with interactive menu and reservation UI
- **Core Functionality**: Browse menu items with filtering/sorting, view dish details, reserve tables
- **Target Users**: Restaurant customers looking to browse menu, order online, or make reservations
- **Tech Stack**: Next.js 14 (App Router), TypeScript, CSS Modules, No UI frameworks

## Visual & Rendering Specification

### Design Theme
- **Vibe**: Sophisticated, warm, culinary elegance
- **Primary Color**: `#1A1A1A` (rich black)
- **Accent Color**: `#C9A962` (warm gold)
- **Secondary Accent**: `#8B2635` (wine red)
- **Background**: `#FDFBF7` (warm cream) / `#0D0D0D` (dark mode option)
- **Text**: `#2D2D2D` (primary), `#6B6B6B` (secondary)

### Typography
- **Headings**: "Playfair Display" (serif, elegant)
- **Body**: "DM Sans" (clean, readable)
- **Accent**: "Cormorant Garamond" (menu descriptions)

### Layout System
- Max content width: 1400px
- Grid: 12-column system
- Spacing scale: 4px base (4, 8, 12, 16, 24, 32, 48, 64, 96)
- Breakpoints: 640px (mobile), 768px (tablet), 1024px (desktop), 1280px (wide)

### Visual Effects
- Subtle box shadows with warm tones
- Smooth transitions (0.3s ease)
- Hover lift effects on cards
- Skeleton loaders with shimmer animation
- Staggered fade-in animations on page load

## Pages & Structure

### 1. Home (/)
- **Hero Section**: Full-width with background image, headline "Culinary Artistry Awaits", dual CTAs (Order Now, Reserve Table)
- **Featured Dishes**: Horizontal scroll/grid of signature items
- **Story Section**: Chef's philosophy with image
- **Reviews**: Carousel of customer testimonials
- **Location CTA**: Mini map preview with link to locations
- **Footer**: Navigation links, social icons, newsletter signup

### 2. Menu (/menu)
- **Category Tabs**: All, Starters, Mains, Drinks, Desserts (pill-style)
- **Filter Bar**:
  - Search input with icon
  - Filter chips: Spicy 🌶️, Vegetarian 🥬
  - Price range slider ($0 - $50)
  - Sort dropdown: Popular, Price Low-High, Price High-Low
- **Menu Grid**: Responsive card grid (1/2/3/4 columns)
- **Card Design**: Image, name, price, calories, tags, "Add to Tray" button
- **Empty State**: Illustrated message when no results
- **Loading State**: Skeleton cards while loading

### 3. Menu Item Detail (/menu/[slug])
- **Hero**: Large image, name, price, description
- **Details**: Calories, dietary tags, ingredients
- **Quantity Selector**: Plus/minus with add to tray
- **Related Items**: "You might also like" section
- **Back Navigation**: Breadcrumb-style return

### 4. Locations (/locations)
- **Branch Cards**: Image, name, address, phone, hours
- **Hours Display**: Today's hours highlighted
- **Interactive Map**: Static image with CTA

### 5. Reserve (/reserve)
- **Form Fields**: Name, email, phone, date, time, party size, special requests
- **Date/Time Pickers**: Styled select dropdowns
- **Validation**: Real-time validation messages
- **Success Modal**: Confirmation after submit (no backend)
- **Restaurant Info**: Contact details, directions link

### 6. Events (/events)
- **Event Cards**: Image, title, date, description, "Learn More" CTA
- **Featured Promotions**: Highlighted banner

### 7. Style Guide (/style-guide)
- **Typography**: All font variants
- **Color Palette**: All theme colors with codes
- **Components**: All UI components displayed
- **Spacing**: Visual spacing scale

## UI Components

### Layout Components
- **Navbar**: Logo, nav links, mini cart icon, mobile hamburger
- **Footer**: Multi-column with links, social, newsletter
- **Container**: Max-width wrapper with padding

### UI Components
- **Button**: Primary, secondary, ghost variants; sizes: sm, md, lg
- **Card**: Image, content, hover states
- **Tabs**: Horizontal pill-style navigation
- **Input**: Text, search, textarea variants
- **RangeSlider**: Dual-handle price filter
- **Chip**: Filter tags with active state
- **Modal**: Overlay with close button
- **Drawer**: Slide-in cart/mobile menu

### Block Components
- **Hero**: Background image, overlay, content
- **DishGrid**: Responsive menu card grid
- **ReviewSection**: Testimonial carousel
- **ReservationForm**: Full reservation form

### Icons
- Lucide React icons (Menu, ShoppingCart, Search, MapPin, Calendar, Clock, Star, etc.)

## Data Structure

### Menu Items (/data/menu.ts)
```
typescript
interface MenuItem {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  calories: number;
  category: 'starters' | 'mains' | 'drinks' | 'desserts';
  image: string;
  tags: ('spicy' | 'vegetarian' | 'popular' | 'new')[];
  popularity: number; // 1-100
  ingredients: string[];
}
```

### Locations (/data/locations.ts)
```
typescript
interface Location {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: { day: string; time: string }[];
  image: string;
  coordinates: { lat: number; lng: number };
}
```

## State Management
- **React useState** for:
  - Menu filters (category, search, price range, tags, sort)
  - Cart/Tray items (client-side only)
  - Modal/Drawer visibility
  - Form state for reservations
- **useEffect** for:
  - Skeleton loading simulation
  - Filter application

## Acceptance Criteria

### Functional
- [ ] All pages render without errors
- [ ] Menu filtering works correctly (category, search, price, tags, sort)
- [ ] Add to tray updates cart count
- [ ] Reservation form validates and shows success modal
- [ ] Responsive on all breakpoints
- [ ] Navigation between pages works

### Visual
- [ ] Design matches premium restaurant aesthetic
- [ ] Animations are smooth (60fps)
- [ ] Skeleton loaders display during initial load
- [ ] Empty states show when no filter results
- [ ] All hover/focus states implemented

### Accessibility
- [ ] Keyboard navigation works
- [ ] ARIA labels on interactive elements
- [ ] Focus management in modals
- [ ] Color contrast meets WCAG AA

## Build Order
1. Setup project + tokens + base layout
2. Menu UI (tabs, filters, cards)
3. Item detail page
4. Reservation flow UI
5. Home/locations/events pages
6. Polish: animations + empty states + skeletons
