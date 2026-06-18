'use client';

import { useI18n } from '@/lib/i18n';

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/stsgs1980' },
];

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="relative z-10 py-10" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-sm font-bold tracking-tight uppercase" style={{ color: 'var(--text-dim)' }}>
          Sts<span style={{ color: 'var(--accent)' }}>.</span>dev
        </span>
        <div className="flex items-center gap-6">
          {SOCIAL_LINKS.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
              className="label-dim transition-colors duration-200 hover:text-[var(--accent)] focus:outline-none">
              {link.label}
            </a>
          ))}
        </div>
        <span className="label-dim">{t('footer.copyright')}</span>
      </div>
    </footer>
  );
}