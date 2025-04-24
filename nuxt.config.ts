// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css", "bootstrap-icons/font/bootstrap-icons.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ["@nuxtjs/seo", "@nuxt/icon", "@nuxtjs/color-mode", "@pinia/nuxt"],
  pinia: {
    storesDirs: ["./stores/**"],
  },
  icon: {
    mode: "css",
    cssLayer: "base",
  },
  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "light",
  },
});