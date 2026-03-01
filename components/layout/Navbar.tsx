'use client';

import Link from 'next/link';
import { ShoppingBag, Menu } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/locations', label: 'Locations' },
  { href: '/reserve', label: 'Reserve' },
  { href: '/events', label: 'Events' },
];

export default function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Menu<span>Muse</span>
        </Link>
        
        <div className={styles.nav}>
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className={styles.actions}>
          <Link href="/menu" className={styles.cartButton}>
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className={styles.cartBadge}>{totalItems}</span>
            )}
          </Link>
          <button className={styles.mobileMenuBtn} aria-label="Open menu">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}
