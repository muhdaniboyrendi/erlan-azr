<template>
  <section
    class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950 py-34"
  >
    <!-- Animated Grid Background -->
    <div class="absolute inset-0 opacity-20">
      <div class="grid-pattern"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-6xl mx-auto px-6 text-center">
      <!-- Badge -->
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

      <!-- Main Heading -->
      <h1
        class="text-5xl md:text-7xl max-w-2xl font-bold mb-6 animate-fade-in-up"
      >
        <span
          class="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text"
        >
          Muhdani Boyrendi Erlan Azhari
        </span>
      </h1>

      <!-- Subheading -->
      <p
        class="text-lg md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto animate-fade-in-up animation-delay-200"
      >
        <span class="text-cyan-400 font-semibold">Software Engineer</span> |
        <span class="text-purple-400 font-semibold">Tech Enthusiast</span>
      </p>

      <p
        class="text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-400"
      >
        Full Stack Developer specializing in modern web technologies. Connect
        with me through my professional links and portfolio.
      </p>

      <!-- CTA Buttons -->
      <div
        class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600"
      >
        <button
          class="group relative px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
        >
          <span class="relative z-10">View My Work</span>
          <div
            class="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
        </button>

        <button
          class="group px-8 py-4 border-2 border-cyan-400/50 rounded-lg font-semibold text-cyan-300 transition-all duration-300 hover:bg-cyan-400/10 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
        >
          Get In Touch
          <span
            class="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300"
            >→</span
          >
        </button>
      </div>

      <!-- Social Links -->
      <div
        class="flex gap-6 justify-center mt-16 animate-fade-in-up animation-delay-800"
      >
        <a
          href="#"
          class="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:scale-110 transform"
        >
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            />
          </svg>
        </a>
        <a
          href="#"
          class="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:scale-110 transform"
        >
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            />
          </svg>
        </a>
        <a
          href="#"
          class="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:scale-110 transform"
        >
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
            />
          </svg>
        </a>
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
    transform: translate(50px, 50px);
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

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out;
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

.animation-delay-800 {
  animation-delay: 0.8s;
  opacity: 0;
  animation-fill-mode: forwards;
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

/* Dark mode support (default) */
@media (prefers-color-scheme: light) {
  section {
    background-color: #0f172a;
  }
}
</style>
