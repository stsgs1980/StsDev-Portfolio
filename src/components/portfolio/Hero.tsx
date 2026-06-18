'use client';

import { useEffect, useRef, useState } from 'react';
import { useI18n } from '@/lib/i18n';

function HeroLine({ children, delay, loaded }: { children: React.ReactNode; delay: string; loaded: boolean }) {
  return (
    <span className="hero-line">
      <span
        className={`hero-line-inner ${loaded ? 'revealed' : ''}`}
        style={{ transitionDelay: loaded ? delay : '0s' }}
      >
        {children}
      </span>
    </span>
  );
}

export default function Hero() {
  const { t } = useI18n();
  const [loaded, setLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(t);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
    setMousePos({ x, y });
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Large typographic background */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="text-[20vw] font-black uppercase leading-none tracking-tighter"
          style={{
            color: 'rgba(255, 255, 255, 0.02)',
            fontFamily: 'var(--sans)',
            transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.3}px)`,
            transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          STSDEV
        </span>
      </div>

      {/* Accent corner brackets */}
      <div className="absolute top-12 left-8 w-16 h-16 pointer-events-none" aria-hidden="true"
        style={{ borderLeft: '2px solid var(--accent)', borderTop: '2px solid var(--accent)', opacity: 0.4 }} />
      <div className="absolute bottom-12 right-8 w-16 h-16 pointer-events-none" aria-hidden="true"
        style={{ borderRight: '2px solid var(--accent)', borderBottom: '2px solid var(--accent)', opacity: 0.4 }} />

      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-32 pb-20 w-full">
        <div className="max-w-4xl">
          {/* Tag */}
          <div className="mb-8">
            <span
              className="label-tag inline-block"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0)' : 'translateY(10px)',
                transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.1s',
              }}
            >
              {t('hero.tag')}
            </span>
          </div>

          {/* Headline */}
          <h1 className="heading-display text-5xl md:text-7xl lg:text-[7rem]" style={{ color: 'var(--text)' }}>
            <HeroLine delay="0.2s" loaded={loaded}>{t('hero.line1')}</HeroLine>
            <HeroLine delay="0.35s" loaded={loaded}>
              {t('hero.line2')}<span style={{ color: 'var(--accent)' }}>{','}</span>
            </HeroLine>
            <HeroLine delay="0.5s" loaded={loaded}>
              {t('hero.line3Prefix')}
              <span className="heading-serif" style={{ textTransform: 'none', color: 'var(--text-secondary)' }}>
                {t('hero.line3Accent')}
              </span>
            </HeroLine>
          </h1>

          {/* Subtitle */}
          <p
            className="mt-8 text-lg md:text-xl font-normal max-w-xl leading-relaxed"
            style={{
              color: 'var(--text-secondary)',
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.7s',
            }}
          >
            {t('hero.subtitle')}
          </p>

          {/* CTA */}
          <div
            className="mt-12 flex flex-col sm:flex-row gap-4"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.9s',
            }}
          >
            <button
              className="btn-primary magnetic"
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('hero.cta1')}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </button>
            <button
              className="btn-ghost magnetic"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('hero.cta2')}
            </button>
          </div>

          {/* Stats */}
          <div
            className="mt-16 flex gap-12 md:gap-20"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.7s cubic-bezier(0.22, 1, 0.36, 1) 1.1s',
            }}
          >
            {[
              { value: '6+', label: t('hero.projectsShipped') },
              { value: '5', label: t('hero.designSystems') },
              { value: '12+', label: t('hero.technologies') },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-black tracking-tight" style={{ color: 'var(--text)' }}>
                  {stat.value}
                </div>
                <div className="label-dim mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: loaded ? 0.4 : 0, transition: 'opacity 1s ease 1.5s' }}
        aria-hidden="true"
      >
        <span className="label-dim" style={{ fontSize: '10px', letterSpacing: '0.15em' }}>{t('hero.scroll')}</span>
        <div className="w-px h-6" style={{ background: 'var(--text-dim)' }} />
      </div>
    </section>
  );
}