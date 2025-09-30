<template>
  <section
    id="contact"
    class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 to-gray-900 py-20 px-6"
  >
    <!-- Animated Grid Background -->
    <div class="absolute inset-0 opacity-10">
      <div class="grid-pattern"></div>
    </div>

    <!-- Floating Gradient Orbs -->
    <div
      class="absolute top-20 left-20 w-96 h-96 bg-cyan-400/10 rounded-full blur-[120px] animate-blob"
    ></div>
    <div
      class="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/10 rounded-full blur-[120px] animate-blob animation-delay-2000"
    ></div>
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-400/10 rounded-full blur-[120px] animate-blob animation-delay-4000"
    ></div>

    <!-- Content Container -->
    <div class="relative z-10 max-w-6xl mx-auto w-full">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-fade-in-up">
        <!-- Badge -->
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 backdrop-blur-sm mb-6"
        >
          <div class="relative flex h-2 w-2">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"
            ></span>
            <span
              class="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"
            ></span>
          </div>
          <span class="text-cyan-300 text-sm font-medium"
            >Contact me</span
          >
        </div>

        <!-- Title -->
        <h2
          class="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text"
        >
          Let's Connect
        </h2>

        <!-- Description -->
        <p class="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
          Have a project in mind or just want to chat? Feel free to reach out
          through any of these platforms. I'm always excited to connect with new
          people!
        </p>
      </div>

      <!-- Social Media Grid -->
      <div
        class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 animate-fade-in-up animation-delay-200"
      >
        <a
          v-for="(social, index) in socialLinks"
          :key="index"
          :href="social.url"
          target="_blank"
          class="group relative p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border transition-all duration-500 hover:scale-105"
          :class="social.borderColor"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <!-- Background Gradient on Hover -->
          <div
            class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            :class="social.gradientBg"
          ></div>

          <!-- Content -->
          <div class="relative z-10 flex items-center gap-4">
            <!-- Icon -->
            <div
              class="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              :class="social.iconBg"
            >
              <component
                :is="social.icon"
                class="w-7 h-7 transition-colors duration-300"
                :class="social.iconColor"
              />
            </div>

            <!-- Text -->
            <div class="flex-1">
              <h3
                class="text-lg font-bold text-white mb-1 transition-all duration-300"
                :class="social.titleHover"
              >
                {{ social.name }}
              </h3>
              <p class="text-gray-400 text-sm">{{ social.handle }}</p>
            </div>

            <!-- Arrow Icon -->
            <svg
              class="w-5 h-5 text-gray-400 group-hover:text-white transform transition-all duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>

          <!-- Stats Badge (Optional) -->
          <div
            v-if="social.stats"
            class="relative z-10 mt-4 pt-4 border-t border-gray-700/50"
          >
            <div class="flex items-center justify-between text-xs">
              <span class="text-gray-500">{{ social.stats.label }}</span>
              <span class="font-semibold" :class="social.iconColor">{{
                social.stats.value
              }}</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const InstagramIcon = {
  template: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
};

const LinkedInIcon = {
  template: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
};

const GithubIcon = {
  template: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`,
};

const TwitterIcon = {
  template: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
};

const WhatsAppIcon = {
  template: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>`,
};

const TelegramIcon = {
  template: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>`,
};

const EmailIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
};

const DiscordIcon = {
  template: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>`,
};

