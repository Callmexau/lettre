import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { LOVE_PROMISES } from '../data/loveLetterData';
import { Heart, Sparkles, Crown, Flame, Shield, Sun } from 'lucide-react';

export default function DeclarationSection() {
  const [heartClicks, setHeartClicks] = useState(0);
  const [lastQuote, setLastQuote] = useState("Tu es la plus belle chose qui me soit arrivée.");

  const quotes = [
    "Tu es la plus belle chose qui me soit arrivée.",
    "À tes côtés, chaque instant devient magique.",
    "Mon cœur te choisit aujourd'hui, demain et pour toujours.",
    "Tu es ma reine, mon amour, ma vie.",
    "Je t'aime plus que les mots ne pourront jamais le dire."
  ];

  const handleHeartClick = () => {
    setHeartClicks((prev) => prev + 1);
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setLastQuote(randomQuote);

    // Heart Emoji Confetti Explosion
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.7 },
      shapes: ['heart', 'star'],
      colors: ['#e6ca65', '#ff4d6d', '#ff85a1', '#ffffff']
    });
  };

  return (
    <section
      id="declaration"
      className="page-section"
      style={{
        position: 'relative',
        background: 'radial-gradient(circle at 50% 40%, rgba(255, 77, 109, 0.12) 0%, rgba(21, 71, 55, 0.25) 50%, var(--bg-primary) 100%)',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
        {/* Section Badge */}
        <div className="section-badge" style={{ background: 'rgba(255, 77, 109, 0.15)', borderColor: 'rgba(255, 77, 109, 0.4)', color: '#ffb3c1' }}>
          <Heart size={14} fill="#ff4d6d" color="#ff4d6d" /> Mon Cadeau d'Amour Inconditionnel
        </div>


        <p className="section-subtitle" style={{ maxWidth: '680px' }}>
          Ce site est mon présent pour toi en ce 1er Décembre. Une déclaration éternelle de mon amour pour la femme exceptionnelle que tu es.
        </p>

        {/* Grand Romantic "JE T'AIME" Interactive Heart Card */}
        <div
          className="glass-panel"
          style={{
            maxWidth: '680px',
            margin: '0 auto 4rem auto',
            padding: '3.5rem 2rem',
            borderRadius: 'var(--radius-lg)',
            border: '2px solid rgba(230, 202, 101, 0.5)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.7), 0 0 40px rgba(230, 202, 101, 0.2)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Shimmer Background Glow */}
          <div
            style={{
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: 'radial-gradient(circle, rgba(230, 202, 101, 0.08) 0%, transparent 60%)',
              pointerEvents: 'none'
            }}
          />

          <span
            style={{
              fontSize: '0.85rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--gold-light)',
              fontWeight: 600
            }}
          >
            Déclaration Solennelle
          </span>

          <h3
            className="font-serif text-gold-shimmer"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              margin: '0.5rem 0 1.25rem 0',
              lineHeight: 1.15
            }}
          >
            Je T'aime, Flore ❤️
          </h3>

          <p
            style={{
              fontSize: '1.2rem',
              fontStyle: 'italic',
              color: '#f5f5f7',
              maxWidth: '540px',
              margin: '0 auto 2rem auto',
              lineHeight: 1.6
            }}
          >
            "{lastQuote}"
          </p>

          {/* Pulsing Interactive Heart Button */}
          <button
            onClick={handleHeartClick}
            style={{
              width: '90px',
              height: '90px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #ff4d6d 0%, #c9184a 50%, #800f2f 100%)',
              border: '4px solid #ffb3c1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto',
              cursor: 'pointer',
              boxShadow: '0 10px 35px rgba(255, 77, 109, 0.6), 0 0 20px rgba(255, 77, 109, 0.4)',
              transition: 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}
            onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.9)')}
            onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            title="Clique pour faire battre mon cœur !"
          >
            <Heart size={44} fill="#ffffff" color="#ffffff" className="animate-pulse" />
          </button>

          <div
            style={{
              fontSize: '0.8rem',
              color: 'var(--gold-light)',
              marginTop: '1.25rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontWeight: 600
            }}
          >
            Touche le cœur ({heartClicks} {heartClicks > 1 ? 'battements' : 'battement'}) ✨
          </div>
        </div>

        {/* 3 Promises for her */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 className="font-serif" style={{ fontSize: '2rem', color: '#ffffff', marginBottom: '2rem' }}>
            Mes Promesses Pour Toi
          </h3>

          <div className="promises-grid">
            {LOVE_PROMISES.map((promise) => (
              <div
                key={promise.id}
                className="glass-panel"
                style={{
                  padding: '2rem 1.5rem',
                  borderRadius: 'var(--radius-md)',
                  textAlign: 'left',
                  border: '1px solid var(--border-gold)'
                }}
              >
                <div style={{ color: 'var(--gold-primary)', marginBottom: '0.75rem' }}>
                  <Sparkles size={24} />
                </div>
                <h4 className="font-serif text-gold-gradient" style={{ fontSize: '1.35rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                  {promise.title}
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  {promise.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
