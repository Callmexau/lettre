import React, { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import LoveLetter from './components/LoveLetter';
import ReasonsGrid from './components/ReasonsGrid';
import DeclarationSection from './components/DeclarationSection';
import CakeCeremony from './components/CakeCeremony';
import Footer from './components/Footer';

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const synthNodesRef = useRef([]);

  // Ambient Soft Pad Music Generator using Web Audio API
  const startAmbientMusic = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContext();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Warm romantic chord frequencies (Fmaj7, Cmaj7, Am9)
      const chordFrequencies = [174.61, 220.00, 261.63, 329.63, 392.00]; // F3, A3, C4, E4, G4

      synthNodesRef.current = chordFrequencies.map((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = i % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(450 + i * 50, ctx.currentTime);

        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.035, ctx.currentTime + 3);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        return { osc, gain };
      });

      setIsPlaying(true);
    } catch (err) {
      console.log('Audio ambient generator error:', err);
    }
  };

  const stopAmbientMusic = () => {
    if (synthNodesRef.current.length > 0) {
      const ctx = audioCtxRef.current;
      synthNodesRef.current.forEach(({ osc, gain }) => {
        try {
          if (ctx) {
            gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.5);
            setTimeout(() => {
              osc.stop();
              osc.disconnect();
            }, 1600);
          }
        } catch (e) {}
      });
      synthNodesRef.current = [];
    }
    setIsPlaying(false);
  };

  const toggleMusic = () => {
    if (isPlaying) {
      stopAmbientMusic();
    } else {
      startAmbientMusic();
    }
  };

  useEffect(() => {
    return () => {
      stopAmbientMusic();
    };
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <Navbar isPlaying={isPlaying} toggleMusic={toggleMusic} />
      <main>
        <Hero />
        <Gallery />
        <LoveLetter />
        <ReasonsGrid />
        <DeclarationSection />
        <CakeCeremony />
      </main>
      <Footer />
    </div>
  );
}
