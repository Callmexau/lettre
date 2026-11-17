import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Flame, Sparkles, RefreshCw, Crown, Heart, Gift } from 'lucide-react';

export default function CakeCeremony() {
  const [candlesLit, setCandlesLit] = useState([true, true, true]);
  const [isBlownOut, setIsBlownOut] = useState(false);

  // Trigger celebration audio chime via Web Audio API
  const playCelebrationChime = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 (Major Arpeggio)
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.15);
        gain.gain.setValueAtTime(0, ctx.currentTime + i * 0.15);
        gain.gain.linearRampToValueAtTime(0.3, ctx.currentTime + i * 0.15 + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.15 + 1.2);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + i * 0.15);
        osc.stop(ctx.currentTime + i * 0.15 + 1.2);
      });
    } catch (err) {
      console.log('Audio Context error:', err);
    }
  };

  const triggerConfetti = () => {
    // First burst
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#e6ca65', '#ffffff', '#154737', '#ffd700']
    });

    // Secondary fireworks burst
    setTimeout(() => {
      confetti({
        particleCount: 80,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#e6ca65', '#ffffff', '#c9a444']
      });
      confetti({
        particleCount: 80,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#154737', '#ffd700', '#e6ca65']
      });
    }, 250);
  };

  const blowOutCandles = () => {
    setCandlesLit([false, false, false]);
    setIsBlownOut(true);
    triggerConfetti();
    playCelebrationChime();
  };

  const relightCandles = () => {
    setCandlesLit([true, true, true]);
    setIsBlownOut(false);
  };

  return (
    <section
      id="cake"
      className="page-section"
      style={{
        position: 'relative',
        background: 'radial-gradient(circle at 50% 50%, rgba(184, 145, 46, 0.15) 0%, var(--bg-secondary) 80%)'
      }}
    >
      <div className="container" style={{ textAlign: 'center' }}>
        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="section-badge">
            <Gift size={14} /> Le Moment Magique
          </div>
          <h2 className="section-title">Soufflez les Bougies !</h2>
          <p className="section-subtitle">
            Faites un vœu et touchez les bougies pour illuminer cette nouvelle année de bonheur.
          </p>
        </div>

        {/* Cake Visual Container */}
        <div
          className="glass-panel"
          style={{
            maxWidth: '520px',
            margin: '0 auto',
            padding: '3rem 2rem',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--gold-primary)'
          }}
        >
          {/* Cake Assembly */}
          <div className="cake-container">
            {/* Candle Assembly */}
            <div className="candle-wrapper">
              {candlesLit.map((isLit, index) => (
                <div key={index} className="single-candle">
                  <div className="candle-wick" />
                  {isLit ? (
                    <div className="candle-flame" />
                  ) : (
                    <div className="smoke-puff" />
                  )}
                </div>
              ))}
            </div>

            {/* Cake Tiers */}
            <div className="cake-tier-top">
              <div className="cake-frosting" />
            </div>
            <div className="cake-tier-bottom" />
          </div>

          {/* Action Controls */}
          <div style={{ marginTop: '2.5rem' }}>
            {!isBlownOut ? (
              <button onClick={blowOutCandles} className="btn-gold" style={{ fontSize: '1.1rem' }}>
                <Flame size={20} /> Souffler les Bougies 🕯️
              </button>
            ) : (
              <div style={{ animation: 'zoomIn 0.5s ease-out forwards' }}>
                <div
                  style={{
                    background: 'rgba(230, 202, 101, 0.15)',
                    border: '1px solid var(--gold-primary)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.5rem',
                    marginBottom: '1.5rem'
                  }}
                >
                  <h3 className="font-serif text-gold-shimmer" style={{ fontSize: '1.8rem', fontWeight: 700 }}>
                    ✨ Vœu Exaucé ! ✨
                  </h3>
                  <p style={{ color: '#ffffff', marginTop: '0.5rem', fontSize: '1.05rem' }}>
                    Que tous tes rêves les plus grands se réalisent cette année, Flore ! ❤️
                  </p>
                </div>

                <button onClick={relightCandles} className="btn-outline">
                  <RefreshCw size={16} /> Rallumer les bougies
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
}
