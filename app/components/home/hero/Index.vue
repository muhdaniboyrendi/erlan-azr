<script setup>
const titles = [
  "Software Engineer",
  "Web Developer",
  "Tech Enthusiast",
  "Photography Enthusiast",
];

const currentTitle = ref(titles[0]);
let currentIndex = 0;
let intervalId = null;

onMounted(() => {
  intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % titles.length;
    currentTitle.value = titles[currentIndex];
  }, 3000);
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>

<template>
  <section id="home" class="flex items-center justify-center pt-40 pb-12">
    <!-- Content -->
    <div class="z-10 max-w-6xl mx-auto px-6 text-center">
      <!-- Badge -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0 }"
        :duration="1000"
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

      <!-- Main Heading -->
      <h1
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0 }"
        :delay="300"
        :duration="1000"
        class="text-5xl md:text-7xl max-w-2xl font-bold mb-6"
      >
        <span
          class="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent neon-text"
        >
          Muhdani Boyrendi Erlan Azhari
        </span>
      </h1>

      <!-- Subheading with Rotating Text -->
      <p
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0 }"
        :delay="600"
        :duration="1000"
        class="text-lg md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto"
      >
        <span class="text-cyan-400 font-semibold">
          <Transition name="fade" mode="out-in">
            <span :key="currentTitle">{{ currentTitle }}</span>
          </Transition>
        </span>
      </p>

      <p
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0 }"
        :delay="900"
        :duration="1000"
        class="text-gray-400 mb-12 max-w-2xl mx-auto"
      >
        Full Stack Developer specializing in modern web technologies. Connect
        with me through my professional links and portfolio.
      </p>

      <!-- CTA Buttons -->
      <div
        class="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animation-delay-600"
      >
        <div
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="1200"
          :duration="1000"
        >
          <NuxtLink
            to="#projects"
            class="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-purple-500 hover:to-pink-500 rounded-lg font-semibold text-white text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] active:scale-95 cursor-pointer"
          >
            <span>View My Projects</span>
          </NuxtLink>
        </div>

        <div
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="1500"
          :duration="1000"
        >
          <NuxtLink
            to="#contact"
            class="group flex items-center px-8 py-4 border-2 border-cyan-400/50 rounded-lg font-semibold text-cyan-300 transition-all duration-300 hover:bg-cyan-400/10 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:scale-105 active:scale-95"
          >
            Get In Touch
            <span
              class="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300"
              >→</span
            >
          </NuxtLink>
        </div>
      </div>
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
.neon-text {
  text-shadow:
    0 0 10px rgba(6, 182, 212, 0.5),
    0 0 20px rgba(6, 182, 212, 0.3),
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

/* Fade Transition for Rotating Text */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
