import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, Crown } from 'lucide-react';

export default function Navbar({ isPlaying, toggleMusic }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#hero' },
    { name: 'Collections', href: '#gallery' },
    { name: 'Message d\'Amour', href: '#letter' },
    { name: 'Ce qui me séduit', href: '#reasons' },
    { name: 'Je T\'aime ❤️', href: '#declaration' },
    { name: 'Célébration 🎂', href: '#cake' }
  ];

  return (
    <header
      className="site-header"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.4s ease',
        background: scrolled
          ? 'rgba(5, 22, 16, 0.85)'
          : 'linear-gradient(to bottom, rgba(5, 22, 16, 0.8) 0%, transparent 100%)',
        backdropFilter: scrolled ? 'blur(16px)' : 'blur(4px)',
        borderBottom: scrolled ? '1px solid rgba(230, 202, 101, 0.2)' : '1px solid transparent'
      }}
    >
      <div className="container navbar-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a
          href="#hero"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            textDecoration: 'none',
            color: '#ffffff'
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #e6ca65 0%, #8c6e23 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#07130e',
              boxShadow: '0 4px 15px rgba(230, 202, 101, 0.4)'
            }}
          >
            <Crown size={20} />
          </div>
          <div>
            <span
              className="brand-name font-serif text-gold-shimmer"
              style={{
                fontSize: '1.4rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                lineHeight: 1
              }}
            >
              Flore Doleresse
            </span>
            <span
              style={{
                display: 'block',
                fontSize: '0.65rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)'
              }}
            >
              1er Décembre 👑
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" style={{ display: 'none', gap: '2rem', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: 'var(--text-muted)',
                textDecoration: 'none',
                fontSize: '0.92rem',
                fontWeight: 500,
                letterSpacing: '0.03em',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-light)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls & Music Toggle */}
        <div className="navbar-actions" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={toggleMusic}
            className="music-toggle"
            aria-label={isPlaying ? "Couper la musique d'ambiance" : "Jouer la musique d'ambiance"}
            aria-pressed={isPlaying}
            title={isPlaying ? "Couper la musique d'ambiance" : "Jouer la musique d'ambiance"}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.5rem 1rem',
              borderRadius: 'var(--radius-full)',
              background: isPlaying ? 'rgba(230, 202, 101, 0.2)' : 'rgba(255, 255, 255, 0.08)',
              border: '1px solid var(--border-gold)',
              color: isPlaying ? 'var(--gold-light)' : 'var(--text-muted)',
              cursor: 'pointer',
              fontSize: '0.85rem',
              fontWeight: 500,
              transition: 'all 0.3s ease'
            }}
          >
            {isPlaying ? <Volume2 size={16} color="var(--gold-light)" /> : <VolumeX size={16} />}
            <div className={`music-bar-visualizer ${!isPlaying ? 'paused' : ''}`}>
              <span />
              <span />
              <span />
              <span />
            </div>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--gold-light)',
              fontSize: '1.5rem',
              cursor: 'pointer',
              padding: '0.25rem'
            }}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Navigation principale"
          className="mobile-navigation"
          style={{
            background: 'rgba(7, 19, 14, 0.96)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--border-gold)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            marginTop: '0.75rem'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: 'var(--gold-light)',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontFamily: 'var(--font-serif)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}
            >
              <Sparkles size={16} color="var(--gold-primary)" />
              {link.name}
            </a>
          ))}
        </nav>
      )}

      {/* CSS helper for responsive desktop nav */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
}
