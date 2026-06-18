'use client';

import { useEffect, useRef } from 'react';

const LINE_COUNT = 18;
const ACCENT = { r: 0, g: 229, b: 255 }; // #00E5FF

export default function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let w = 0;
    let h = 0;

    // Each line has its own wave parameters
    const offsets = new Float32Array(LINE_COUNT);
    const speeds = new Float32Array(LINE_COUNT);
    const amplitudes = new Float32Array(LINE_COUNT);
    const opacities = new Float32Array(LINE_COUNT);

    function init() {
      for (let i = 0; i < LINE_COUNT; i++) {
        offsets[i] = Math.random() * Math.PI * 2;
        speeds[i] = 0.0003 + Math.random() * 0.0005;
        amplitudes[i] = 15 + Math.random() * 40;
        opacities[i] = 0.015 + Math.random() * 0.03;
      }
    }

    function resize() {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas!.width = w;
      canvas!.height = h;
    }

    resize();
    init();
    window.addEventListener('resize', resize);

    function draw() {
      ctx!.clearRect(0, 0, w, h);
      const t = Date.now();

      for (let i = 0; i < LINE_COUNT; i++) {
        const y0 = (h / (LINE_COUNT + 1)) * (i + 1);
        const amp = amplitudes[i];
        const speed = speeds[i];
        const offset = offsets[i];
        const opacity = opacities[i];

        ctx!.beginPath();
        ctx!.strokeStyle = `rgba(${ACCENT.r},${ACCENT.g},${ACCENT.b},${opacity})`;
        ctx!.lineWidth = 0.5 + (i % 3) * 0.3;

        for (let x = 0; x <= w; x += 4) {
          const y = y0 + Math.sin(x * 0.003 + t * speed + offset) * amp
                       + Math.sin(x * 0.001 + t * speed * 0.5) * amp * 0.5;
          if (x === 0) ctx!.moveTo(x, y);
          else ctx!.lineTo(x, y);
        }
        ctx!.stroke();
      }

      animId = requestAnimationFrame(draw);
    }

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}