<template>
  <section
    id="home"
    class="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-dark to-gray-950 pb-34 pt-28"
  >
    <!-- Grid Background -->
    <div class="absolute inset-0 opacity-20">
      <div class="grid-pattern"></div>
    </div>

    <!-- Floating Orbs -->
    <div
      class="absolute top-20 left-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-pulse-slow"
    ></div>
    <div
      class="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"
    ></div>

    <!-- Content -->
    <div class="relative z-10 max-w-6xl mx-auto px-6 text-center">
      <!-- Badge -->
      <motion
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.5 }"
      >
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 backdrop-blur-sm mb-8 animate-fade-in"
        >
          <span class="relative flex h-2 w-2">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"
            ></span>
            <span
              class="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"
            ></span>
          </span>
          <span class="text-cyan-300 text-sm font-medium"
            >Open for freelace project</span
          >
        </div>
      </motion>

      <!-- Main Heading -->
      <motion
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 1, delay: 0.3 }"
      >
        <h1
          class="text-5xl md:text-7xl max-w-2xl font-bold mb-6 animate-fade-in-up"
        >
          <span
            class="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent neon-text"
          >
            Muhdani Boyrendi Erlan Azhari
          </span>
        </h1>
      </motion>

      <!-- Subheading -->
      <motion
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.5, delay: 0.6 }"
      >
        <p
          class="text-lg md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto animate-fade-in-up animation-delay-200"
        >
          <span class="text-cyan-400 font-semibold">Software Engineer</span>
        </p>
      </motion>

      <motion
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.5, delay: 1.2 }"
      >
        <p
          class="text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-400"
        >
          Full Stack Developer specializing in modern web technologies. Connect
          with me through my professional links and portfolio.
        </p>
      </motion>

      <!-- CTA Buttons -->
      <div
        class="flex flex-col sm:flex-row gap-y-12 gap-x-4 justify-center items-center animate-fade-in-up animation-delay-600"
      >
        <motion
          :initial="{ opacity: 0, x: -30 }"
          :animate="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.5, delay: 1.5 }"
        >
          <NuxtLink
            to="#projects"
            class="group relative px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
          >
            <span class="relative z-10">View My Projects</span>
            <div
              class="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
          </NuxtLink>
        </motion>

        <motion
          :initial="{ opacity: 0, x: 30 }"
          :animate="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.5, delay: 1.5 }"
        >
          <NuxtLink
            to="#contact"
            class="group px-8 py-4 border-2 border-cyan-400/50 rounded-lg font-semibold text-cyan-300 transition-all duration-300 hover:bg-cyan-400/10 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
          >
            Get In Touch
            <span
              class="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300"
              >→</span
            >
          </NuxtLink>
        </motion>
      </div>

      <!-- Social Links -->
      <motion
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.5, delay: 1.8 }"
      >
        <div
          class="flex gap-6 justify-center mt-16 animate-fade-in-up animation-delay-800"
        >
          <a
            href="https://www.instagram.com/erlan.azr_/"
            target="_blank"
            class="text-gray-400 hover:text-cyan-400 text-2xl transition-all duration-300 hover:scale-110 transform"
          >
            <i class="bi bi-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/muhdani-boyrendi/"
            target="_blank"
            class="text-gray-400 hover:text-cyan-400 text-2xl transition-all duration-300 hover:scale-110 transform"
          >
            <i class="bi bi-linkedin"></i>
          </a>
          <a
            href="https://github.com/muhdaniboyrendi"
            target="_blank"
            class="text-gray-400 hover:text-cyan-400 text-2xl transition-all duration-300 hover:scale-110 transform"
          >
            <i class="bi bi-github"></i>
          </a>
          <a
            href="mailto:erlanazrdev@gmail.com"
            class="text-gray-400 hover:text-cyan-400 text-2xl transition-all duration-300 hover:scale-110 transform"
          >
            <i class="bi bi-envelope"></i>
          </a>
          <a
            href="https://wa.me/+6282220633024"
            target="_blank"
            class="text-gray-400 hover:text-cyan-400 text-2xl transition-all duration-300 hover:scale-110 transform"
          >
            <i class="bi bi-whatsapp"></i>
          </a>
        </div>
      </motion>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
      <div
        class="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center pt-2"
      >
        <div class="w-1 h-2 bg-cyan-400 rounded-full animate-scroll"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid-pattern {
  background-image: linear-gradient(rgba(6, 182, 212, 0.5) 1px, transparent 1px),
    linear-gradient(90deg, rgba(6, 182, 212, 0.5) 1px, transparent 1px);
  background-size: 120px 120px;
  width: 100%;
  height: 100%;
  animation: grid-move 20s linear infinite;
}

.neon-text {
  text-shadow: 0 0 10px rgba(6, 182, 212, 0.5), 0 0 20px rgba(6, 182, 212, 0.3),
    0 0 30px rgba(6, 182, 212, 0.2);
}

@keyframes scroll {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(12px);
    opacity: 0;
  }
}

.animate-scroll {
  animation: scroll 1.5s ease-in-out infinite;
}

/* Decorative Animations */
@keyframes pulse-slow {
  0%,
  100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

@keyframes twinkle {
  0%,
  100% {
    opacity: 0.2;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.5);
  }
}

.animate-twinkle {
  animation: twinkle 3s ease-in-out infinite;
}
</style>
