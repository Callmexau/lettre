import React, { useState } from 'react';
import { MEDIA_COLLECTION, CATEGORIES } from '../data/mediaData';
import { Play, Maximize2, X, ChevronLeft, ChevronRight, Sparkles, Film, Image as ImageIcon } from 'lucide-react';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredMedia = activeCategory === 'all'
    ? MEDIA_COLLECTION
    : MEDIA_COLLECTION.filter((item) => item.category === activeCategory);

  const openLightbox = (item, index) => {
    setSelectedMedia(item);
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    const newIndex = (selectedIndex - 1 + filteredMedia.length) % filteredMedia.length;
    setSelectedIndex(newIndex);
    setSelectedMedia(filteredMedia[newIndex]);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    const newIndex = (selectedIndex + 1) % filteredMedia.length;
    setSelectedIndex(newIndex);
    setSelectedMedia(filteredMedia[newIndex]);
  };

  return (
    <section
      id="gallery"
      className="page-section"
      style={{
        position: 'relative',
        background: 'linear-gradient(to bottom, var(--bg-primary) 0%, var(--bg-secondary) 50%, var(--bg-primary) 100%)'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-badge">
            <Sparkles size={14} /> Les Collections Exclusives
          </div>
          <h2 className="section-title">L'Écrin de Flore Doleresse</h2>
          <p className="section-subtitle">
            Waouh, quelle sogolaviande !
          </p>

          {/* Category Filter Tabs */}
          <div className="category-filters">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    padding: '0.65rem 1.35rem',
                    borderRadius: 'var(--radius-full)',
                    background: isActive ? 'var(--gold-gradient)' : 'rgba(15, 42, 33, 0.5)',
                    color: isActive ? '#07130e' : 'var(--text-muted)',
                    border: isActive ? 'none' : '1px solid var(--border-gold)',
                    fontWeight: isActive ? 600 : 500,
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    boxShadow: isActive ? '0 4px 20px rgba(230, 202, 101, 0.4)' : 'none'
                  }}
                >
                  <span>{cat.icon}</span>
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Flore Tab: Single Hero Image Display */}
        {activeCategory === 'all' ? (
          <div
            style={{
              position: 'relative',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              border: '2px solid var(--gold-primary)',
              boxShadow: '0 30px 80px rgba(0,0,0,0.8), 0 0 40px rgba(230, 202, 101, 0.2)',
              cursor: 'pointer',
              maxWidth: '900px',
              margin: '0 auto',
              animation: 'fadeInHero 0.7s ease-out'
            }}
            onClick={() => openLightbox(MEDIA_COLLECTION.find(m => m.id === 'em-2'), 1)}
          >
            <img
              src="/media/IMG_1512.JPG"
              alt="La Reine Flore"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                display: 'block',
                transition: 'transform 0.6s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
            {/* Gradient overlay with text */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(5, 22, 16, 0.92) 0%, rgba(5, 22, 16, 0.1) 50%, transparent 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: 'clamp(1.5rem, 4vw, 3rem)'
              }}
            >
              <span
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--gold-light)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.18em',
                  fontWeight: 700
                }}
              >
                Savoir-Faire & Distinction
              </span>
              <h3
                className="font-serif text-gold-shimmer"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, marginTop: '0.25rem', lineHeight: 1.1 }}
              >
                Flore ✨
              </h3>
            </div>
          </div>
        ) : (
          /* All other tabs: Standard Grid */
          <div className="media-grid">
            {filteredMedia.map((item, index) => {
              const isVideo = item.type === 'video';
              return (
                <div
                  key={item.id}
                  onClick={() => openLightbox(item, index)}
                  className="glass-panel"
                  style={{
                    position: 'relative',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    aspectRatio: isVideo ? '16/10' : '3/4',
                  }}
                >
                  {/* Media Content */}
                  {isVideo ? (
                    <div style={{ width: '100%', height: '100%', position: 'relative', background: '#000' }}>
                      <video
                        src={item.src}
                        muted
                        preload="metadata"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: 'rgba(0,0,0,0.3)'
                        }}
                      >
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
                            boxShadow: '0 4px 20px rgba(230, 202, 101, 0.6)'
                          }}
                        >
                          <Play size={24} fill="#07130e" style={{ marginLeft: '4px' }} />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={item.src}
                      alt={item.title}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                  )}

                  {/* Badge Indicator */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      padding: '0.35rem 0.75rem',
                      borderRadius: 'var(--radius-full)',
                      background: 'rgba(7, 19, 14, 0.75)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid var(--border-gold)',
                      color: 'var(--gold-light)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}
                  >
                    {isVideo ? <Film size={12} /> : <ImageIcon size={12} />}
                    {isVideo ? 'Vidéo' : 'Photo'}
                  </div>

                  {/* Bottom Overlay Info */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(5, 22, 16, 0.95) 0%, transparent 60%)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      padding: '1.5rem',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.75rem',
                        color: 'var(--gold-light)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        fontWeight: 600
                      }}
                    >
                      {item.subtitle}
                    </span>
                    <h3
                      className="font-serif"
                      style={{ fontSize: '1.35rem', fontWeight: 600, color: '#ffffff', marginTop: '0.2rem' }}
                    >
                      {item.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <style>{`
          @keyframes fadeInHero {
            from { opacity: 0; transform: scale(0.98); }
            to { opacity: 1; transform: scale(1); }
          }
        `}</style>


        {/* Lightbox Modal */}
        {selectedMedia && (
          <div
            className="lightbox-overlay"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="lightbox-close"
              style={{
                width: '48px',
                height: '48px'
              }}
            >
              <X size={24} />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="lightbox-nav lightbox-prev"
              style={{
                width: '48px',
                height: '48px'
              }}
            >
              <ChevronLeft size={28} />
            </button>

            <button
              onClick={handleNext}
              className="lightbox-nav lightbox-next"
              style={{
                width: '48px',
                height: '48px'
              }}
            >
              <ChevronRight size={28} />
            </button>

            {/* Modal Media Box */}
            <div
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedMedia.type === 'video' ? (
                <video
                  src={selectedMedia.src}
                  controls
                  autoPlay
                  className="lightbox-media"
                  style={{
                    maxWidth: '100%'
                  }}
                />
              ) : (
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  className="lightbox-media"
                  style={{
                    maxWidth: '100%',
                  }}
                />
              )}

              {/* Caption Card */}
              <div
                className="lightbox-caption"
              >
                <h3 className="font-serif text-gold-shimmer" style={{ fontSize: '1.6rem', fontWeight: 600 }}>
                  {selectedMedia.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '0.25rem' }}>
                  {selectedMedia.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
