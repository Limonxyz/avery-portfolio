export type Project = {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  github: string;
  live: string;
  year: string;
  category: string;
};

export type Experience = { period: string; role: string; company: string; description: string };
export type Achievement = { value: number; suffix: string; label: string; description: string };
export type Service = { title: string; description: string; features: string[] };
export type Testimonial = { quote: string; name: string; role: string; avatar: string };
export type BlogPost = { title: string; date: string; readTime: string; link: string };
export type Skill = { name: string; level: number };

export const siteData = {
  personal: {
    name: "Li M ON || WEB3",
    title: "Creative Ambassador & Web3 Storyteller",
    bio: "I build digital worlds where sharp strategy, expressive design, and emerging technology move as one. My work helps ambitious products feel impossible to ignore.",
    avatar: "/images/avatar.png",
    resume: "/resume.pdf",
    email: "mdlimonurrahman5@gmail.com",
    phone: "+8801967086940",
    location: "Mymensingh, Bangladesh",
    timezone: "Dhaka GMT+6",
    availability: "Available for selected collaborations",
  },
  social: {
    twitter: "https://x.com/LimonurMd/",
    github: "https://github.com/Limonxyz/",
    linkedin: "https://www.linkedin.com/in/md-limonur-rahman-8831a5249/",
    telegram: "https://t.me/Limon_xyz",
    discord: "https://discord.gg/3eRHztcbrk",
    youtube: "https://www.youtube.com/@LimonEarning",
    telegramChannel: "https://t.me/LimonEarningChannel/",
  },
  theme: {
    primary: "#a6ff4d",
    secondary: "#9b7bff",
    background: "#070807",
    accent: "#f4f6ef",
  },
 hero: {
  eyebrow: "Crypto Ambassador • Community Manager • Moderator",
  headline: "Building Communities That Move Web3 Forward.",
  subheadline: "I help Web3 projects grow through community management, moderation, content, and authentic community engagement.",
  ctaPrimary: "View My Work",
  ctaSecondary: "Let's Connect",
  orbitText: "WEB3 • COMMUNITY • CRYPTO • GROWTH •",
},

about: {
  eyebrow: "The Community Behind Web3",
  headline: "More Than Just a Moderator. A Community Builder.",
  bioSecondary: "I work with Web3 and crypto communities across ambassador programs, community management, moderation, and content. My focus is building stronger communities, maintaining meaningful engagement, and helping projects create a lasting presence.",
},
  projects: [
    {
      title: "Neon Protocol",
      image: "/images/project-neon.svg",
      description: "A living launch platform for a decentralized creative network, blending product education with an evolving on-chain identity.",
      technologies: ["Next.js", "GSAP", "WebGL", "Solidity"],
      github: "https://github.com/",
      live: "https://example.com/",
      year: "2026",
      category: "Product · Creative Development",
    },
    {
      title: "Arc/01",
      image: "/images/project-arc.svg",
      description: "An editorial NFT archive that makes a complex collection feel tactile, collectible, and unexpectedly human.",
      technologies: ["React", "TypeScript", "Framer Motion"],
      github: "https://github.com/",
      live: "https://example.com/",
      year: "2025",
      category: "Experience · Digital Art",
    },
    {
      title: "Common Ground",
      image: "/images/project-ground.svg",
      description: "A new digital home and narrative system for a community-owned climate innovation studio.",
      technologies: ["Next.js", "Sanity", "GSAP"],
      github: "https://github.com/",
      live: "https://example.com/",
      year: "2025",
      category: "Brand · Platform",
    },
  ] satisfies Project[],
  experience: [
    { period: "2024 — Now", role: "Independent Creative Developer", company: "Avery Studio", description: "Partnering with founders and creative teams on identity-rich digital products, launches, and experiments." },
    { period: "2022 — 2024", role: "Lead Experience Designer", company: "NewFrame Labs", description: "Led product design and creative development for emerging technology clients across Europe and North America." },
    { period: "2020 — 2022", role: "Creative Technologist", company: "Future Assembly", description: "Built award-recognized interactive campaigns and prototypes at the edge of storytelling and technology." },
    { period: "2018 — 2020", role: "Designer & Front-end Developer", company: "Studio North", description: "Turned brand systems into responsive websites for culture, fashion, and purpose-led organizations." },
  ] satisfies Experience[],
  achievements: [
    { value: 48, suffix: "+", label: "Projects shipped", description: "Across product, brand, and experimental web." },
    { value: 12, suffix: "", label: "Global recognitions", description: "For craft, interaction, and digital storytelling." },
    { value: 18, suffix: "m+", label: "Organic impressions", description: "Generated through launch narratives and content." },
    { value: 9, suffix: "", label: "Countries reached", description: "Working remotely with thoughtful teams worldwide." },
  ] satisfies Achievement[],
  services: [
    { title: "Digital direction", description: "A distinct creative north star that aligns story, interface, motion, and launch energy.", features: ["Creative strategy", "Art direction", "Experience concepts"] },
    { title: "Design & development", description: "Fast, accessible, expressive websites built as carefully as they are designed.", features: ["UX/UI design", "Creative development", "Motion systems"] },
    { title: "Web3 storytelling", description: "Clear narratives and content systems that turn technical products into movements people understand.", features: ["Launch campaigns", "Content systems", "Community experiences"] },
  ] satisfies Service[],
  testimonials: [
    { quote: "Avery found the emotional core of a deeply technical product—and then built an experience that made people want to be part of it.", name: "Maya Lin", role: "Co-founder, Neon Protocol", avatar: "/images/testimonial-maya.svg" },
    { quote: "The rare partner who can challenge the strategy in the morning and ship a perfect interaction by the afternoon.", name: "Theo Harris", role: "Creative Director, NewFrame", avatar: "/images/testimonial-theo.svg" },
    { quote: "Our launch finally felt like us: brave, clear, and alive. The results exceeded every target we had set.", name: "Imani Cole", role: "Founder, Common Ground", avatar: "/images/testimonial-imani.svg" },
  ] satisfies Testimonial[],
  blog: [
    { title: "Why the next internet needs more texture", date: "May 14, 2026", readTime: "6 min", link: "#contact" },
    { title: "Designing trust for decentralized products", date: "April 02, 2026", readTime: "8 min", link: "#contact" },
    { title: "Motion should mean something", date: "February 19, 2026", readTime: "4 min", link: "#contact" },
  ] satisfies BlogPost[],
  skills: [
    { name: "Creative Development", level: 96 }, { name: "Product Design", level: 92 },
    { name: "Motion & Interaction", level: 90 }, { name: "Web3 Strategy", level: 84 },
    { name: "Content Direction", level: 88 }, { name: "Brand Systems", level: 86 },
  ] satisfies Skill[],
  navigation: [
    { label: "About", href: "#about" }, { label: "Work", href: "#projects" },
    { label: "Experience", href: "#experience" }, { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export type SiteData = typeof siteData;
