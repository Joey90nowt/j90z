import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import MusicSection from './components/MusicSection';
import Footer from './components/Footer';
import { ActiveTab } from './types';

// Asset paths (resolved by Vite under /src)
const logoImg = '/src/assets/images/joe90z_logo_1781581710437.jpg';
const heroImg = '/src/assets/images/studio_hero_1781581733155.jpg';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');

  // Smooth scroll up on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans transition-colors selection:bg-fuchsia-600 selection:text-white">
      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        logoPath={logoImg}
      />

      {/* Main Pages Content Layout with AnimatePresence */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              <HomeSection heroImg={heroImg} setActiveTab={setActiveTab} />
            </motion.div>
          )}

          {activeTab === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              <AboutSection logoImg={logoImg} />
            </motion.div>
          )}

          {activeTab === 'music' && (
            <motion.div
              key="music"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              <MusicSection />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer Branding Area */}
      <Footer setActiveTab={setActiveTab} logoPath={logoImg} />
    </div>
  );
}
