<!-- components/welcome.vue -->
<script setup>
const emit = defineEmits(["open"]);
</script>

<template>
  <section
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark to-gray-950"
  >
    <!-- Grid Background -->
    <div class="absolute inset-0 opacity-20">
      <div class="grid-pattern"></div>
    </div>

    <!-- Content -->
    <div class="max-w-4xl mx-auto px-6 py-16 text-center">
      <!-- Logo/Icon -->
      <motion
        :initial="{ opacity: 0, scale: 0 }"
        :animate="{ opacity: 1, scale: 1 }"
        :transition="{ duration: 1 }"
      >
        <div class="mb-8">
          <div
            class="inline-flex items-center justify-center h-30 aspect-square rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 p-1 shadow-[0_0_40px_rgba(6,182,212,0.4)]"
          >
            <div
              class="w-full h-full rounded-full bg-gray-900 flex items-center justify-center"
            >
              <NuxtImg
                src="favicon.png"
                width="200"
                height="200"
                alt="Erlan Azhari logo"
              />
            </div>
          </div>
        </div>
      </motion>

      <!-- Welcome Text -->
      <div>
        <motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 1, delay: 0.5 }"
        >
          <h1 class="text-5xl md:text-7xl max-w-3xl font-bold mb-6">
            <span
              class="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent neon-text"
            >
              Muhdani Boyrendi Erlan Azhari
            </span>
          </h1>
        </motion>
        <motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 1, delay: 1 }"
        >
          <p class="text-lg md:text-xl text-cyan-400 font-medium mb-8">
            Software Engineer
          </p>
        </motion>
      </div>

      <!-- Enter Button -->
      <motion
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 1, delay: 1.5 }"
        class="w-fit mx-auto"
      >
        <button
          @click="emit('open')"
          type="button"
          class="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-purple-500 hover:to-pink-500 rounded-lg font-semibold text-white text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] active:scale-95 cursor-pointer"
        >
          <span class="relative z-10">Start Explore</span>
          <i
            class="bi bi-arrow-right z-10 transform group-hover:translate-x-1 transition-transform"
          ></i>
        </button>
      </motion>
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
</style>
