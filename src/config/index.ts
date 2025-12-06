import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "K.M Nazmul Huda — Web Developer",
  author: "nazmulhuda",
  description:
    "Web Developer based in Narail, BD. I specialize in UI design, web  application development and maintenance.",
  lang: "en",
  siteLogo: "/naz.png",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/nazmul-khan12/" },
    { text: "Github", href: "https://github.com/nazmulHuda121" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "K.M Nazmul Huda",
    specialty: "Junior Web Developer",
    summary:
      "Developer based in Narail, Bangladesh. Frontend developer specializing in React, crafting responsive and interactive web apps that deliver smooth user experiences.",
    email: "nazmul.khan121@gmail.com",
  },
  experience: [
    {
      company: "TubeOnAI",
      position: "Landing Page Customization (WordPress)",
      startDate: "April 2023",
      endDate: "January 2024",
      summary: [
        "Customized and optimized high-conversion landing pages using WordPress, Elementor, and Gutenberg, ensuring fast performance and pixel-perfect design.",
        "Improved page load speed by up to 35% through layout optimization, image compression, and SEO-friendly structure—boosting Core Web Vitals scores.",
        "Converted Figma/Adobe XD designs into responsive, visually consistent landing pages with smooth animations and clean UI components.",
        "Collaborated with the marketing team to apply conversion-focused layouts, increasing user engagement and improving lead conversion by 25%.",
        "Integrated and optimized third-party plugins (forms, sliders, analytics, subscription tools) ensuring compatibility and minimal performance impact.",
        "Maintained brand consistency and enhanced user experience by fixing UI issues, improving responsiveness, and ensuring cross-browser support.",
      ],
    },
  ],
  projects: [
    {
      name: "Rental Wheel",
      summary:
        "A modern car rental platform featuring real-time availability, booking badges, and a clean dashboard-driven UX for seamless vehicle rentals.",
      linkPreview: "https://brilliant-quokka-dc81d2.netlify.app/",
      linkSource:
        "https://github.com/nazmulHuda121/B12_A10_RentWheel_0008_client",
      image: "/rental.png",
    },
    {
      name: "Gadget Store",
      summary:
        "A sleek e-commerce app with dynamic product filtering, cart management, and secure authentication—built for a smooth and responsive shopping experience.",
      linkPreview: "https://gadget-store-client.vercel.app/",
      linkSource: "https://github.com/nazmulHuda121/gadget_store_client",
      image: "/gadget.png",
    },
    {
      name: "Hero Apps",
      summary:
        "A social media app inspired by Instagram, featuring photo sharing, feeds, and user interaction.",
      linkPreview: "https://clinquant-yeot-849fb2.netlify.app/",
      linkSource: "https://github.com/nazmulHuda121/B12A08_Hero_Apps",
      image: "/hero.png",
    },
  ],
  about: {
    description: `
      Hi, I’m K.M Nazmul Huda, a passionate Frontend and Fullstack Developer specializing in React and the MERN stack. I build modern, responsive, and interactive web applications that are both user-friendly and scalable. I enjoy turning complex problems into clean, maintainable code, and creating seamless digital experiences. Constantly learning new technologies, I aim to craft solutions that not only look great but also perform flawlessly. My goal is to help businesses grow online by delivering high-quality web applications tailored to their needs.
    `,
    image: "/about.png",
  },
};

// #5755ff
