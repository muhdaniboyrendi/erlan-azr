<template>
  <section
    id="business"
    class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark to-gray-950 py-20 px-4 md:px-6"
  >
    <!-- Animated Grid Background -->
    <div class="absolute inset-0 opacity-10">
      <div class="grid-pattern"></div>
    </div>

    <!-- Content Container -->
    <div class="relative z-10 max-w-7xl mx-auto w-full">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <!-- Badge -->
        <motion
          :initial="{ opacity: 0, y: 20 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.3 }"
        >
          <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-400/30 bg-purple-400/10 backdrop-blur-sm mb-6"
          >
            <span class="text-purple-300 text-sm font-medium">My Ventures</span>
          </div>
        </motion>

        <!-- Title -->
        <motion
          :initial="{ opacity: 0, y: 20 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.3 }"
        >
          <h2
            class="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent neon-text"
          >
            Business Portfolio
          </h2>
        </motion>

        <!-- Description -->
        <motion
          :initial="{ opacity: 0, y: 20 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.3 }"
        >
          <p class="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore the businesses and ventures I've built, combining technology
            and innovation to create value
          </p>
        </motion>
      </div>

      <!-- Main Featured Business -->
      <motion
        :initial="{ opacity: 0, y: 20 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.5, delay: 0.3 }"
      >
        <div class="mb-16">
          <div class="relative group">
            <!-- Gradient Border -->
            <div
              class="absolute -inset-1 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"
            ></div>

            <!-- Content Container -->
            <div
              class="relative bg-dark/60 rounded-3xl overflow-hidden border border-purple-400/30"
            >
              <div class="grid md:grid-cols-2 gap-0">
                <!-- Left: Image -->
                <div
                  class="relative aspect-[4/3] h-96 md:h-auto overflow-hidden"
                >
                  <NuxtImg
                    src="/projects/ea-invitation.png"
                    alt="Featured Business"
                    width="400"
                    height="300"
                    loading="lazy"
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    class="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent"
                  ></div>

                  <!-- Badge -->
                  <div
                    class="absolute top-6 left-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-400/20 backdrop-blur-xl border border-purple-400/50"
                  >
                    <span class="text-white text-sm font-semibold">SaaS</span>
                  </div>
                </div>

                <!-- Right: Content -->
                <div class="p-6 md:p-8 flex flex-col justify-center">
                  <!-- Category -->
                  <div class="flex items-center gap-2 mb-4">
                    <span
                      class="px-3 py-1 text-xs font-semibold rounded-full bg-purple-400/20 border border-purple-400/30 text-purple-100"
                    >
                      Beta
                    </span>
                  </div>

                  <!-- Title -->
                  <h3
                    class="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300"
                  >
                    EA Invitation
                  </h3>

                  <!-- Description -->
                  <p class="text-gray-300 text-lg mb-6 leading-relaxed">
                    A SaaS platform to create and manage modern and interactive
                    digital wedding invitation in a minutes.
                  </p>

                  <!-- CTA Buttons -->
                  <div class="flex flex-wrap gap-3">
                    <a
                      href="https://eainvitation.com"
                      target="_blank"
                      class="group/btn relative px-6 py-3 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] active:scale-95"
                    >
                      <span class="relative z-10 flex items-center gap-2">
                        Visit Website
                        <i
                          class="bi bi-box-arrow-up-right group-hover/btn:translate-x-1 transition-transform duration-300"
                        ></i>
                      </span>
                      <div
                        class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-pink-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                      ></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion>

      <!-- Call to Action -->
      <motion
        :initial="{ opacity: 0, y: 20 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.5, delay: 0.3 }"
      >
        <div class="text-center mt-16">
          <div
            class="relative inline-block rounded-2xl bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 overflow-hidden"
          >
            <div
              class="w-full h-full p-6 md:p-8 inline-block bg-dark/90 rounded-2xl border border-purple-400/30"
            >
              <h3
                class="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
              >
                Interested in Collaboration?
              </h3>
              <p class="text-gray-400 mb-6 max-w-xl mx-auto">
                I'm always open to discussing new business opportunities,
                partnerships, or investment possibilities
              </p>
              <div class="flex flex-wrap justify-center gap-4">
                <NuxtLink
                  to="#contact"
                  class="group relative px-8 py-4 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] active:scale-95"
                >
                  <span class="relative z-10">Get in Touch</span>
                  <div
                    class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  ></div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </motion>
    </div>
  </section>
</template>

<style scoped>
.grid-pattern {
  background-image:
    linear-gradient(rgba(168, 85, 247, 0.5) 1px, transparent 1px),
    linear-gradient(90deg, rgba(168, 85, 247, 0.5) 1px, transparent 1px);
  background-size: 120px 120px;
  width: 100%;
  height: 100%;
  animation: grid-move 20s linear infinite;
}

.neon-text {
  text-shadow:
    0 0 10px rgba(168, 85, 247, 0.5),
    0 0 20px rgba(168, 85, 247, 0.3),
    0 0 30px rgba(168, 85, 247, 0.2);
}
</style>
