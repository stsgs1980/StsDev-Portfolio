'use client';

import { useI18n } from '@/lib/i18n';

export default function Contact() {
  const { t } = useI18n();

  return (
    <section id="contact" className="py-24 md:py-36 relative" style={{ background: 'var(--bg-elevated)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="label-tag mb-6">{t('contact.tag')}</p>
          <h2 className="heading-serif text-4xl md:text-5xl lg:text-6xl mb-6 reveal" style={{ color: 'var(--text)' }}>
            {t('contact.title')}
          </h2>
          <p className="reveal d-1 text-base md:text-lg leading-relaxed mb-10 mx-auto"
            style={{ color: 'var(--text-secondary)', maxWidth: '480px' }}>
            {t('contact.subtitle')}
          </p>
          <div className="reveal d-2 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-primary">
              {t('contact.cta')}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </button>
            <a href="mailto:stsgs1980@gmail.com"
              className="transition-colors duration-200"
              style={{ fontFamily: 'var(--mono)', fontSize: '13px', color: 'var(--text-secondary)', textDecoration: 'none', borderBottom: '1px solid var(--text-dim)', paddingBottom: '2px' }}>
              stsgs1980@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}