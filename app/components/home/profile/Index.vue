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
          <motion
            :initial="{ opacity: 0, x: -20 }"
            :whileInView="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.5, delay: 0.3 }"
          >
            <div
              class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 backdrop-blur-sm"
            >
              <span class="text-cyan-300 text-sm font-medium">About Me</span>
            </div>
          </motion>

          <!-- Title -->
          <motion
            :initial="{ opacity: 0, x: -20 }"
            :whileInView="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.5, delay: 0.3 }"
          >
            <h2
              class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent neon-text"
            >
              Building Digital Experiences
            </h2>
          </motion>

          <!-- Description -->
          <motion
            :initial="{ opacity: 0, x: -20 }"
            :whileInView="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.5, delay: 0.3 }"
          >
            <p class="text-gray-300 text-lg leading-relaxed">
              Hi! I'm
              <span class="text-cyan-400 font-semibold"
                >Muhdani Boyrendi Erlan Azhari</span
              >
              usually called
              <span class="text-cyan-400 font-semibold">Erlan</span>, a
              passionate Full Stack Developer with expertise in modern web
              technologies. I specialize in creating beautiful, functional, and
              user-centered digital experiences.
            </p>
          </motion>

          <motion
            :initial="{ opacity: 0, x: -20 }"
            :whileInView="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.5, delay: 0.3 }"
          >
            <p class="text-gray-400 leading-relaxed">
              With a strong foundation in both frontend and backend development,
              I bring ideas to life through clean code and innovative solutions.
              My goal is to build applications that not only look great but also
              deliver exceptional performance, user experience, and solve
              real-world problems.
            </p>
          </motion>

          <!-- Action Buttons -->
          <div class="flex flex-wrap gap-4 pt-4">
            <motion
              :initial="{ opacity: 0, x: -20 }"
              :whileInView="{ opacity: 1, x: 0 }"
              :transition="{ duration: 0.5, delay: 0.3 }"
            >
              <button
                class="group relative px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
              >
                <span class="relative z-10 flex items-center gap-2">
                  Download CV
                  <i class="bi bi-download"></i>
                </span>
                <div
                  class="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </button>
            </motion>
          </div>
        </div>

        <!-- Right Content - Photo -->
        <motion
          :initial="{ opacity: 0, x: 20 }"
          :whileInView="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.5, delay: 0.3 }"
        >
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
                  <NuxtImg
                    src="/favicon.png"
                    width="600"
                    height="800"
                    alt="Muhdani Boyrendi Erlan Azhari"
                    class="w-full h-full object-cover object-center"
                  />

                  <!-- Overlay gradient -->
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </motion>
      </div>
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
</style>
