import React, { useState } from 'react';
import { LOVE_LETTER } from '../data/loveLetterData';
import { Heart, Sparkles, Lock, Unlock, Mail, Crown } from 'lucide-react';

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="letter"
      style={{
        padding: '6rem 0',
        position: 'relative',
        background: 'radial-gradient(circle at 50% 50%, rgba(21, 71, 55, 0.3) 0%, var(--bg-primary) 75%)'
      }}
    >
      <div className="container" style={{ maxWidth: '850px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-badge">
            <Heart size={14} color="var(--gold-primary)" /> Message Privé & Confidentiel
          </div>
          <h2 className="section-title">La Lettre du 1er Décembre</h2>
          <p className="section-subtitle">
            Un message gravé dans l'éternité pour célébrer la femme qui fait battre mon cœur.
          </p>
        </div>

        {/* Envelope Container */}
        <div className="envelope-container">
          <div className="envelope-box">
            {/* Top Ribbon & Seal */}
            {!isOpen ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    margin: '0 auto 1.5rem auto',
                    borderRadius: '50%',
                    background: 'rgba(230, 202, 101, 0.1)',
                    border: '1px solid var(--border-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-light)'
                  }}
                >
                  <Mail size={32} />
                </div>


                <p style={{ color: 'var(--text-muted)', margin: '0.75rem 0 2rem 0', fontSize: '1rem' }}>
                  Ce pli scellé à la cire d'or contient des mots réservés exclusivement à tes yeux.
                </p>

                {/* Interactive Wax Seal Button */}
                <button
                  onClick={() => setIsOpen(true)}
                  className="wax-seal-btn"
                  title="Cliquer pour briser le sceau de cire"
                >
                  <Crown size={32} color="#0b1d16" />
                </button>

                <div
                  style={{
                    fontSize: '0.8rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--gold-light)',
                    marginTop: '1rem',
                    fontWeight: 600
                  }}
                >
                  Appuie sur le Sceau d'Or pour ouvrir 👑
                </div>
              </div>
            ) : (
              /* Opened Letter View */
              <div
                style={{
                  animation: 'fadeIn 0.8s ease-out forwards'
                }}
              >
                {/* Letter Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid var(--border-gold)',
                    paddingBottom: '1.25rem',
                    marginBottom: '2rem'
                  }}
                >
                  <div>
                    <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--gold-light)', letterSpacing: '0.15em' }}>
                      Pli d'Amour Offiel
                    </span>
                    <h3 className="font-serif text-gold-gradient" style={{ fontSize: '1.8rem', fontWeight: 700 }}>
                      {LOVE_LETTER.date}
                    </h3>
                  </div>

                  <button
                    onClick={() => setIsOpen(false)}
                    style={{
                      background: 'rgba(230, 202, 101, 0.1)',
                      border: '1px solid var(--border-gold)',
                      borderRadius: 'var(--radius-full)',
                      padding: '0.4rem 1rem',
                      color: 'var(--text-muted)',
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem'
                    }}
                  >
                    <Lock size={14} /> Refermer la lettre
                  </button>
                </div>

                {/* Letter Body Content */}
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', lineHeight: 1.8, color: '#f5f5f7' }}>
                  <p style={{ fontWeight: 600, color: 'var(--gold-light)', marginBottom: '1.5rem', fontSize: '1.4rem' }}>
                    {LOVE_LETTER.salutation}
                  </p>

                  {LOVE_LETTER.bodyParagraphs.map((paragraph, index) => (
                    <p key={index} style={{ marginBottom: '1.5rem', textAlign: 'justify', textIndent: '1.5rem' }}>
                      {paragraph}
                    </p>
                  ))}

                  <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(230, 202, 101, 0.15)', textAlign: 'right' }}>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                      {LOVE_LETTER.closing}
                    </p>
                    <p className="text-gold-shimmer" style={{ fontSize: '1.6rem', fontWeight: 700, marginTop: '0.5rem' }}>
                      {LOVE_LETTER.signature}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