const DribbbleIcon = {
  template: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm9.452 5.917l-.051.051C19.63 7.06 16.054 8.85 11.99 8.85c-.454 0-.905-.016-1.35-.047C9.342 6.733 7.666 4.771 6.84 3.819 8.563 2.697 10.604 2.044 12.831 2.044c3.44 0 6.528 1.488 8.621 3.873zM5.545 4.935c.784.887 2.367 2.728 3.654 4.78-4.426 1.176-8.305 1.143-9.133 1.132.616-2.639 2.219-4.866 4.48-5.912zM2.044 12.083v-.252c.86.018 5.273.08 9.978-1.383.177.345.344.696.505 1.048l-.315.092c-4.853 1.57-7.421 5.882-7.625 6.244-1.636-1.799-2.543-4.166-2.543-6.75zm10.787 9.873c-2.195 0-4.223-.633-5.951-1.718.158-.346 1.965-3.968 7.289-5.858l.018-.006c1.333 3.471 1.884 6.373 2.022 7.182-1.053.267-2.16.4-3.378.4zm5.178-1.452c-.096-.564-.611-3.288-1.843-6.699 3.06-.489 5.747.312 6.092.426-.435 2.655-1.893 4.948-4.249 6.273z"/></svg>`,
};

const socialLinks = ref([
  {
    name: "Instagram",
    handle: "@yourusername",
    url: "https://instagram.com/yourusername",
    icon: InstagramIcon,
    iconBg: "bg-gradient-to-br from-purple-400/20 to-pink-400/20",
    iconColor: "text-pink-400 group-hover:text-white",
    borderColor:
      "border-pink-400/20 hover:border-pink-400/50 hover:shadow-[0_0_40px_rgba(244,114,182,0.3)]",
    gradientBg: "bg-gradient-to-br from-purple-400/5 to-pink-400/5",
    titleHover:
      "group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text",
    stats: {
      label: "Followers",
      value: "2.5k",
    },
  },
  {
    name: "LinkedIn",
    handle: "/in/yourprofile",
    url: "https://linkedin.com/in/yourprofile",
    icon: LinkedInIcon,
    iconBg: "bg-gradient-to-br from-blue-400/20 to-cyan-400/20",
    iconColor: "text-blue-400 group-hover:text-white",
    borderColor:
      "border-blue-400/20 hover:border-blue-400/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]",
    gradientBg: "bg-gradient-to-br from-blue-400/5 to-cyan-400/5",
    titleHover:
      "group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text",
    stats: {
      label: "Connections",
      value: "500+",
    },
  },
  {
    name: "GitHub",
    handle: "@yourusername",
    url: "https://github.com/yourusername",
    icon: GithubIcon,
    iconBg: "bg-gradient-to-br from-gray-400/20 to-gray-600/20",
    iconColor: "text-gray-300 group-hover:text-white",
    borderColor:
      "border-gray-400/20 hover:border-gray-400/50 hover:shadow-[0_0_40px_rgba(156,163,175,0.3)]",
    gradientBg: "bg-gradient-to-br from-gray-400/5 to-gray-600/5",
    titleHover:
      "group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-300 group-hover:to-gray-400 group-hover:bg-clip-text",
    stats: {
      label: "Repositories",
      value: "42",
    },
  },
  {
    name: "Twitter / X",
    handle: "@yourusername",
    url: "https://twitter.com/yourusername",
    icon: TwitterIcon,
    iconBg: "bg-gradient-to-br from-gray-700/20 to-gray-900/20",
    iconColor: "text-gray-200 group-hover:text-white",
    borderColor:
      "border-gray-400/20 hover:border-gray-400/50 hover:shadow-[0_0_40px_rgba(156,163,175,0.3)]",
    gradientBg: "bg-gradient-to-br from-gray-700/5 to-gray-900/5",
    titleHover:
      "group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-200 group-hover:to-gray-400 group-hover:bg-clip-text",
    stats: {
      label: "Followers",
      value: "1.2k",
    },
  },
  {
    name: "WhatsApp",
    handle: "+62 xxx xxxx xxxx",
    url: "https://wa.me/62xxxxxxxxxx",
    icon: WhatsAppIcon,
    iconBg: "bg-gradient-to-br from-green-400/20 to-emerald-400/20",
    iconColor: "text-green-400 group-hover:text-white",
    borderColor:
      "border-green-400/20 hover:border-green-400/50 hover:shadow-[0_0_40px_rgba(34,197,94,0.3)]",
    gradientBg: "bg-gradient-to-br from-green-400/5 to-emerald-400/5",
    titleHover:
      "group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-emerald-400 group-hover:bg-clip-text",
  },
  {
    name: "Telegram",
    handle: "@yourusername",
    url: "https://t.me/yourusername",
    icon: TelegramIcon,
    iconBg: "bg-gradient-to-br from-blue-400/20 to-sky-400/20",
    iconColor: "text-blue-400 group-hover:text-white",
    borderColor:
      "border-blue-400/20 hover:border-blue-400/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]",
    gradientBg: "bg-gradient-to-br from-blue-400/5 to-sky-400/5",
    titleHover:
      "group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-sky-400 group-hover:bg-clip-text",
  },
  {
    name: "Email",
    handle: "your.email@example.com",
    url: "mailto:your.email@example.com",
    icon: EmailIcon,
    iconBg: "bg-gradient-to-br from-cyan-400/20 to-blue-400/20",
    iconColor: "text-cyan-400 group-hover:text-white",
    borderColor:
      "border-cyan-400/20 hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]",
    gradientBg: "bg-gradient-to-br from-cyan-400/5 to-blue-400/5",
    titleHover:
      "group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text",
  },
  {
    name: "Discord",
    handle: "username#1234",
    url: "https://discord.com/users/youruserid",
    icon: DiscordIcon,
    iconBg: "bg-gradient-to-br from-indigo-400/20 to-purple-400/20",
    iconColor: "text-indigo-400 group-hover:text-white",
    borderColor:
      "border-indigo-400/20 hover:border-indigo-400/50 hover:shadow-[0_0_40px_rgba(99,102,241,0.3)]",
    gradientBg: "bg-gradient-to-br from-indigo-400/5 to-purple-400/5",
    titleHover:
      "group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 group-hover:bg-clip-text",
  },
  {
    name: "Dribbble",
    handle: "@yourusername",
    url: "https://dribbble.com/yourusername",
    icon: DribbbleIcon,
    iconBg: "bg-gradient-to-br from-pink-400/20 to-rose-400/20",
    iconColor: "text-pink-400 group-hover:text-white",
    borderColor:
      "border-pink-400/20 hover:border-pink-400/50 hover:shadow-[0_0_40px_rgba(244,114,182,0.3)]",
    gradientBg: "bg-gradient-to-br from-pink-400/5 to-rose-400/5",
    titleHover:
      "group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-rose-400 group-hover:bg-clip-text",
    stats: {
      label: "Shots",
      value: "28",
    },
  },
]);

