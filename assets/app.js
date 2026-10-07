import { createElement as h, useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Badge, Button, CtaBanner, FeatureCard, Footer, Hero, IconArrowRight, IconBolt, IconBulb, IconCheck,
  IconClipboard, IconEye, IconLock, IconNiceSmile, IconSpark, IconSparkles, IconCard, Nav, SearchInput,
  Tabs, ThemeProvider, ThemeToggle, useLynnTheme,
} from '../vendor/lynn-ui/dist/index.js';

const ICONS = { IconBolt, IconBulb, IconCheck, IconClipboard, IconEye, IconNiceSmile, IconSpark, IconSparkles, IconArrowRight, IconLock };
const ACCESS_STATUS = { Public: 'good', SSO: 'active', 'Access code': 'beta', Password: 'beta' };
const THEME_KEY = 'ux-hub-theme';
const sites = window.HUB_SITES || [];

function readTheme() {
  try { const t = localStorage.getItem(THEME_KEY); if (t === 'lynn' || t === 'light' || t === 'dark') return t; } catch (e) {}
  return 'lynn';
}

/* ThemeProvider stamps its own wrapper; mirror the theme onto <html> so the
   portal-free page chrome and body background follow it too. */
function ThemeBridge() {
  const { theme } = useLynnTheme();
  useEffect(() => {
    document.documentElement.setAttribute('data-lynn-theme', theme);
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
  }, [theme]);
  return null;
}

function SiteCard({ site }) {
  const Icon = ICONS[site.icon] || IconSparkles;
  const tone = site.tone || 'blue';
  const c = `var(--lynn-color-${tone})`;
  return h('a', {
    className: 'hub-link', href: site.url, target: '_blank', rel: 'noopener noreferrer',
    'aria-label': `${site.title} (opens in a new tab)`,
  },
    h(FeatureCard, {
      icon: h(Icon, { size: 26 }),
      iconGradient: `linear-gradient(135deg, ${c}, var(--lynn-color-lynn))`,
      accentColor: c,
      name: site.title,
      tagline: site.tagline,
      tags: site.tags || [],
      status: h('span', { className: 'hub-status' }, site.access !== 'Public' ? h(IconLock, { size: 11 }) : null, site.access),
      statusVariant: ACCESS_STATUS[site.access] || 'active',
      className: 'hub-card',
    },
      h('p', { className: 'hub-card-desc' }, site.desc),
      h('span', { className: 'hub-open' }, 'Open site', h(IconArrowRight, { size: 14 })),
    ));
}

function Directory() {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('All');
  const cats = useMemo(() => ['All', ...new Set(sites.map((s) => s.category))], []);
  const list = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return sites
      .filter((s) => (cat === 'All' || s.category === cat) &&
        (!needle || [s.title, s.tagline, s.desc, s.category, ...(s.tags || [])].join(' ').toLowerCase().includes(needle)))
      .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }, [q, cat]);
  return h('section', { className: 'hub-section', id: 'sites' },
    h('p', { className: 'hub-label' }, 'Directory'),
    h('h2', { className: 'hub-title' }, 'All ', h('span', null, 'UX sites')),
    h('p', { className: 'hub-desc' }, 'Open a card to go to the site. The badge shows what you will meet there: public, SSO, a password or an access code.'),
    h('div', { className: 'hub-toolbar' },
      h(Tabs, { variant: 'elevated', ariaLabel: 'Filter by category', value: cat, onChange: setCat, options: cats.map((c) => ({ value: c, label: c })) }),
      h('div', { className: 'hub-search' }, h(SearchInput, { value: q, onChange: setQ, placeholder: 'Search sites', ariaLabel: 'Search sites' })),
    ),
    h('p', { className: 'hub-count', 'aria-live': 'polite' }, `${list.length} ${list.length === 1 ? 'site' : 'sites'}`),
    list.length
      ? h('div', { className: 'hub-grid' }, list.map((s) => h(SiteCard, { site: s, key: s.url })))
      : h('p', { className: 'hub-empty' }, 'No sites match. Try another search or category.'));
}

