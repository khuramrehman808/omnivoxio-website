export const siteConfig = {
  name: "Omnivoxio",
  tagline: "Build a Better Website. Get Found. Grow With Confidence.",
  description:
    "Omnivoxio helps growing teams with professional website development and evidence-based SEO growth systems.",
  email: "hello@omnivoxio.com",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.omnivoxio.com",
  whatsappNumber: "+92 329 8667235",
  whatsappUrl:
    "https://wa.me/923298667235?text=Hello%20Omnivoxio%2C%20I%20would%20like%20to%20discuss%20your%20website%20and%20SEO%20growth%20services.",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/services/website-development", label: "Website Development" },
  { href: "/services/seo-growth", label: "SEO Growth" },
  { href: "/solutions-industries", label: "Solutions & Industries" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export const footerLinks = {
  company: [
    { href: "/about", label: "About" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/faq", label: "FAQ" },
  ],
  services: [
    { href: "/services/website-development", label: "Website Development" },
    { href: "/services/seo-growth", label: "SEO Growth" },
    { href: "/services", label: "All Services" },
  ],
  legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-of-service", label: "Terms of Service" },
  ],
};

export function absoluteUrl(path = "") {
  return `${siteConfig.siteUrl}${path}`;
}
