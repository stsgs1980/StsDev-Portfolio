'use client';

import { useState, useEffect, useCallback } from 'react';
import { useI18n } from '@/lib/i18n';

export default function Nav() {
  const { lang, toggleLang, t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const NAV_LINKS = [
    { id: 'about', label: t('nav.about') },
    { id: 'work', label: t('nav.work') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'contact', label: t('nav.contact') },
  ];

  const handleScroll = useCallback(() => {
    const sy = window.scrollY;
    setScrolled(sy > 40);
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    setScrollProgress(docH > 0 ? sy / docH : 0);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${scrollProgress})` }}
        aria-hidden="true"
      />

      <header
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(8, 8, 16, 0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px) saturate(180%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px) saturate(180%)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded"
            aria-label="Scroll to top"
          >
            <span
              className="text-xl font-black tracking-tight uppercase"
              style={{ color: 'var(--text)' }}
            >
              Sts<span style={{ color: 'var(--accent)' }}>.</span>dev
            </span>
          </button>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-sm font-medium transition-colors duration-200 focus:outline-none"
                style={{ color: 'var(--text-dim)' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-dim)'; }}
              >
                {link.label}
              </button>
            ))}

            {/* Lang toggle */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-0.5 text-xs font-bold tracking-wider transition-colors duration-200 focus:outline-none"
              style={{
                fontFamily: 'var(--mono)',
                color: lang === 'en' ? 'var(--text-dim)' : 'var(--accent)',
              }}
            >
              <span>Ru</span>
              <span style={{ color: 'var(--text-dim)' }}>/</span>
              <span style={{ color: lang === 'en' ? 'var(--accent)' : 'var(--text-dim)' }}>En</span>
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="btn-primary !py-2.5 !px-5 !text-xs !rounded-md"
            >
              {t('nav.letsTalk')}
            </button>
          </nav>

          {/* Hamburger */}
          <button
            className={`hamburger md:hidden relative z-[1001] p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded ${mobileOpen ? 'active' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`} role="dialog" aria-label="Mobile menu">
        {NAV_LINKS.map((link, i) => (
          <button
            key={link.id}
            onClick={() => scrollTo(link.id)}
            className="text-4xl font-black uppercase tracking-tight transition-colors duration-200 focus:outline-none"
            style={{
              color: 'var(--text-dim)',
              transitionDelay: mobileOpen ? `${i * 0.05}s` : '0s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-dim)'; }}
          >
            {link.label}
          </button>
        ))}

        {/* Mobile lang toggle */}
        <button
          onClick={toggleLang}
          className="flex items-center gap-2 text-2xl font-bold tracking-wider"
          style={{ fontFamily: 'var(--mono)', color: 'var(--accent)' }}
        >
          <span style={{ color: lang === 'en' ? 'var(--text-dim)' : 'var(--accent)' }}>Ru</span>
          <span style={{ color: 'var(--text-dim)' }}>/</span>
          <span style={{ color: lang === 'en' ? 'var(--accent)' : 'var(--text-dim)' }}>En</span>
        </button>
      </div>
    </>
  );
}