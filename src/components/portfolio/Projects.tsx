'use client';

import { useI18n } from '@/lib/i18n';

interface Project {
  titleKey: string;
  descKey: string;
  catKey: string;
  href: string;
  featured?: boolean;
}

const PROJECTS: Project[] = [
  { titleKey: 'project.hh.title', descKey: 'project.hh.desc', catKey: 'project.hh.category', href: '/hh-copilot.html', featured: true },
  { titleKey: 'project.qube.title', descKey: 'project.qube.desc', catKey: 'project.qube.category', href: '/agent-qube.html', featured: true },
  { titleKey: 'project.neuro.title', descKey: 'project.neuro.desc', catKey: 'project.neuro.category', href: '/neuro-agency.html', featured: true },
  { titleKey: 'project.wiki.title', descKey: 'project.wiki.desc', catKey: 'project.wiki.category', href: '/wiki-codex-v2.html' },
  { titleKey: 'project.wireframes.title', descKey: 'project.wireframes.desc', catKey: 'project.wireframes.category', href: '/ui-kit-wireframes.html' },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t } = useI18n();

  return (
    <a
      href={project.href}
      className={`project-bento ${project.featured ? 'project-bento-featured col-span-1 md:col-span-2' : 'col-span-1'} reveal d-${Math.min(index + 1, 6)} block h-full group`}
    >
      <div className="relative z-10 p-7 md:p-9 h-full flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <span className="label-tag">{t(project.catKey)}</span>
          <span className="text-xs font-mono" style={{ color: 'var(--text-dim)' }}>
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <h3 className="text-2xl md:text-3xl font-black tracking-tight uppercase mb-4 group-hover:text-[var(--accent)] transition-colors duration-300">
          {t(project.titleKey)}
        </h3>

        <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--text-secondary)' }}>
          {t(project.descKey)}
        </p>

        <div className="mt-6 pt-4 flex items-center gap-3" style={{ borderTop: '1px solid var(--border-subtle)' }}>
          <span className="label-dim">{t('projects.viewProject')}</span>
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
            style={{ color: 'var(--accent)' }}
          >
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </div>
      </div>
    </a>
  );
}

export default function Projects() {
  const { t } = useI18n();

  return (
    <section id="work" className="py-24 md:py-36 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="label-tag mb-3">{t('projects.tag')}</p>
            <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl reveal" style={{ color: 'var(--text)' }}>
              {t('projects.title')}
            </h2>
          </div>
          <p className="text-sm max-w-sm reveal d-1" style={{ color: 'var(--text-dim)', lineHeight: '1.7' }}>
            {t('projects.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 grid-flow-dense">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.titleKey} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}