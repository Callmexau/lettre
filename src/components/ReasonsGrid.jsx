import React, { useState } from 'react';
import { REASONS_WHY } from '../data/loveLetterData';
import { Sparkles, Crown, Heart, Zap, Sun, Gem, Flame, ShieldCheck, Star, Gift, Anchor, Infinity as InfinityIcon } from 'lucide-react';

const ICON_MAP = {
  Crown: Crown,
  Sparkles: Sparkles,
  Zap: Zap,
  Heart: Heart,
  Sun: Sun,
  Gem: Gem,
  Flame: Flame,
  ShieldCheck: ShieldCheck,
  Star: Star,
  Gift: Gift,
  Anchor: Anchor,
  Infinity: InfinityIcon
};

export default function ReasonsGrid() {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section
      id="reasons"
      className="page-section"
      style={{
        position: 'relative',
        background: 'var(--bg-secondary)'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-badge">
            <Sparkles size={14} /> Ce Qui Me Fait Vibrer
          </div>
          <h2 className="section-title">8 Éclats d'Étoile de Flore</h2>
          <p className="section-subtitle">
            Survolez ou touchez chaque carte pour découvrir l'une des 8 qualités 
            exceptionnelles qui font d'elle une femme unique au monde.
          </p>
        </div>

        {/* 12 Reasons Grid */}
        <div className="reasons-grid">
          {REASONS_WHY.map((reason) => {
            const IconComponent = ICON_MAP[reason.icon] || Sparkles;
            const isFlipped = !!flippedCards[reason.id];

            return (
              <div
                key={reason.id}
                className={`flip-card ${isFlipped ? 'flipped' : ''}`}
                onClick={() => toggleFlip(reason.id)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    toggleFlip(reason.id);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-pressed={isFlipped}
                aria-label={`${reason.title}, ${isFlipped ? 'masquer' : 'révéler'}`}
              >
                <div className="flip-card-inner">
                  {/* Front Side */}
                  <div className="flip-card-front">
                    <div
                      style={{
                        width: '54px',
                        height: '54px',
                        borderRadius: '50%',
                        background: 'rgba(230, 202, 101, 0.12)',
                        border: '1px solid var(--border-gold)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--gold-light)',
                        marginBottom: '1.25rem'
                      }}
                    >
                      <IconComponent size={26} />
                    </div>

                    <span
                      style={{
                        fontSize: '0.75rem',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'var(--gold-light)',
                        fontWeight: 600
                      }}
                    >
                      Éclat N°{reason.id}
                    </span>

                    <h3
                      className="font-serif"
                      style={{
                        fontSize: '1.35rem',
                        fontWeight: 600,
                        color: '#ffffff',
                        marginTop: '0.35rem',
                        lineHeight: 1.2
                      }}
                    >
                      {reason.title}
                    </h3>

                    <span
                      style={{
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)',
                        marginTop: '1.25rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem'
                      }}
                    >
                      Toucher pour révéler ✨
                    </span>
                  </div>

                  {/* Back Side */}
                  <div className="flip-card-back">
                    <span
                      style={{
                        fontSize: '0.75rem',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'var(--gold-light)',
                        fontWeight: 600,
                        marginBottom: '0.5rem'
                      }}
                    >
                      {reason.title}
                    </span>

                    <p
                      style={{
                        color: '#ffffff',
                        fontSize: '0.95rem',
                        lineHeight: 1.6,
                        textAlign: 'center'
                      }}
                    >
                      "{reason.description}"
                    </p>

                    <div style={{ marginTop: '1.25rem', color: 'var(--gold-primary)' }}>
                      <Heart size={20} fill="var(--gold-primary)" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
