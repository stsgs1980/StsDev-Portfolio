'use client';

import { useEffect, useCallback } from 'react';

export default function Atmosphere() {
  const initReveals = useCallback(() => {
    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-scale');

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    revealEls.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const cleanup = initReveals();

    // Also observe dynamically added elements after a short delay
    const t = setTimeout(() => {
      cleanup();
      initReveals();
    }, 100);

    return () => {
      cleanup();
      clearTimeout(t);
    };
  }, [initReveals]);

  return null;
}