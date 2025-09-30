<template>
  <section
    class="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-dark to-gray-950 py-34"
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
          class="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent neon-text"
        >
          Muhdani Boyrendi Erlan Azhari
        </span>
      </h1>

      <!-- Subheading -->
      <p
        class="text-lg md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto animate-fade-in-up animation-delay-200"
      >
        <span class="text-cyan-400 font-semibold">Software Engineer</span>
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
          class="text-gray-400 hover:text-cyan-400 text-2xl transition-all duration-300 hover:scale-110 transform"
        >
          <i class="bi bi-instagram"></i>
        </a>
        <a
          href="#"
          class="text-gray-400 hover:text-cyan-400 text-2xl transition-all duration-300 hover:scale-110 transform"
        >
          <i class="bi bi-linkedin"></i>
        </a>
        <a
          href="#"
          class="text-gray-400 hover:text-cyan-400 text-2xl transition-all duration-300 hover:scale-110 transform"
        >
          <i class="bi bi-github"></i>
        </a>
        <a
          href="#"
          class="text-gray-400 hover:text-cyan-400 text-2xl transition-all duration-300 hover:scale-110 transform"
        >
          <i class="bi bi-envelope"></i>
        </a>
        <a
          href="#"
          class="text-gray-400 hover:text-cyan-400 text-2xl transition-all duration-300 hover:scale-110 transform"
        >
          <i class="bi bi-whatsapp"></i>
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
</style>
