// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css", "bootstrap-icons/font/bootstrap-icons.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: [
    "@nuxtjs/color-mode",
    "@pinia/nuxt",
    "@nuxt/image",
    "motion-v/nuxt",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Muhdani Boyrendi Erlan Azhari - Full Stack Developer",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Full Stack Developer specializing in modern web technologies.",
        },
        { name: "application-name", content: "Erlan Azhari" },

        // Open Graph Meta Tags
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Muhdani Boyrendi Erlan Azhari" },
        {
          property: "og:title",
          content: "Muhdani Boyrendi Erlan Azhari",
        },
        {
          property: "og:description",
          content:
            "Full Stack Developer specializing in modern web technologies. Connect with me through my professional links and portfolio.",
        },
        { property: "og:url", content: "https://erlanazhari.my.id" },
        {
          property: "og:image",
          content: "https://erlanazhari.my.id/og-image.png",
        },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:type", content: "image/png" },
        {
          property: "og:image:alt",
          content: "Muhdani Boyrendi Erlan Azhari - Full Stack Developer",
        },

        // Twitter Card Meta Tags
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Muhdani Boyrendi Erlan Azhari",
        },
        {
          name: "twitter:description",
          content:
            "Full Stack Developer specializing in modern web technologies. Connect with me through my professional links and portfolio.",
        },
        {
          name: "twitter:image",
          content: "https://erlanazhari.my.id/og-image.png",
        },
        {
          name: "twitter:image:alt",
          content: "Muhdani Boyrendi Erlan Azhari - Full Stack Developer",
        },
        // { name: "twitter:creator", content: "@yourusername" }, // Uncomment dan isi jika punya Twitter

        { name: "author", content: "Muhdani Boyrendi Erlan Azhari" },
        { name: "robots", content: "index, follow" },
        {
          name: "keywords",
          content: "full stack developer, web developer, portfolio, freelancer",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap",
          media: "print",
          onload: "this.media='all'", // Defer loading
        },
        { rel: "canonical", href: "https://erlanazhari.my.id" },
      ],
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Erlan Azhari",
            alternateName: "Muhdani Boyrendi Erlan Azhari",
            url: "https://erlanazhari.my.id",
            jobTitle: "Full Stack Developer",
            description:
              "Full Stack Developer specializing in modern web technologies",
            sameAs: [
              "https://id.linkedin.com/in/muhdani-boyrendi-erlan-azhari-...",
              "https://www.instagram.com/erlan.azr_/",
            ],
          }),
        },
      ],
    },
  },
  ssr: true,
  image: {
    format: ["webp", "avif"], // Modern format, fallback ke webp
    quality: 80, // Balance antara ukuran dan kualitas
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/sitemap.xml", "/robots.txt"],
    },
    compressPublicAssets: true,
  },
  sitemap: {
    hostname: "https://erlanazhari.my.id",
    gzip: true,
    exclude: ["/admin/**", "/private/**"],
  },
  robots: {
    UserAgent: "*",
    Disallow: ["/admin", "/private"],
    Sitemap: "https://erlanazhari.my.id/sitemap.xml",
  },
  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: true,
  },
  pinia: {
    storesDirs: ["./stores/**"],
  },
  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "light",
  },
});
