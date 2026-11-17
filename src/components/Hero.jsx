import React, { useState, useEffect } from 'react';
import { Crown, Sparkles, Heart, ArrowDown, Play } from 'lucide-react';

export default function Hero({ onExploreClick }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isBirthdayToday, setIsBirthdayToday] = useState(false);

  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date();
      let year = now.getFullYear();
      
      // Target date: December 1st of current year (or next year if Dec 1st passed)
      let target = new Date(year, 11, 1, 0, 0, 0); // Month index 11 = December
      
      if (now.getMonth() === 11 && now.getDate() === 1) {
        setIsBirthdayToday(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      if (now > target && !(now.getMonth() === 11 && now.getDate() === 1)) {
        target = new Date(year + 1, 11, 1, 0, 0, 0);
      }

      const diff = target.getTime() - now.getTime();

      if (diff <= 0) {
        setIsBirthdayToday(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setIsBirthdayToday(false);
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Hero Background Image with Atmospheric Glow */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url('/media/IMG_1511.JPG')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          filter: 'brightness(0.32) contrast(1.1) blur(2px)',
          transform: 'scale(1.05)',
          zIndex: 0
        }}
      />

      {/* Dark Overlay Gradients */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(circle at 50% 30%, rgba(21, 71, 55, 0.4) 0%, transparent 70%),
            linear-gradient(to bottom, rgba(7, 19, 14, 0.7) 0%, rgba(7, 19, 14, 0.95) 100%)
          `,
          zIndex: 1
        }}
      />

      {/* Hero Content Box */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          maxWidth: '900px'
        }}
      >
        {/* Royal Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.5rem 1.25rem',
            borderRadius: 'var(--radius-full)',
            background: 'rgba(230, 202, 101, 0.12)',
            border: '1px solid var(--border-gold)',
            color: 'var(--gold-light)',
            fontSize: '0.9rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '1.75rem',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <Crown size={18} color="var(--gold-primary)" />
          Édition Spéciale • 1er Décembre
          <Sparkles size={16} color="var(--gold-primary)" />
        </div>

        {/* Main Title */}
        <h1
          className="font-serif text-gold-shimmer hero-title"
          style={{
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: '1.25rem',
            letterSpacing: '-0.01em',
            textShadow: '0 10px 30px rgba(0,0,0,0.8)'
          }}
        >
          Flore Doleresse
        </h1>

        <p
          style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
            color: 'var(--text-muted)',
            fontWeight: 400,
            maxWidth: '720px',
            margin: '0 auto 2.5rem auto',
            lineHeight: 1.6
          }}
        >
          Joyeux Anniversaire 🎉
        </p>

        {/* Countdown Section */}
        <div style={{ marginBottom: '3rem' }}>
          <div
            style={{
              fontSize: '0.85rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--gold-light)',
              marginBottom: '1rem',
              fontWeight: 600
            }}
          >
            {isBirthdayToday ? "🎉 AUJOURD'HUI C'EST LE GRAND JOUR ! 🎉" : "COMPTE À REBOURS DU 1ER DÉCEMBRE"}
          </div>

          {!isBirthdayToday ? (
            <div
              className="countdown-grid"
              style={{
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div className="countdown-box">
                <div className="countdown-number">{timeLeft.days}</div>
                <div className="countdown-label">Jours</div>
              </div>
              <div className="countdown-box">
                <div className="countdown-number">{timeLeft.hours}</div>
                <div className="countdown-label">Heures</div>
              </div>
              <div className="countdown-box">
                <div className="countdown-number">{timeLeft.minutes}</div>
                <div className="countdown-label">Minutes</div>
              </div>
              <div className="countdown-box">
                <div className="countdown-number">{timeLeft.seconds}</div>
                <div className="countdown-label">Secondes</div>
              </div>
            </div>
          ) : (
            <div
              style={{
                background: 'linear-gradient(135deg, #154737 0%, #061610 100%)',
                border: '2px solid var(--gold-primary)',
                borderRadius: 'var(--radius-md)',
                padding: '1.5rem 2rem',
                display: 'inline-block',
                boxShadow: 'var(--shadow-gold)'
              }}
            >
              <h3 className="font-serif text-gold-gradient" style={{ fontSize: '2rem' }}>
                Joyeux Anniversaire Flore ! 👑
              </h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                Aujourd'hui, nous célébrons ton éclat et ta grâce unique !
              </p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div
          className="hero-actions"
          style={{
            flexWrap: 'wrap'
          }}
        >
          <a href="#gallery" className="btn-gold">
            <Sparkles size={18} />
            Explorer les Collections
          </a>
          <a href="#letter" className="btn-outline">
            <Heart size={18} color="var(--gold-primary)" />
            Lire le Message d'Amour
          </a>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <a
        href="#gallery"
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'var(--gold-light)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          textDecoration: 'none',
          opacity: 0.7,
          transition: 'opacity 0.3s ease',
          zIndex: 2
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.7')}
      >
        <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          Découvrir
        </span>
        <ArrowDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}
