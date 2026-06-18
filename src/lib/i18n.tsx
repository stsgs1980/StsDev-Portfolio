'use client';

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

type Lang = 'ru' | 'en';

const translations: Record<Lang, Record<string, string>> = {
  ru: {
    // Nav
    'nav.about': 'О себе',
    'nav.work': 'Проекты',
    'nav.experience': 'Опыт',
    'nav.contact': 'Контакты',
    'nav.letsTalk': 'Связаться',

    // Hero
    'hero.tag': 'Станислав Граур',
    'hero.line1': 'I Build',
    'hero.line2': 'Digital',
    'hero.line3Prefix': 'Not ',
    'hero.line3Accent': 'Templates',
    'hero.subtitle': 'AI-энтузиаст, который превращает идеи в код. Создаю проекты на стыке коммерческого опыта и AI-экспертизы — такие, которые решают реальные задачи.',
    'hero.cta1': 'Смотреть проекты',
    'hero.cta2': 'Обо мне',
    'hero.projectsShipped': 'Проектов',
    'hero.designSystems': 'Дизайн-систем',
    'hero.technologies': 'Технологий',
    'hero.scroll': 'Скролл',

    // Projects
    'projects.tag': 'Избранное',
    'projects.title': 'Проекты',
    'projects.desc': 'Каждый проект — уникальное решение. От AI-инструментов до дизайн-систем, каждая строка кода работает на результат.',
    'projects.viewProject': 'Смотреть проект',

    'project.hh.title': 'HH Copilot',
    'project.hh.desc': 'AI-помощник для поиска работы на HH.ru. Автоматические отклики, AI-переписка с работодателями, умный мэтчинг вакансий и аналитика конверсии.',
    'project.hh.category': 'Веб-приложение',

    'project.pmas.title': 'P-MAS Studio',
    'project.pmas.desc': 'Visual IDE для мультиагентных систем. Графовый редактор топологий агентов с деплоем и мониторингом оркестрации.',
    'project.pmas.category': 'Платформа',

    'project.uikit.title': 'UI Kit Studio',
    'project.uikit.desc': 'Тулкит дизайн-системы — URL-to-token извлечение, синхронизация с GitHub, GAP-анализ, пайплайн атомарного дизайна.',
    'project.uikit.category': 'Дизайн-система',

    'project.neuro.title': 'NEURO Agency',
    'project.neuro.desc': 'Лендинг digital-агенства AI/ML: стратегия, предиктивные модели, инженерия данных, компьютерное зрение и NLP.',
    'project.neuro.category': 'Лендинг',

    'project.wiki.title': 'Wiki-Codex v2',
    'project.wiki.desc': 'Единая дизайн-система с терминальной эстетикой, семантическими цветовыми токенами и спецификациями компонентов.',
    'project.wiki.category': 'Дизайн-система',

    'project.wireframes.title': 'UI Kit Wireframes',
    'project.wireframes.desc': 'Редакторная wireframe-система с атомарной методологией — атомы, молекулы, организмы.',
    'project.wireframes.category': 'Вайрфреймы',

    // About
    'about.tag': 'О себе',
    'about.title1': 'Не обычный',
    'about.title2': 'разработчик',
    'about.p1': 'Я Станислав — AI-энтузиаст с 20+ годами в коммерческом руководстве. Верю, что лучшие цифровые продукты получаются, когда глубокое понимание бизнеса объединяется с практическими навыками AI.',
    'about.p2': 'Проекты: мультиагентные AI-системы, автоматизация воронок продаж, предиктивная аналитика, дизайн-системы и иммерсивные лендинги. Каждый проект решает конкретную задачу.',
    'about.p3': 'Стек: Next.js, TypeScript, React, Python, Prompt Engineering, LLM, D3.js, Prisma, PostgreSQL — и постоянно расширяю.',

    // Experience
    'exp.tag': 'Опыт',
    'exp.title1': 'Что сделано',
    'exp.title2': '',

    'exp.hh.role': 'HH Copilot',
    'exp.hh.project': 'AI-помощник для поиска работы на HH.ru',
    'exp.hh.desc': 'Автоматические отклики, AI-переписка с работодателями, умный мэтчинг вакансий и аналитика конверсии.',

    'exp.neuro.role': 'NEURO Agency',
    'exp.neuro.project': 'Лендинг digital-агенства AI/ML',
    'exp.neuro.desc': 'Canvas-частицы, 3D-карточки, glassmorphism, SVG-анимации — иммерсивный визуал.',

    'exp.pmas.role': 'P-MAS Studio',
    'exp.pmas.project': 'Visual IDE для мультиагентных систем',
    'exp.pmas.desc': 'Графовый редактор топологий агентов, деплой и мониторинг оркестрации в реальном времени.',

    'exp.uikit.role': 'UI Kit Studio',
    'exp.uikit.project': 'Тулкит дизайн-системы',
    'exp.uikit.desc': 'URL-to-token извлечение, синхронизация с GitHub, GAP-анализ, пайплайн атомарного дизайна.',

    'exp.aiauto.role': 'AI-автоматизация',
    'exp.aiauto.project': 'Воронка продаж + предиктивная аналитика',
    'exp.aiauto.desc': 'Скоринг и маршрутизация лидов с AI. Время обработки лида с 24ч до 30мин. Модель прогнозирования оттока.',

    'exp.scripts.role': 'AI-генератор скриптов',
    'exp.scripts.project': 'Персонализированные скрипты продаж',
    'exp.scripts.desc': 'Генерация скриптов на основе профиля клиента и лучших практик команды с помощью LLM.',

    // Process
    'process.tag': 'Процесс',
    'process.title1': 'Как это',
    'process.title2': 'работает',

    'process.01.title': 'Понимание',
    'process.01.desc': 'Погружаюсь в задачу, аудиторию и ограничения — прежде чем писать код.',
    'process.02.title': 'Архитектура',
    'process.02.desc': 'Проектирую технический фундамент — модели данных, компоненты, контракты API.',
    'process.03.title': 'Дизайн',
    'process.03.desc': 'Создаю визуальный язык — типографика, цвет, отступы, анимации — всё осмысленно.',
    'process.04.title': 'Разработка',
    'process.04.desc': 'Пишу чистый, протестированный код. Шиплю инкрементально, валидирую постоянно.',
    'process.05.title': 'Доводка',
    'process.05.desc': 'Полирую взаимодействия, оптимизирую производительность, убираю шероховатости.',
    'process.06.title': 'Запуск',
    'process.06.desc': 'Деплою с уверенностью. Мониторю, собираю обратную связь, итерирую.',

    // Contact
    'contact.tag': 'Контакты',
    'contact.title': 'Есть идея для проекта?',
    'contact.subtitle': 'Всегда открыт к новым проектам и возможностям. Полный билд, дизайн-система или творческий эксперимент — давай обсудим.',
    'contact.cta': 'Начать проект',

    // Footer
    'footer.copyright': '© 2025 — 2026',
  },

  en: {
    // Nav
    'nav.about': 'About',
    'nav.work': 'Work',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'nav.letsTalk': "Let's Talk",

    // Hero
    'hero.tag': 'Stanislav Graur',
    'hero.line1': 'I Build',
    'hero.line2': 'Digital',
    'hero.line3Prefix': 'Not ',
    'hero.line3Accent': 'Templates',
    'hero.subtitle': 'AI enthusiast who turns ideas into code. Building projects at the intersection of business expertise and AI skills — the kind that solve real problems.',
    'hero.cta1': 'See My Work',
    'hero.cta2': 'About Me',
    'hero.projectsShipped': 'Projects',
    'hero.designSystems': 'Design Systems',
    'hero.technologies': 'Technologies',
    'hero.scroll': 'Scroll',

    // Projects
    'projects.tag': 'Selected Work',
    'projects.title': 'Projects',
    'projects.desc': 'Each project is a unique solution — no templates, no shortcuts. From AI tools to design systems, every line of code serves a purpose.',
    'projects.viewProject': 'View Project',

    'project.hh.title': 'HH Copilot',
    'project.hh.desc': 'AI-powered job search assistant for HH.ru. Auto-apply, intelligent chat replies, smart vacancy matching and conversion analytics.',
    'project.hh.category': 'Web App',

    'project.pmas.title': 'P-MAS Studio',
    'project.pmas.desc': 'Visual IDE for Multi-Agent Systems. Graph-based topology editor with runtime deployment and orchestration monitoring.',
    'project.pmas.category': 'Platform',

    'project.uikit.title': 'UI Kit Studio',
    'project.uikit.desc': 'Design system toolkit — URL-to-token extraction, GitHub sync, GAP analysis, and atomic design pipeline.',
    'project.uikit.category': 'Design System',

    'project.neuro.title': 'NEURO Agency',
    'project.neuro.desc': 'Landing page for an AI/ML agency: strategy consulting, predictive models, data engineering, computer vision and NLP.',
    'project.neuro.category': 'Landing Page',

    'project.wiki.title': 'Wiki-Codex v2',
    'project.wiki.desc': 'Unified design system with terminal aesthetics, semantic color tokens, and component-level specifications.',
    'project.wiki.category': 'Design System',

    'project.wireframes.title': 'UI Kit Wireframes',
    'project.wireframes.desc': 'Editorial wireframe system with atomic design methodology — atoms, molecules, organisms.',
    'project.wireframes.category': 'Wireframes',

    // About
    'about.tag': 'About',
    'about.title1': 'Not Your',
    'about.title2': 'Average Dev',
    'about.p1': "I'm Stanislav — an AI enthusiast with 20+ years in business leadership. I believe the best digital products emerge when deep business understanding meets practical AI skills.",
    'about.p2': 'Projects: multi-agent AI systems, sales funnel automation, predictive analytics, design systems, and immersive landing pages. Each project solves a real problem.',
    'about.p3': 'Stack: Next.js, TypeScript, React, Python, Prompt Engineering, LLM, D3.js, Prisma, PostgreSQL — and growing.',

    // Experience
    'exp.tag': 'Experience',
    'exp.title1': "What's",
    'exp.title2': 'Been Done',

    'exp.hh.role': 'HH Copilot',
    'exp.hh.project': 'AI Job Search Assistant for HH.ru',
    'exp.hh.desc': 'Auto-apply, AI chat replies, smart vacancy matching and conversion analytics.',

    'exp.neuro.role': 'NEURO Agency',
    'exp.neuro.project': 'Landing for AI/ML Digital Agency',
    'exp.neuro.desc': 'Canvas particles, 3D cards, glassmorphism, SVG animations — immersive visuals.',

    'exp.pmas.role': 'P-MAS Studio',
    'exp.pmas.project': 'Visual IDE for Multi-Agent Systems',
    'exp.pmas.desc': 'Graph-based agent topology editor, deployment and real-time orchestration monitoring.',

    'exp.uikit.role': 'UI Kit Studio',
    'exp.uikit.project': 'Design System Toolkit',
    'exp.uikit.desc': 'URL-to-token extraction, GitHub sync, GAP analysis, atomic design pipeline.',

    'exp.aiauto.role': 'AI Automation',
    'exp.aiauto.project': 'Sales Funnel + Predictive Analytics',
    'exp.aiauto.desc': 'AI lead scoring and routing. Lead processing time from 24h to 30min. Churn prediction model.',

    'exp.scripts.role': 'AI Script Generator',
    'exp.scripts.project': 'Personalized Sales Scripts',
    'exp.scripts.desc': 'Generating scripts based on client profile and team best practices using LLM.',

    // Process
    'process.tag': 'Process',
    'process.title1': 'How It',
    'process.title2': 'Works',

    'process.01.title': 'Discover',
    'process.01.desc': 'Understand the problem, audience, and constraints before writing a single line.',
    'process.02.title': 'Architect',
    'process.02.desc': 'Design the technical foundation — data models, component hierarchy, API contracts.',
    'process.03.title': 'Design',
    'process.03.desc': 'Create the visual language — typography, color, spacing, motion — all purposeful.',
    'process.04.title': 'Build',
    'process.04.desc': 'Write clean, tested, documented code. Ship incrementally, validate constantly.',
    'process.05.title': 'Refine',
    'process.05.desc': 'Polish interactions, optimize performance, eliminate every rough edge.',
    'process.06.title': 'Launch',
    'process.06.desc': 'Deploy with confidence. Monitor, gather feedback, and iterate.',

    // Contact
    'contact.tag': 'Get In Touch',
    'contact.title': 'Have a project in mind?',
    'contact.subtitle': "I'm always interested in new projects and opportunities. A full build, a design system, or a creative experiment — let's talk.",
    'contact.cta': 'Start a Project',

    // Footer
    'footer.copyright': '© 2025 — 2026',
  },
};

interface I18nContextValue {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextValue>({
  lang: 'ru',
  toggleLang: () => {},
  t: (key: string) => key,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('ru');
  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'ru' ? 'en' : 'ru'));
  }, []);
  const t = useCallback(
    (key: string) => translations[lang][key] || key,
    [lang]
  );
  return (
    <I18nContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}