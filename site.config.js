const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Sajad Mirzababaei",
    image: "/avatar.svg", 
    role: "Data Scientist",
    bio: "I am the cat killed by curiosity!",
    email: "ss.mirzababaei[at]gmail.com",
    linkedin: "sajad-mirzababaei",
    github: "optimopium",
    instagram: "",
  },
  projects: [
    {
      name: `optimopium-log`,
      href: "https://github.com/optimopium/optimopium.github.io",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Optimopium Blog",
    description: "I've created this space to share my thoughts, insights, and findings with the world. Here, you'll find a curated collection of my studies and musings, neatly organized for easy access.",
    theme: "auto",
  },

  // CONFIG configration (required)
  link: "https://optimopium.github.io",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "optimopium/optimopium",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
