/*
 * The UX Hub catalog. To add a site, add one object to this list and open a PR.
 *
 *   title    Card name
 *   tagline  One line under the name
 *   desc     1-2 sentences on what it is for
 *   url      Where it lives
 *   category "Design System" | "Tools" | "Learning" | "Events" | "Community"
 *   tone     blue | electric-blue | indigo | emerald | teal | coral | lynn
 *   icon     Name of an official Lynn icon: IconBolt, IconBulb, IconCheck, IconClipboard,
 *            IconClaude (Claude mark), IconEye, IconNiceSmile, IconSpark, IconSparkles, IconArrowRight, IconLock
 *   access   "Public" | "SSO" | "Access code"   (what a visitor will hit)
 *   tags     Short keywords (also searched)
 *   featured true to pin it in the top row
 *   lynn     true if the site is built with Lynn UI (shows a "Built with Lynn" tag)
 */
window.HUB_SITES = [
  {
    title: "NiCE Designer Suite (NDS)",
    tagline: "Design system tools for people and agents",
    desc: "Native tools synced to Storybook, plus a full marketplace. The official way to get and self-audit design system components for agents like Claude Code, built for agentic workflows. Use Storybook components without a GitHub account, and self-audit your patterns.",
    url: "https://erick-nice.github.io/nice-designer-suite-website/index.html",
    category: "Tools", tone: "indigo", icon: "IconClipboard", access: "Access code",
    tags: ["agents", "marketplace", "audit"], featured: true,
    lynn: true
  },
  {
    title: "Supercharge Marketplace",
    tagline: "Community-built skills for Supercharge",
    desc: "Browse and install community-built skills that ship with Supercharge, the NiCE Designer Suite's agent tooling.",
    url: "https://erick-nice.github.io/nice-designer-suite-website/marketplace.html",
    category: "Tools", tone: "indigo", icon: "IconClaude", access: "Access code",
    tags: ["skills", "marketplace", "agents"], featured: true,
    lynn: true
  },
  {
    title: "Lynn",
    tagline: "Component library for internal sites and tools",
    desc: "Lynn is a component library used only for internal sites and tools, like this hub and the NiCE Designer site. It is not used for product UI, which is built on Lyra and SOL. Browse its components, tokens and themes.",
    url: "https://erick-nice.github.io/nice-designer-suite-website/lynn.html",
    category: "Design System", tone: "lynn", icon: "IconSparkles", access: "Access code",
    tags: ["components", "tokens", "internal"], featured: true, lynn: true
  },
  {
    title: "Lyra",
    tagline: "The Lyra design system",
    desc: "The Lyra static web app: components, patterns and guidance for building on the NiCE CXone design language.",
    url: "https://lyra-swa.nice.com/index.html",
    category: "Design System", tone: "blue", icon: "IconSpark", access: "SSO",
    tags: ["lyra", "components", "tokens"], featured: true
  },
  {
    title: "NDLR",
    tagline: "Erick Mathews' workspace",
    desc: "The NDLR library, with this workspace's uncategorized items. Requires a password.",
    url: "https://ndlr.netlify.app/#/erick-mathews/uncategorized",
    category: "Tools", tone: "emerald", icon: "IconEye", access: "Password",
    tags: ["ndlr", "library"], featured: true,
    lynn: true
  },
  {
    title: "Claude Design",
    tagline: "Make new concepts",
    desc: "Where new UX concepts start. Begin each one with the Lyra Design System so concepts match the product from the first draft.",
    url: "https://claude.ai/design?noredir=1",
    category: "Tools", tone: "lynn", icon: "IconClaude", access: "SSO",
    tags: ["concepts", "lyra", "prototype"], featured: true
  },
  {
    title: "Lyra & SOL Storybook",
    tagline: "Dev repo for components",
    desc: "One Storybook with both Lyra and SOL components, used as the developer source of truth. NDS pulls from it so you can use these components without a GitHub account.",
    url: "https://na1.dev.nice-incontact.com/sol/?path=/docs/introduction--docs",
    category: "Design System", tone: "teal", icon: "IconCheck", access: "SSO",
    tags: ["storybook", "lyra", "sol"]
  },
  {
    title: "Wings 2026 Session",
    tagline: "NiCE Wings 2026",
    desc: "The Wings 2026 session page, hosted inside the NiCE Designer site.",
    url: "https://erick-nice.github.io/nice-designer-suite-website/wings-2026.html",
    category: "Events", tone: "coral", icon: "IconBolt", access: "Access code",
    tags: ["wings", "session", "2026"],
    lynn: true
  },
  {
    title: "Designer Documentation",
    tagline: "Everything you need",
    desc: "Install guide, skills reference, use cases, scoring and FAQ for the NiCE Designer Suite.",
    url: "https://erick-nice.github.io/nice-designer-suite-website/install-guide.html",
    category: "Learning", tone: "teal", icon: "IconBulb", access: "Access code",
    tags: ["docs", "install", "faq"],
    lynn: true
  },
  {
    title: "UX Team Trainings",
    tagline: "Recorded trainings for the team",
    desc: "Recordings of UX team trainings on the UX-Global SharePoint site. Catch up on a session or revisit one.",
    url: "https://niceonlinena.sharepoint.com/sites/UX-Global/SitePages/UX-Team-Trainings.aspx",
    category: "Learning", tone: "emerald", icon: "IconNiceSmile", access: "SSO",
    tags: ["training", "recordings", "sharepoint"]
  },
  {
    title: "Legacy Design Documentation",
    tagline: "EUIUX Confluence space",
    desc: "The legacy design documentation in Confluence. Use it for older guidance that has not moved to Lyra or SOL yet.",
    url: "https://nice-ce-cxone-prod.atlassian.net/wiki/spaces/EUIUX/overview",
    category: "Learning", tone: "electric-blue", icon: "IconBulb", access: "SSO",
    tags: ["legacy", "confluence", "docs"]
  },
  {
    title: "UX Jira Board",
    tagline: "CXUX project board",
    desc: "The UX team's Jira board for the CXUX project: requests, work in progress and status.",
    url: "https://nice-ce-cxone-prod.atlassian.net/jira/software/c/projects/CXUX/boards/4130",
    category: "Community", tone: "coral", icon: "IconClipboard", access: "SSO",
    tags: ["jira", "cxux", "board"]
  },
  {
    title: "UX Global (SharePoint)",
    tagline: "The UX team home",
    desc: "The UX-Global SharePoint site: team news, files and resources.",
    url: "https://niceonlinena.sharepoint.com/sites/UX-Global/SitePages/Home.aspx",
    category: "Community", tone: "electric-blue", icon: "IconNiceSmile", access: "SSO",
    tags: ["sharepoint", "team", "ux-global"]
  }
];
