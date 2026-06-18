'use client';

import { useI18n } from '@/lib/i18n';

const STAGES = [
  { num: '01', titleKey: 'process.01.title', descKey: 'process.01.desc' },
  { num: '02', titleKey: 'process.02.title', descKey: 'process.02.desc' },
  { num: '03', titleKey: 'process.03.title', descKey: 'process.03.desc' },
  { num: '04', titleKey: 'process.04.title', descKey: 'process.04.desc' },
  { num: '05', titleKey: 'process.05.title', descKey: 'process.05.desc' },
  { num: '06', titleKey: 'process.06.title', descKey: 'process.06.desc' },
];

export default function Process() {
  const { t } = useI18n();

  return (
    <section className="py-24 md:py-36 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-16">
          <p className="label-tag mb-3">{t('process.tag')}</p>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl reveal" style={{ color: 'var(--text)' }}>
            {t('process.title1')}<br />{t('process.title2')}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {STAGES.map((stage, i) => (
            <div key={stage.num} className={`process-step reveal d-${Math.min(i + 1, 6)}`}>
              <div className="process-number mb-4">{stage.num}</div>
              <h3 className="text-xl font-bold tracking-tight mb-2" style={{ color: 'var(--text)' }}>
                {t(stage.titleKey)}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {t(stage.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}