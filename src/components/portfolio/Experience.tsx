'use client';

import { useI18n } from '@/lib/i18n';

interface ExpEntry {
  dateRange: string;
  roleKey: string;
  projectKey: string;
  descKey: string;
  tech: string[];
}

const EXPERIENCE: ExpEntry[] = [
  { dateRange: '2025', roleKey: 'exp.hh.role', projectKey: 'exp.hh.project', descKey: 'exp.hh.desc', tech: ['TypeScript', 'Next.js', 'Puppeteer', 'OpenAI API'] },
  { dateRange: '2025', roleKey: 'exp.neuro.role', projectKey: 'exp.neuro.project', descKey: 'exp.neuro.desc', tech: ['HTML/CSS', 'Three.js', 'Canvas 2D', 'GSAP'] },
  { dateRange: '2025 — 2026', roleKey: 'exp.pmas.role', projectKey: 'exp.pmas.project', descKey: 'exp.pmas.desc', tech: ['React', 'TypeScript', 'D3.js', 'WebSocket'] },
  { dateRange: '2026', roleKey: 'exp.uikit.role', projectKey: 'exp.uikit.project', descKey: 'exp.uikit.desc', tech: ['Next.js', 'TypeScript', 'Figma API', 'Prisma'] },
  { dateRange: '2025 — 2026', roleKey: 'exp.aiauto.role', projectKey: 'exp.aiauto.project', descKey: 'exp.aiauto.desc', tech: ['Python', 'LLM', 'Prompt Engineering', 'CRM'] },
  { dateRange: '2026', roleKey: 'exp.scripts.role', projectKey: 'exp.scripts.project', descKey: 'exp.scripts.desc', tech: ['Python', 'OpenAI API', 'Prompt Engineering'] },
];

export default function Experience() {
  const { t } = useI18n();

  return (
    <section id="experience" className="py-24 md:py-36 relative" style={{ background: 'var(--bg-elevated)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-16">
          <p className="label-tag mb-3">{t('exp.tag')}</p>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl reveal" style={{ color: 'var(--text)' }}>
            {t('exp.title1')}<br />{t('exp.title2')}
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {EXPERIENCE.map((entry, i) => (
            <div key={entry.roleKey} className={`exp-card reveal-left d-${Math.min(i + 1, 6)}`}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                <div>
                  <span className="label-dim block mb-2">{entry.dateRange}</span>
                  <h3 className="text-xl font-bold tracking-tight" style={{ color: 'var(--text)' }}>
                    {t(entry.roleKey)}
                  </h3>
                  <p className="text-sm mt-1" style={{ color: 'var(--accent)' }}>
                    {t(entry.projectKey)}
                  </p>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-4 max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
                {t(entry.descKey)}
              </p>
              <div className="flex flex-wrap gap-2">
                {entry.tech.map((tech) => (
                  <span key={tech} className="px-2.5 py-1 text-xs font-medium rounded"
                    style={{ fontFamily: 'var(--mono)', background: 'var(--accent-dim)', color: 'var(--accent)' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}