function App() {
  return h(ThemeProvider, { defaultTheme: readTheme(), className: 'hub-root' },
    h(ThemeBridge),
    h(Nav, {
      logo: h('span', null, h('span', { className: 'lynn-nav-logo-nice' }, 'NiCE'), h('span', { className: 'lynn-nav-logo-designer' }, ' UX Hub')),
      logoHref: '#top',
      cta: h(ThemeToggle, { showLabels: false }),
    }),
    h('main', { id: 'top' },
      h(Hero, {
        eyebrow: 'NiCE UX team',
        heading: ['Every UX site, ', h('span', { className: 'hub-grad', key: 'g' }, 'one hub')],
        subtitle: 'Design systems, tools, learning and events from the UX team, together in one place.',
        actions: [
          h(Button, { key: 'b', variant: 'primary', href: '#sites', icon: h(IconArrowRight, { size: 16 }) }, 'Browse sites'),
          h(Button, { key: 'a', variant: 'secondary', href: '#add' }, 'Add a site'),
        ],
      }),
      h(Directory),
      h('section', { className: 'hub-section hub-section-ruled', id: 'concept' },
        h(CtaBanner, {
          variant: 'gradient',
          text: 'Starting a new concept? Open Claude Design and begin with the Lyra Design System.',
          ctaLabel: 'Open Claude Design', ctaHref: 'https://claude.ai/design?noredir=1',
          ctaTarget: '_blank', ctaRel: 'noopener noreferrer', ctaIcon: h(IconSparkles, { size: 16 }),
        })),
      h('section', { className: 'hub-section hub-section-ruled', id: 'add' },
        h('p', { className: 'hub-label' }, 'Contribute'),
        h('h2', { className: 'hub-title' }, 'Built something? ', h('span', null, 'Add it')),
        h('p', { className: 'hub-desc' }, 'New sites are one entry in ', h('code', { className: 'hub-code' }, 'assets/sites.js'), '. Open a pull request on the repo and it appears here once merged.'),
        h('p', { className: 'hub-desc' }, 'No GitHub account, or not comfortable submitting a PR? Just send a .zip of your site to Erick Mathews and he will help you get it live.'),
        h('div', { className: 'hub-actions' },
          h(Button, { variant: 'secondary', href: 'https://teams.microsoft.com/l/chat/0/0?users=erick.mathews@nice.com', target: '_blank', rel: 'noopener noreferrer', icon: h(IconNiceSmile, { size: 16 }) }, 'Message Erick on Teams')),
        h('div', { className: 'hub-add' },
          h(IconCard, { layout: 'vertical', icon: h(IconClipboard, { size: 32 }), title: 'Add an entry', description: 'Copy an existing object in sites.js and fill in title, url, category, tone and icon.' }),
          h(IconCard, { layout: 'vertical', icon: h(IconBolt, { size: 32 }), title: 'Open a PR', description: 'Anyone on the team can propose a site. A reviewer merges it.' }),
          h(IconCard, { layout: 'vertical', icon: h(IconCheck, { size: 32 }), title: 'It goes live', description: 'GitHub Pages redeploys on merge. No build step.' }),
        ))),
    h(Footer, {
      columns: [
        { title: 'Design', links: [{ label: 'Lyra', href: 'https://lyra-swa.nice.com/index.html' }, { label: 'Lyra & SOL Storybook', href: 'https://na1.dev.nice-incontact.com/sol/?path=/docs/introduction--docs' }, { label: 'Claude Design', href: 'https://claude.ai/design?noredir=1' }] },
        { title: 'Tools', links: [{ label: 'NiCE Designer Suite', href: 'https://erick-nice.github.io/nice-designer-suite-website/index.html' }, { label: 'Supercharge Marketplace', href: 'https://erick-nice.github.io/nice-designer-suite-website/marketplace.html' }, { label: 'NDLR', href: 'https://ndlr.netlify.app/#/erick-mathews/uncategorized' }] },
        { title: 'Team', links: [{ label: 'UX Global', href: 'https://niceonlinena.sharepoint.com/sites/UX-Global/SitePages/Home.aspx' }, { label: 'UX Team Trainings', href: 'https://niceonlinena.sharepoint.com/sites/UX-Global/SitePages/UX-Team-Trainings.aspx' }, { label: 'UX Jira Board', href: 'https://nice-ce-cxone-prod.atlassian.net/jira/software/c/projects/CXUX/boards/4130' }, { label: 'Legacy Docs', href: 'https://nice-ce-cxone-prod.atlassian.net/wiki/spaces/EUIUX/overview' }, { label: 'Wings 2026', href: 'https://erick-nice.github.io/nice-designer-suite-website/wings-2026.html' }] },
      ],
    }));
}

createRoot(document.getElementById('app')).render(h(App));
document.documentElement.classList.remove('hub-pending');