const handleSubmit = () => {
  // Handle form submission
  console.log("Form submitted:", formData.value);
  alert("Thank you for your message! I will get back to you soon.");

  // Reset form
  formData.value = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
};
</script>

<style scoped>
.grid-pattern {
  background-image: linear-gradient(rgba(6, 182, 212, 0.5) 1px, transparent 1px),
    linear-gradient(90deg, rgba(6, 182, 212, 0.5) 1px, transparent 1px);
  background-size: 120px 120px;
  width: 100%;
  height: 100%;
  animation: grid-move 20s linear infinite;
}

@keyframes grid-move {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(120px, 120px);
  }
}

.neon-text {
  text-shadow: 0 0 10px rgba(6, 182, 212, 0.5), 0 0 20px rgba(6, 182, 212, 0.3),
    0 0 30px rgba(6, 182, 212, 0.2);
}

@keyframes blob {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out;
}

.animation-delay-200 {
  animation-delay: 0.2s;
  opacity: 0;
  animation-fill-mode: forwards;
}

.animation-delay-400 {
  animation-delay: 0.4s;
  opacity: 0;
  animation-fill-mode: forwards;
}

.animation-delay-600 {
  animation-delay: 0.6s;
  opacity: 0;
  animation-fill-mode: forwards;
}
</style>
