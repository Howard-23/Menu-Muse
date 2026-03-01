'use client';

import { useState } from 'react';
import { Minus, Plus, ShoppingBag } from 'lucide-react';
import { MenuItem } from '@/data/menu';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/formatters';

interface Props {
  item: MenuItem;
}

export default function AddToCartButton({ item }: Props) {
  const { addItem, updateQuantity, items } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const cartItem = items.find(i => i.id === item.id);
  const currentQty = cartItem?.quantity || 0;

  const handleAdd = () => {
    addItem(item);
    setQuantity(1);
  };

  const handleIncrement = () => {
    addItem(item);
  };

  const handleDecrement = () => {
    if (cartItem) {
      updateQuantity(item.id, currentQty - 1);
    }
  };

  if (currentQty > 0) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '12px',
          background: 'var(--color-bg-card)',
          border: '1.5px solid var(--color-border)',
          borderRadius: '8px',
          padding: '8px'
        }}>
          <button
            onClick={handleDecrement}
            style={{
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '4px',
              transition: 'background 0.2s'
            }}
            aria-label="Decrease quantity"
          >
            <Minus size={18} />
          </button>
          <span style={{ minWidth: '24px', textAlign: 'center', fontWeight: 600 }}>
            {currentQty}
          </span>
          <button
            onClick={handleIncrement}
            style={{
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '4px',
              transition: 'background 0.2s'
            }}
            aria-label="Increase quantity"
          >
            <Plus size={18} />
          </button>
        </div>
        <span style={{ fontWeight: 600 }}>
          {formatPrice(item.price * currentQty)} in tray
        </span>
      </div>
    );
  }

  return (
    <button
      onClick={handleAdd}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        padding: '16px 32px',
        background: 'var(--color-accent)',
        color: 'var(--color-primary)',
        fontSize: '16px',
        fontWeight: 500,
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
      }}
    >
      <ShoppingBag size={20} />
      Add to Tray — {formatPrice(item.price)}
    </button>
  );
}
