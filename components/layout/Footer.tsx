import Link from 'next/link';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <h3>Menu<span>Muse</span></h3>
            <p>Experience culinary artistry at its finest. Where every dish tells a story and every moment becomes a cherished memory.</p>
          </div>
          
          <div className={styles.column}>
            <h4>Navigate</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/menu">Menu</Link></li>
              <li><Link href="/locations">Locations</Link></li>
              <li><Link href="/reserve">Reservations</Link></li>
              <li><Link href="/events">Events</Link></li>
            </ul>
          </div>
          
          <div className={styles.column}>
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+12125550142">(212) 555-0142</a></li>
              <li><a href="mailto:hello@menumuse.com">hello@menumuse.com</a></li>
              <li><Link href="/locations">Find a Location</Link></li>
              <li><Link href="/careers">Careers</Link></li>
            </ul>
          </div>
          
          <div className={styles.column}>
            <h4>Hours</h4>
            <ul>
              <li>Mon-Thu: 5PM - 11PM</li>
              <li>Fri-Sat: 5PM - 12AM</li>
              <li>Sun: 4PM - 10PM</li>
            </ul>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p className={styles.copyright}>© 2024 MenuMuse. All rights reserved.</p>
          <div className={styles.social}>
            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
