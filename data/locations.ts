export interface Location {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: { day: string; time: string }[];
  image: string;
  coordinates: { lat: number; lng: number };
}

export const locations: Location[] = [
  {
    id: '1',
    name: 'MenuMuse Downtown',
    address: '42 Culinary Avenue, Financial District',
    phone: '(212) 555-0142',
    hours: [
      { day: 'Monday - Thursday', time: '5:00 PM - 11:00 PM' },
      { day: 'Friday - Saturday', time: '5:00 PM - 12:00 AM' },
      { day: 'Sunday', time: '4:00 PM - 10:00 PM' }
    ],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    coordinates: { lat: 40.7128, lng: -74.0060 }
  },
  {
    id: '2',
    name: 'MenuMuse Midtown',
    address: '88 Gourmet Plaza, Midtown Manhattan',
    phone: '(212) 555-0188',
    hours: [
      { day: 'Monday - Friday', time: '11:30 AM - 10:00 PM' },
      { day: 'Saturday', time: '12:00 PM - 11:00 PM' },
      { day: 'Sunday', time: 'Closed' }
    ],
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    coordinates: { lat: 40.7549, lng: -73.9840 }
  },
  {
    id: '3',
    name: 'MenuMuse Brooklyn',
    address: '156 Flavor Street, Williamsburg',
    phone: '(718) 555-0156',
    hours: [
      { day: 'Monday - Sunday', time: '4:00 PM - 11:00 PM' }
    ],
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80',
    coordinates: { lat: 40.7081, lng: -73.9571 }
  }
];

export const reviews = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    rating: 5,
    text: 'An extraordinary culinary journey. The Wagyu ribeye was cooked to perfection, and the service was impeccable. This is fine dining at its best.',
    date: 'December 2024'
  },
  {
    id: '2',
    name: 'James Chen',
    rating: 5,
    text: 'The best restaurant experience in the city. The lobster risotto is a must-try, and the sommelier\'s wine recommendations were spot-on.',
    date: 'November 2024'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    rating: 5,
    text: 'Celebrated our anniversary here and it was perfect. The chocolate soufflé lived up to the hype. Already planning our next visit!',
    date: 'November 2024'
  },
  {
    id: '4',
    name: 'Michael Thompson',
    rating: 4,
    text: 'Outstanding food and beautiful ambiance. The truffle tagliatelle was divine. Slightly pricey but worth every penny for a special occasion.',
    date: 'October 2024'
  }
];

export const events = [
  {
    id: '1',
    title: 'Winter Tasting Menu',
    description: 'Experience our exclusive 7-course winter tasting menu featuring seasonal ingredients and special wine pairings.',
    date: 'Every Friday & Saturday in January',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q80',
    cta: 'Reserve Now'
  },
  {
    id: '2',
    title: 'Wine & Dine Evening',
    description: 'Join our executive chef and sommelier for an intimate evening of perfectly paired courses and premium wines.',
    date: 'February 14th, 2025',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80',
    cta: 'Learn More'
  },
  {
    id: '3',
    title: 'Cooking Masterclass',
    description: 'Learn the secrets of our kitchen with hands-on cooking classes led by our executive chef.',
    date: 'Monthly - Next: February 22nd',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80',
    cta: 'Sign Up'
  }
];
