import React, { useState } from 'react';
import { INITIAL_WISHES } from '../data/loveLetterData';
import { MessageSquare, Heart, Send, Sparkles, Plus, Check } from 'lucide-react';

export default function WishingWall() {
  const [wishes, setWishes] = useState(INITIAL_WISHES);
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [postedSuccess, setPostedSuccess] = useState(false);

  const handleAddWish = (e) => {
    e.preventDefault();
    if (!author.trim() || !message.trim()) return;

    const newWish = {
      id: `w-${Date.now()}`,
      author: author.trim(),
      message: message.trim(),
      timestamp: 'Aujourd\'hui',
      likes: 1
    };

    setWishes([newWish, ...wishes]);
    setAuthor('');
    setMessage('');
    setPostedSuccess(true);
    setTimeout(() => {
      setPostedSuccess(false);
      setShowForm(false);
    }, 1500);
  };

  const handleLike = (id) => {
    setWishes(
      wishes.map((w) => {
        if (w.id === id) {
          return { ...w, likes: w.likes + 1 };
        }
        return w;
      })
    );
  };

  return (
    <section
      id="wishes"
      style={{
        padding: '6rem 0',
        position: 'relative',
        background: 'var(--bg-primary)'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-badge">
            <MessageSquare size={14} /> Le Mur des Souhaits
          </div>
          <h2 className="section-title">Vœux & Messages d'Amour</h2>
          <p className="section-subtitle">
            Laissez un message chaleureux ou une pensée magique pour l'anniversaire de Flore Doleresse.
          </p>

          <button
            onClick={() => setShowForm(!showForm)}
            className="btn-gold"
            style={{ marginTop: '1rem' }}
          >
            <Plus size={18} /> Déposer un Vœu d'Anniversaire
          </button>
        </div>

        {/* Wish Form Drawer */}
        {showForm && (
          <div
            className="glass-panel"
            style={{
              maxWidth: '600px',
              margin: '0 auto 3rem auto',
              padding: '2rem',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--gold-primary)',
              animation: 'slideDown 0.4s ease-out forwards'
            }}
          >
            <h3 className="font-serif text-gold-shimmer" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
              Ajouter votre message pour Flore ✍️
            </h3>

            {postedSuccess ? (
              <div
                style={{
                  background: 'rgba(230, 202, 101, 0.2)',
                  border: '1px solid var(--gold-primary)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem',
                  textAlign: 'center',
                  color: 'var(--gold-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
              >
                <Check size={20} /> Votre vœu a été publié avec succès ! 🎉
              </div>
            ) : (
              <form onSubmit={handleAddWish} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      color: 'var(--gold-light)',
                      marginBottom: '0.4rem',
                      fontWeight: 600
                    }}
                  >
                    Votre Nom / Signature
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Ton Admirateur, Une amie..."
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(5, 22, 16, 0.8)',
                      border: '1px solid var(--border-gold)',
                      color: '#ffffff',
                      fontSize: '1rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      color: 'var(--gold-light)',
                      marginBottom: '0.4rem',
                      fontWeight: 600
                    }}
                  >
                    Votre Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Rédigez votre vœu le plus doux..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(5, 22, 16, 0.8)',
                      border: '1px solid var(--border-gold)',
                      color: '#ffffff',
                      fontSize: '1rem',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--text-muted)',
                      cursor: 'pointer',
                      fontSize: '0.9rem'
                    }}
                  >
                    Annuler
                  </button>
                  <button type="submit" className="btn-gold" style={{ padding: '0.65rem 1.5rem' }}>
                    <Send size={16} /> Publier le Message
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* Wishes Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {wishes.map((wish) => (
            <div
              key={wish.id}
              className="glass-panel"
              style={{
                padding: '1.75rem',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span
                    className="font-serif text-gold-shimmer"
                    style={{ fontSize: '1.2rem', fontWeight: 700 }}
                  >
                    {wish.author}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {wish.timestamp}
                  </span>
                </div>

                <p
                  style={{
                    color: '#e2e8f0',
                    fontSize: '1rem',
                    lineHeight: 1.6,
                    fontStyle: 'italic'
                  }}
                >
                  "{wish.message}"
                </p>
              </div>

              <div
                style={{
                  marginTop: '1.5rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <button
                  onClick={() => handleLike(wish.id)}
                  style={{
                    background: 'rgba(230, 202, 101, 0.1)',
                    border: '1px solid var(--border-gold)',
                    borderRadius: 'var(--radius-full)',
                    padding: '0.35rem 0.85rem',
                    color: 'var(--gold-light)',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <Heart size={14} fill="var(--gold-light)" /> {wish.likes}
                </button>
                <Sparkles size={14} color="var(--gold-primary)" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
