'use client';

import { useEffect, useRef, useState } from 'react';
import { useI18n } from '@/lib/i18n';

const CODE_LINES = [
  { content: '// my design philosophy', type: 'comment' },
  { content: 'const ', type: 'keyword', rest: [{ text: 'approach', type: 'func' }, ' = {'] },
  { content: '  focus:     ', type: 'prop', rest: [{ text: '"craft over speed"', type: 'string' }, ','] },
  { content: '  detail:    ', type: 'prop', rest: [{ text: '"obsessive precision"', type: 'string' }, ','] },
  { content: '  motion:    ', type: 'prop', rest: [{ text: '"purposeful, not decorative"', type: 'string' }, ','] },
  { content: '  type:      ', type: 'prop', rest: [{ text: '"bold, never boring"', type: 'string' }, ','] },
  { content: '  code:      ', type: 'prop', rest: [{ text: '"clean, tested, documented"', type: 'string' }, ','] },
  { content: '};', type: 'bracket' },
];

export default function About() {
  const { t } = useI18n();
  const [inView, setInView] = useState(false);
  const [typedLines, setTypedLines] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    if (typedLines >= CODE_LINES.length) return;
    const tt = setTimeout(() => setTypedLines((p) => p + 1), 180);
    return () => clearTimeout(tt);
  }, [inView, typedLines]);

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p className="label-tag mb-3">{t('about.tag')}</p>
            <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl reveal mb-8" style={{ color: 'var(--text)' }}>
              {t('about.title1')}<br />{t('about.title2')}
            </h2>

            <div className="space-y-5">
              <p className="reveal d-1 text-base md:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {t('about.p1')}
              </p>
              <p className="reveal d-2 text-base md:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {t('about.p2')}
              </p>
              <p className="reveal d-3 text-base md:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {t('about.p3')}
              </p>
            </div>

            <div className="reveal d-4 mt-10 flex flex-wrap gap-2">
              {['TypeScript', 'Next.js', 'React', 'Python', 'Prompt Engineering', 'LLM / RAG', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'D3.js', 'Figma API', 'Three.js'].map((skill) => (
                <span key={skill} className="px-3 py-1.5 text-xs font-medium rounded-md transition-colors duration-200"
                  style={{ background: 'var(--accent-dim)', color: 'var(--accent)', fontFamily: 'var(--mono)' }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="reveal-scale d-2">
            <div className="code-block">
              <div className="code-block-header">
                <div className="code-dot" style={{ background: '#FF5F57' }} />
                <div className="code-dot" style={{ background: '#FFBD2E' }} />
                <div className="code-dot" style={{ background: '#28CA42' }} />
                <span className="ml-3 text-xs" style={{ color: 'var(--text-dim)', fontFamily: 'var(--mono)' }}>philosophy.ts</span>
              </div>
              <div className="code-block-body">
                {CODE_LINES.map((line, i) => (
                  <div key={i} style={{
                    opacity: inView && i < typedLines ? 1 : 0,
                    transform: inView && i < typedLines ? 'translateX(0)' : 'translateX(-8px)',
                    transition: 'all 0.3s ease',
                    minHeight: '1.8em',
                  }}>
                    {line.type === 'comment' && <span className="code-comment">{line.content}</span>}
                    {line.type === 'keyword' && (<>
                      <span className="code-keyword">{line.content}</span>
                      {line.rest?.map((r, j) => <span key={j} className={`code-${r.type}`}>{r.text}</span>)}
                    </>)}
                    {line.type === 'prop' && (<>
                      <span className="code-prop">{line.content}</span>
                      {line.rest?.map((r, j) => <span key={j} className={`code-${r.type}`}>{r.text}</span>)}
                    </>)}
                    {line.type === 'bracket' && <span className="code-bracket">{line.content}</span>}
                  </div>
                ))}
                {inView && typedLines < CODE_LINES.length && (
                  <span style={{
                    display: 'inline-block', width: '8px', height: '16px',
                    background: 'var(--accent)', animation: 'blink 1s step-end infinite',
                    verticalAlign: 'text-bottom', marginLeft: '2px',
                  }} />
                )}
              </div>
            </div>
            <style jsx>{`@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }`}</style>
          </div>
        </div>
      </div>
    </section>
  );
}