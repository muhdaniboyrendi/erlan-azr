<script setup>
const socialLinks = ref([
  {
    name: "Instagram",
    handle: "@erlan.azr_",
    url: "https://instagram.com/erlan.azr_",
    icon: "bi-instagram",
    iconBg: "bg-gradient-to-br from-purple-400/20 to-pink-400/20",
    iconColor: "text-pink-400 group-hover:text-white",
    borderColor:
      "border-pink-400/20 hover:border-pink-400/50 hover:shadow-[0_0_40px_rgba(244,114,182,0.3)]",
    gradientBg: "bg-gradient-to-br from-purple-400/5 to-pink-400/5",
    titleHover:
      "group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text",
  },
  {
    name: "LinkedIn",
    handle: "muhdani boyrendi",
    url: "https://linkedin.com/in/muhdani-boyrendi",
    icon: "bi-linkedin",
    iconBg: "bg-gradient-to-br from-blue-400/20 to-cyan-400/20",
    iconColor: "text-blue-400 group-hover:text-white",
    borderColor:
      "border-blue-400/20 hover:border-blue-400/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]",
    gradientBg: "bg-gradient-to-br from-blue-400/5 to-cyan-400/5",
    titleHover:
      "group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text",
  },
  {
    name: "GitHub",
    handle: "@muhdaniboyrendi",
    url: "https://github.com/muhdaniboyrendi",
    icon: "bi-github",
    iconBg: "bg-gradient-to-br from-gray-400/20 to-gray-600/20",
    iconColor: "text-gray-300 group-hover:text-white",
    borderColor:
      "border-gray-400/20 hover:border-gray-400/50 hover:shadow-[0_0_40px_rgba(156,163,175,0.3)]",
    gradientBg: "bg-gradient-to-br from-gray-400/5 to-gray-600/5",
    titleHover:
      "group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-300 group-hover:to-gray-400 group-hover:bg-clip-text",
  },
  {
    name: "Twitter / X",
    handle: "@yourusername",
    url: "https://twitter.com/yourusername",
    icon: "bi-twitter-x",
    iconBg: "bg-gradient-to-br from-gray-700/20 to-gray-900/20",
    iconColor: "text-gray-200 group-hover:text-white",
    borderColor:
      "border-gray-400/20 hover:border-gray-400/50 hover:shadow-[0_0_40px_rgba(156,163,175,0.3)]",
    gradientBg: "bg-gradient-to-br from-gray-700/5 to-gray-900/5",
    titleHover:
      "group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-200 group-hover:to-gray-400 group-hover:bg-clip-text",
  },
  {
    name: "WhatsApp",
    handle: "+62 822-2063-3024",
    url: "https://wa.me/6282220633024",
    icon: "bi-whatsapp",
    iconBg: "bg-gradient-to-br from-green-400/20 to-emerald-400/20",
    iconColor: "text-green-400 group-hover:text-white",
    borderColor:
      "border-green-400/20 hover:border-green-400/50 hover:shadow-[0_0_40px_rgba(34,197,94,0.3)]",
    gradientBg: "bg-gradient-to-br from-green-400/5 to-emerald-400/5",
    titleHover:
      "group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-emerald-400 group-hover:bg-clip-text",
  },
  {
    name: "Email",
    handle: "erlanazrdev@gmail.com",
    url: "mailto:erlanazrdev@gmail.com",
    icon: "bi-envelope",
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
    handle: "Erlan Azr",
    url: "https://discord.gg/MfzpYpBV",
    icon: "bi-discord",
    iconBg: "bg-gradient-to-br from-indigo-400/20 to-purple-400/20",
    iconColor: "text-indigo-400 group-hover:text-white",
    borderColor:
      "border-indigo-400/20 hover:border-indigo-400/50 hover:shadow-[0_0_40px_rgba(99,102,241,0.3)]",
    gradientBg: "bg-gradient-to-br from-indigo-400/5 to-purple-400/5",
    titleHover:
      "group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 group-hover:bg-clip-text",
  },
  {
    name: "Tik Tok",
    handle: "@erlan.azr",
    url: "https://www.tiktok.com/@erlan.azr",
    icon: "bi-tiktok",
    iconBg: "bg-gradient-to-br from-cyan-300/20 to-pink-400/20",
    iconColor: "text-gray-200 group-hover:text-white",
    borderColor:
      "border-indigo-400/20 hover:border-indigo-400/50 hover:shadow-[0_0_40px_rgba(99,102,241,0.3)]",
    gradientBg: "bg-gradient-to-br from-indigo-400/5 to-purple-400/5",
    titleHover:
      "group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 group-hover:bg-clip-text",
  },
]);
</script>

<template>
  <section
    id="contact"
    class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-bl from-gray-950 to-dark py-20 px-6"
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
      <div class="text-center mb-16">
        <!-- Badge -->
        <motion
          :initial="{ opacity: 0, y: 20 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.3 }"
        >
          <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 backdrop-blur-sm mb-6"
          >
            <span class="text-cyan-300 text-sm font-medium">Contact me</span>
          </div>
        </motion>

        <!-- Title -->
        <motion
          :initial="{ opacity: 0, y: 20 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.3 }"
        >
          <h2
            class="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text"
          >
            Let's Connect
          </h2>
        </motion>

        <!-- Description -->
        <motion
          :initial="{ opacity: 0, y: 20 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.3 }"
        >
          <p class="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Have a project in mind or just want to chat? Feel free to reach out
            through any of these platforms. I'm always excited to connect with
            new people!
          </p>
        </motion>
      </div>

      <!-- Social Media Grid -->
      <motion
        :initial="{ opacity: 0, y: 20 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.5, delay: 0.3 }"
      >
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <a
            v-for="(social, index) in socialLinks"
            :key="index"
            :href="social.url"
            target="_blank"
            class="group relative rounded-2xl bg-dark border transition-all duration-500 hover:scale-105 overflow-hidden"
            :class="social.borderColor"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <!-- Background Gradient on Hover -->
            <div
              class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              :class="social.gradientBg"
            ></div>

            <!-- Content -->
            <div
              class="relative z-10 flex items-center gap-4 p-6"
              :class="social.gradientBg"
            >
              <!-- Icon -->
              <div
                class="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                :class="social.iconBg"
              >
                <i
                  class="bi text-2xl"
                  :class="[social.icon, social.iconColor]"
                ></i>
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
              <i
                class="bi bi-arrow-right text-gray-400 group-hover:text-white transform transition-all duration-300 group-hover:translate-x-1"
              ></i>
            </div>
          </a>
        </div>
      </motion>
    </div>
  </section>
</template>

<style scoped>
.grid-pattern {
  background-image: linear-gradient(rgba(6, 182, 212, 0.5) 1px, transparent 1px),
    linear-gradient(90deg, rgba(6, 182, 212, 0.5) 1px, transparent 1px);
  background-size: 60px 60px;
  width: 100%;
  height: 100%;
  animation: grid-move 20s linear infinite;
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
</style>
