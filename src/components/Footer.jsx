import React from 'react';
import { Crown, Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--emerald-deep)',
        borderTop: '1px solid var(--border-gold)',
        padding: '4rem 0 2.5rem 0',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div className="container" style={{ textAlign: 'center' }}>
        {/* Crown Icon */}
        <div
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'var(--gold-gradient)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#07130e',
            margin: '0 auto 1.25rem auto',
            boxShadow: '0 4px 20px rgba(230, 202, 101, 0.4)'
          }}
        >
          <Crown size={28} />
        </div>

        {/* Title */}
        <h3 className="font-serif text-gold-shimmer" style={{ fontSize: '2rem', fontWeight: 700 }}>
          Flore Doleresse
        </h3>

        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', margin: '0.5rem 0 2rem 0' }}>
          Édition Spéciale Anniversaire • 1er Décembre 👑
        </p>

        {/* Heart Note */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1.25rem',
            borderRadius: 'var(--radius-full)',
            background: 'rgba(230, 202, 101, 0.1)',
            border: '1px solid var(--border-gold)',
            color: 'var(--gold-light)',
            fontSize: '0.9rem'
          }}
        >
          <span>Créé avec amour & admiration</span>
          <Heart size={16} fill="var(--gold-primary)" color="var(--gold-primary)" />
        </div>

        {/* Copyright & Year Privacy Note */}
        <div
          style={{
            marginTop: '3rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            color: 'var(--text-muted)',
            fontSize: '0.8rem'
          }}
        >
          © {new Date().getFullYear()} Flore Doleresse Official Birthday Experience. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
