import Button from '@/components/ui/Button';
import styles from './page.module.css';

export default function StyleGuidePage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.title}>Style Guide</h1>
          <p className={styles.subtitle}>Design tokens and component reference</p>
        </div>

        {/* Colors */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Colors</h2>
          <div className={styles.colors}>
            {[
              { name: 'Primary', value: '#1A1A1A' },
              { name: 'Accent', value: '#C9A962' },
              { name: 'Wine', value: '#8B2635' },
              { name: 'Background', value: '#FDFBF7' },
              { name: 'Text', value: '#2D2D2D' },
              { name: 'Text Light', value: '#6B6B6B' },
              { name: 'Border', value: '#E8E4DE' },
            ].map(color => (
              <div key={color.name} className={styles.colorCard} style={{ background: color.value }}>
                <div className={styles.colorSwatch} style={{ background: color.name === 'Background' || color.name === 'Border' ? '#FDFBF7' : color.value, border: '1px solid #E8E4DE' }} />
                <p className={styles.colorName}>{color.name}</p>
                <p className={styles.colorValue}>{color.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Typography</h2>
          <div className={styles.typography}>
            <div className={styles.typeItem}>
              <p className={styles.typeLabel}>Playfair Display - Heading</p>
              <p className={styles.typeHeading}>The quick brown fox jumps over the lazy dog</p>
            </div>
            <div className={styles.typeItem}>
              <p className={styles.typeLabel}>DM Sans - Body</p>
              <p className={styles.typeBody}>The quick brown fox jumps over the lazy dog</p>
            </div>
            <div className={styles.typeItem}>
              <p className={styles.typeLabel}>Cormorant Garamond - Accent</p>
              <p className={styles.typeAccent}>The quick brown fox jumps over the lazy dog</p>
            </div>
          </div>
        </section>

        {/* Spacing */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Spacing</h2>
          <div className={styles.spacing}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map(space => (
              <div
                key={space}
                className={styles.spaceItem}
                style={{ width: `calc(var(--space-${space}) * 4)`, height: `calc(var(--space-${space}) * 4)` }}
              >
                {space}
              </div>
            ))}
          </div>
        </section>

        {/* Buttons */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Buttons</h2>
          <div className={styles.buttons}>
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button size="sm">Small</Button>
            <Button size="lg">Large</Button>
          </div>
        </section>

        {/* Inputs */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Inputs</h2>
          <div className={styles.inputs}>
            <input type="text" className={styles.inputField} placeholder="Text input" />
            <input type="email" className={styles.inputField} placeholder="Email input" />
            <input type="password" className={styles.inputField} placeholder="Password input" />
            <textarea className={styles.inputField} placeholder="Textarea" rows={3} />
          </div>
        </section>

        {/* Cards */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Cards</h2>
          <div className={styles.cards}>
            {[1, 2, 3].map(i => (
              <div key={i} className={styles.demoCard}>
                <div className={styles.demoCardImage} />
                <div className={styles.demoCardContent}>
                  <h3 className={styles.demoCardTitle}>Card Title</h3>
                  <p className={styles.demoCardText}>This is a sample card description with some text content.</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
