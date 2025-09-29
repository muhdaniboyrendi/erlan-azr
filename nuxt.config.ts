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
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Muhdani Boyrendi Erlan Azhari",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Full Stack Developer specializing in modern web technologies.",
        },

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
          content: "full stack developer, web developer, portfolio",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
        { rel: "canonical", href: "https://erlanazhari.my.id" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "dns-prefetch", href: "https://fonts.googleapis.com" },
      ],
      script: [
        // Structured Data (JSON-LD) untuk SEO
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Muhdani Boyrendi Erlan Azhari",
            alternateName: "Erlan Azhari",
            jobTitle: "Full Stack Developer",
            description:
              "Full Stack Developer specializing in modern web technologies",
            url: "https://erlanazhari.my.id",
            image: "https://erlanazhari.my.id/og-image.png",
            sameAs: [
              "https://instagram.com/erlan.azr_",
              "https://github.com/muhdaniboyrendi",
              "https://www.linkedin.com/in/muhdani-boyrendi/",
            ],
          }),
        },
      ],
      nitro: {
        compressPublicAssets: true,
        prerender: {
          crawlLinks: true,
          routes: ["/"],
        },
      },
      build: {
        transpile: [],
      },
      router: {
        options: {
          strict: false,
        },
      },
    },
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
