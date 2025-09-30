<template>
  <section
    id="about"
    class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-bl from-gray-950 to-dark py-20 px-6"
  >
    <!-- Animated Grid Background -->
    <div class="absolute inset-0 opacity-10">
      <div class="grid-pattern"></div>
    </div>

    <!-- Floating Gradient Orbs -->
    <div
      class="absolute top-20 left-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-[120px] animate-blob"
    ></div>
    <div
      class="absolute bottom-20 right-10 w-72 h-72 bg-purple-400/20 rounded-full blur-[120px] animate-blob animation-delay-2000"
    ></div>

    <!-- Content Container -->
    <div class="relative z-10 max-w-7xl mx-auto w-full">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="space-y-6 animate-fade-in-left">
          <!-- Badge -->
          <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 backdrop-blur-sm"
          >
            <span class="text-cyan-300 text-sm font-medium">About Me</span>
          </div>

          <!-- Title -->
          <h2
            class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent neon-text"
          >
            Building Digital Experiences
          </h2>

          <!-- Description -->
          <p class="text-gray-300 text-lg leading-relaxed">
            Hi! I'm
            <span class="text-cyan-400 font-semibold">Muhdani Boyrendi</span>, a
            passionate Full Stack Developer with expertise in modern web
            technologies. I specialize in creating beautiful, functional, and
            user-centered digital experiences.
          </p>

          <p class="text-gray-400 leading-relaxed">
            With a strong foundation in both frontend and backend development, I
            bring ideas to life through clean code and innovative solutions. My
            goal is to build applications that not only look great but also
            deliver exceptional performance and user experience.
          </p>

          <!-- Stats -->
          <!-- <div class="grid grid-cols-3 gap-6 pt-4">
            <div
              class="text-center p-4 rounded-xl border border-cyan-400/20 bg-cyan-400/5 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300 hover:scale-105"
            >
              <div
                class="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
              >
                3+
              </div>
              <div class="text-gray-400 text-sm mt-1">Years Exp</div>
            </div>
            <div
              class="text-center p-4 rounded-xl border border-cyan-400/20 bg-cyan-400/5 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300 hover:scale-105"
            >
              <div
                class="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
              >
                50+
              </div>
              <div class="text-gray-400 text-sm mt-1">Projects</div>
            </div>
            <div
              class="text-center p-4 rounded-xl border border-cyan-400/20 bg-cyan-400/5 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300 hover:scale-105"
            >
              <div
                class="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
              >
                30+
              </div>
              <div class="text-gray-400 text-sm mt-1">Clients</div>
            </div>
          </div> -->

          <!-- Action Buttons -->
          <div class="flex flex-wrap gap-4 pt-4">
            <button
              class="group relative px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
            >
              <span class="relative z-10 flex items-center gap-2">
                Download CV
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </span>
              <div
                class="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
            </button>

            <button
              class="group px-6 py-3 border-2 border-cyan-400/50 rounded-lg font-semibold text-cyan-300 transition-all duration-300 hover:bg-cyan-400/10 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
            >
              View Projects
              <span
                class="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300"
                >→</span
              >
            </button>
          </div>
        </div>

        <!-- Right Content - Photo -->
        <div class="relative animate-fade-in-right flex justify-end">
          <div class="relative group w-full max-w-sm">
            <!-- Gradient Border Container -->
            <div
              class="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition duration-500 animate-pulse-slow"
            ></div>

            <!-- Image Container -->
            <div
              class="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-cyan-400/30"
            >
              <!-- Placeholder for Profile Photo -->
              <div
                class="aspect-square flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900"
              >
                <!-- Replace this with actual image -->
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop"
                  alt="Muhdani Boyrendi Erlan Azhari"
                  class="w-full h-full object-cover"
                />

                <!-- Overlay gradient -->
                <div
                  class="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script needed for this component
</script>

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

@keyframes fade-in-left {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-in-right {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in-left {
  animation: fade-in-left 0.8s ease-out;
}

.animate-fade-in-right {
  animation: fade-in-right 0.8s ease-out;
}

@keyframes pulse-slow {
  0%,
  100% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.75;
  }
}

.animate-pulse-slow {
  animation: pulse-slow 3s ease-in-out infinite;
}
</style>
