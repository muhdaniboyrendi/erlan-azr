<template>
  <section
    id="about"
    class="relative min-h-screen flex items-center justify-center py-20 px-4 md:px-6"
  >
    <!-- Content Container -->
    <div class="relative z-10 max-w-7xl mx-auto w-full">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="space-y-6 animate-fade-in-left">
          <!-- Badge -->
          <div
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :visibleOnce="{ opacity: 1, x: 0 }"
            :duration="1000"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 backdrop-blur-sm"
          >
            <span class="text-cyan-300 text-sm font-medium">About Me</span>
          </div>

          <!-- Title -->
          <h2
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :visibleOnce="{ opacity: 1, x: 0 }"
            :duration="1000"
            class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent neon-text"
          >
            Building Digital Experiences
          </h2>

          <!-- Description -->
          <p
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :visibleOnce="{ opacity: 1, x: 0 }"
            :duration="1000"
            class="text-gray-300 text-lg leading-relaxed"
          >
            Hi! I'm
            <span class="text-cyan-400 font-semibold"
              >Muhdani Boyrendi Erlan Azhari</span
            >
            usually called
            <span class="text-cyan-400 font-semibold">Erlan</span>, a passionate
            Full Stack Developer with expertise in modern web technologies. I
            specialize in creating beautiful, functional, and user-centered
            digital experiences.
          </p>

          <p
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :visibleOnce="{ opacity: 1, x: 0 }"
            :duration="1000"
            class="text-gray-400 leading-relaxed"
          >
            With a strong foundation in both frontend and backend development, I
            bring ideas to life through clean code and innovative solutions. My
            goal is to build applications that not only look great but also
            deliver exceptional performance, user experience, and solve
            real-world problems.
          </p>
        </div>

        <!-- Right Content - Photo -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :visibleOnce="{ opacity: 1, x: 0 }"
          :duration="1000"
          class="relative animate-fade-in-right flex justify-end"
        >
          <div class="relative group w-full max-w-sm mx-auto md:mx-0">
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
                  width="400"
                  height="400"
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
