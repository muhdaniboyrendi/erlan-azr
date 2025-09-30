<template>
  <footer
    class="relative bg-gradient-to-br from-gray-950 to-black border-t border-cyan-400/20 overflow-hidden"
  >
    <!-- Animated Grid Background -->
    <div class="absolute inset-0 opacity-10">
      <div class="grid-pattern"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 py-12">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <!-- Brand Section -->
        <div class="lg:col-span-2">
          <div class="mb-6">
            <h3
              class="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-3"
            >
              <NuxtImg src="favicon.png" alt="Logo" width="40" height="40" />
              <span class="sr-only">Muhdani Boyrendi Erlan Azhari</span>
            </h3>
            <p class="text-gray-400 leading-relaxed max-w-md">
              Full Stack Developer passionate about creating elegant solutions
              to complex problems. Specializing in modern web technologies and
              user-centric design.
            </p>
          </div>

          <!-- Social Links -->
          <div class="flex gap-4">
            <a
              href="https://www.instagram.com/erlan.azr_/"
              target="_blank"
              class="group relative w-10 h-10 flex items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-400/5 text-gray-400 hover:text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 hover:scale-110"
            >
              <i class="bi bi-instagram text-lg"></i>
              <div
                class="absolute inset-0 rounded-lg bg-cyan-400/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
            </a>
            <a
              href="https://www.linkedin.com/in/muhdani-boyrendi/"
              target="_blank"
              class="group relative w-10 h-10 flex items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-400/5 text-gray-400 hover:text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 hover:scale-110"
            >
              <i class="bi bi-linkedin text-lg"></i>
              <div
                class="absolute inset-0 rounded-lg bg-cyan-400/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
            </a>
            <a
              href="https://github.com/muhdaniboyrendi"
              target="_blank"
              class="group relative w-10 h-10 flex items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-400/5 text-gray-400 hover:text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 hover:scale-110"
            >
              <i class="bi bi-github text-lg"></i>
              <div
                class="absolute inset-0 rounded-lg bg-cyan-400/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
            </a>
            <a
              href="https://discord.gg/MfzpYpBV"
              target="_blank"
              class="group relative w-10 h-10 flex items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-400/5 text-gray-400 hover:text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 hover:scale-110"
            >
              <i class="bi bi-discord text-lg"></i>
              <div
                class="absolute inset-0 rounded-lg bg-cyan-400/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
            </a>
            <a
              href="https://www.tiktok.com/@erlan.azr"
              target="_blank"
              class="group relative w-10 h-10 flex items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-400/5 text-gray-400 hover:text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 hover:scale-110"
            >
              <i class="bi bi-tiktok text-lg"></i>
              <div
                class="absolute inset-0 rounded-lg bg-cyan-400/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4
            class="text-lg font-semibold text-cyan-300 mb-4 flex items-center gap-2"
          >
            <span
              class="w-8 h-[2px] bg-gradient-to-r from-cyan-400 to-transparent"
            ></span>
            Quick Links
          </h4>
          <ul class="space-y-3">
            <li>
              <a
                href="#home"
                class="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group"
              >
                <span
                  class="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></span>
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                class="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group"
              >
                <span
                  class="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></span>
                About Me
              </a>
            </li>
            <li>
              <a
                href="#skills"
                class="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group"
              >
                <span
                  class="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></span>
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                class="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group"
              >
                <span
                  class="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></span>
                Projects
              </a>
            </li>
            <li>
              <a
                href="#uses"
                class="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group"
              >
                <span
                  class="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></span>
                Uses
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group"
              >
                <span
                  class="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></span>
                Blog
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4
            class="text-lg font-semibold text-cyan-300 mb-4 flex items-center gap-2"
          >
            <span
              class="w-8 h-[2px] bg-gradient-to-r from-cyan-400 to-transparent"
            ></span>
            Get in Touch
          </h4>
          <ul class="space-y-3">
            <li class="flex items-start gap-3 text-gray-400">
              <i class="bi bi-geo-alt text-cyan-400"></i>
              <a
                href="mhttps://maps.app.goo.gl/TDtxVZUfsEJP9AXt9"
                target="_blank"
                class="text-sm hover:text-cyan-400 transition-colors duration-300"
              >
                Matesih, Karanganyar, Central Java, Indonesia, 57781
              </a>
            </li>
            <li class="flex items-start gap-3 text-gray-400">
              <i class="bi bi-envelope text-cyan-400"></i>
              <a
                href="mailto:erlanazrdev@gmail.com"
                class="text-sm hover:text-cyan-400 transition-colors duration-300"
              >
                erlanazrdev@gmail.com
              </a>
            </li>
            <li class="flex items-start gap-3 text-gray-400">
              <i class="bi bi-whatsapp text-cyan-400"></i>
              <a
                href="https://wa.me/+6282220633024"
                target="_blank"
                class="text-sm hover:text-cyan-400 transition-colors duration-300"
              >
                +62 822-2063-3024
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Divider -->
      <div
        class="h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent mb-8"
      ></div>

      <!-- Bottom Bar -->
      <div
        class="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-center md:text-start text-gray-500"
      >
        <p>
          © {{ currentYear }} by Muhdani Boyrendi Erlan Azhari. Created with
          <a
            href="https://nuxt.com"
            target="_blank"
            class="text-emerald-400 hover:underline"
            >Nuxt</a
          >
          <span> and </span>
          <a
            href="https://tailwindcss.com"
            target="_blank"
            class="text-sky-400 hover:underline"
            >Tailwind CSS</a
          >
        </p>
        <a
          href="https://github.com/muhdaniboyrendi/erlan-azr"
          target="_blank"
          class="text-gray-400 hover:text-cyan-400 hover:underline transition-colors duration-300"
          >/source</a
        >
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
.grid-pattern {
  background-image: linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
    linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px);
  background-size: 80px 80px;
  width: 100%;
  height: 100%;
  animation: grid-move 30s linear infinite;
}

@keyframes pulse-slow {
  0%,
  100% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.2;
  }
}

.animate-pulse-slow {
  animation: pulse-slow 8s ease-in-out infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}
</style>
