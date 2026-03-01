'use client';

import { useState } from 'react';
import { Calendar, Clock, Users, Phone, Mail, MessageSquare } from 'lucide-react';
import Button from '@/components/ui/Button';
import styles from './page.module.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  partySize: string;
  specialRequests: string;
}

export default function ReservePage() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    partySize: '2',
    specialRequests: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        partySize: '2',
        specialRequests: ''
      });
    }, 3000);
  };

  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.title}>Reserve a Table</h1>
          <p className={styles.subtitle}>Book your dining experience at MenuMuse</p>
        </div>

        <div className={styles.content}>
          <div className={styles.formSection}>
            <h2 className={styles.formTitle}>Reservation Details</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 500 }}>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '12px', border: '1.5px solid #E8E4DE', borderRadius: '8px', fontSize: '16px' }}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 500 }}>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '12px', border: '1.5px solid #E8E4DE', borderRadius: '8px', fontSize: '16px' }}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 500 }}>Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '12px', border: '1.5px solid #E8E4DE', borderRadius: '8px', fontSize: '16px' }}
                    placeholder="(212) 555-0100"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 500 }}>Party Size *</label>
                  <select
                    name="partySize"
                    value={formData.partySize}
                    onChange={handleChange}
                    style={{ width: '100%', padding: '12px', border: '1.5px solid #E8E4DE', borderRadius: '8px', fontSize: '16px', backgroundColor: '#fff' }}
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map(n => (
                      <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={styles.formRow}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 500 }}>Date *</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '12px', border: '1.5px solid #E8E4DE', borderRadius: '8px', fontSize: '16px' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 500 }}>Time *</label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '12px', border: '1.5px solid #E8E4DE', borderRadius: '8px', fontSize: '16px', backgroundColor: '#fff' }}
                  >
                    <option value="">Select a time</option>
                    {['5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'].map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 500 }}>Special Requests</label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows={4}
                  style={{ width: '100%', padding: '12px', border: '1.5px solid #E8E4DE', borderRadius: '8px', fontSize: '16px', resize: 'vertical' }}
                  placeholder="Any dietary restrictions, celebrations, or seating preferences..."
                />
              </div>

              <Button type="submit" size="lg" fullWidth>
                Confirm Reservation
              </Button>
            </form>
          </div>

          <div className={styles.infoSection}>
            <h2 className={styles.infoTitle}>Contact Information</h2>
            
            <div className={styles.infoItem}>
              <div className={styles.infoLabel}><Phone size={14} style={{ marginRight: '4px' }} /> Phone</div>
              <p className={styles.infoText}>(212) 555-0142</p>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoLabel}><Mail size={14} style={{ marginRight: '4px' }} /> Email</div>
              <p className={styles.infoText}>reservations@menumuse.com</p>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoLabel}><Calendar size={14} style={{ marginRight: '4px' }} /> Hours</div>
              <p className={styles.infoText}>
                Mon-Thu: 5PM - 11PM<br />
                Fri-Sat: 5PM - 12AM<br />
                Sun: 4PM - 10PM
              </p>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoLabel}><MessageSquare size={14} style={{ marginRight: '4px' }} /> For Large Parties</div>
              <p className={styles.infoText}>
                For parties of 10 or more, please call us directly for special arrangements.
              </p>
            </div>
          </div>
        </div>

        {showSuccess && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <div className={styles.modalIcon}>✓</div>
              <h3 className={styles.modalTitle}>Reservation Confirmed!</h3>
              <p className={styles.modalText}>
                Thank you for your reservation. We look forward to seeing you!
                A confirmation email has been sent to {formData.email}.
              </p>
              <Button onClick={() => setShowSuccess(false)}>Close</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
