/*
 * The UX Hub catalog. To add a site, add one object to this list and open a PR.
 *
 *   title    Card name
 *   tagline  One line under the name
 *   desc     1-2 sentences on what it is for
 *   url      Where it lives
 *   category "Design System" | "Tools" | "Learning" | "Events" | "Community"
 *   tone     blue | electric-blue | indigo | emerald | teal | coral | lynn
 *   icon     A single emoji
 *   access   "Public" | "SSO" | "Access code"   (what a visitor will hit)
 *   tags     Short keywords (also searched)
 *   featured true to pin it in the top row
 */
window.HUB_SITES = [
  {
    title: "NiCE Designer Suite",
    tagline: "Design system compliance hub",
    desc: "Install guides, Claude skills, scoring, the compliance dashboard, roadmap and release notes for the Figma plugin, Chrome extension and MCP.",
    url: "https://erick-nice.github.io/nice-designer-suite-website/index.html",
    category: "Tools", tone: "indigo", icon: "🎨", access: "Access code",
    tags: ["figma", "chrome", "mcp", "compliance"], featured: true
  },
  {
    title: "Lyra",
    tagline: "The Lyra design system",
    desc: "The Lyra static web app: components, patterns and guidance for building on the NiCE CXone design language.",
    url: "https://lyra-swa.nice.com/index.html",
    category: "Design System", tone: "blue", icon: "✦", access: "SSO",
    tags: ["lyra", "components", "tokens"], featured: true
  },
  {
    title: "NDLR",
    tagline: "Erick Mathews' workspace",
    desc: "The NDLR library, with this workspace's uncategorized items.",
    url: "https://ndlr.netlify.app/#/erick-mathews/uncategorized",
    category: "Tools", tone: "emerald", icon: "📚", access: "Public",
    tags: ["ndlr", "library"], featured: true
  },
  {
    title: "Wings 2026 Session",
    tagline: "NiCE Wings 2026",
    desc: "The Wings 2026 session page, hosted inside the NiCE Designer site.",
    url: "https://erick-nice.github.io/nice-designer-suite-website/wings-2026.html",
    category: "Events", tone: "coral", icon: "🪽", access: "Access code",
    tags: ["wings", "session", "2026"]
  },
  {
    title: "Designer Documentation",
    tagline: "Everything you need",
    desc: "Install guide, skills reference, use cases, scoring and FAQ for the NiCE Designer Suite.",
    url: "https://erick-nice.github.io/nice-designer-suite-website/install-guide.html",
    category: "Learning", tone: "teal", icon: "📖", access: "Access code",
    tags: ["docs", "install", "faq"]
  },
  {
    title: "UX Global (SharePoint)",
    tagline: "The UX team home",
    desc: "The UX-Global SharePoint site: team news, files and resources.",
    url: "https://niceonlinena.sharepoint.com/sites/UX-Global/SitePages/Home.aspx",
    category: "Community", tone: "electric-blue", icon: "🌐", access: "SSO",
    tags: ["sharepoint", "team", "ux-global"]
  }
];
