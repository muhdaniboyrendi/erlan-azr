<script setup>
const featuredOrg = ref({
  name: "IT Team KraTim 1",
  logo: "🚀",
  role: "Web Developer & Core Team",
  description:
    "IT Team Karanganyar Timur 1 is a community-driven organization focused on empowering developers through collaboration and knowledge sharing.",
  members: "5k+",
  projects: "50+",
  events: "100+",
  gradientClass: "from-blue-500 to-cyan-500",
  image: "/img/it-team.jpg",
  websiteUrl: "https://links.erlanazhari.my.id",
  achievements: [
    // "Organized 100+ tech events and workshops",
    // "Mentored 500+ developers in their career journey",
    // "Led 10 major hackathons with $50k+ prizes",
    // "Built active community of 5,000+ members",
  ],
  socials: [
    {
      name: "Instagram",
      url: "https://instagram.com/ppgkratim1",
      icon: "bi-instagram",
    },
    {
      name: "YouTube",
      url: "#",
      icon: "bi-youtube",
    },
  ],
});
</script>

<template>
  <section
    id="organizations"
    class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-bl from-gray-950 to-dark py-20 px-6"
  >
    <!-- Animated Grid Background -->
    <div class="absolute inset-0 opacity-10">
      <div class="grid-pattern"></div>
    </div>

    <!-- Floating Gradient Orbs -->
    <div
      class="absolute top-20 right-20 w-96 h-96 bg-cyan-400/10 rounded-full blur-[120px] animate-blob"
    ></div>
    <div
      class="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/10 rounded-full blur-[120px] animate-blob animation-delay-2000"
    ></div>

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
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 backdrop-blur-sm mb-6"
          >
            <span class="text-cyan-300 text-sm font-medium"
              >Community & Networks</span
            >
          </div>
        </motion>

        <!-- Title -->
        <motion
          :initial="{ opacity: 0, y: 20 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.3 }"
        >
          <h2
            class="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text"
          >
            Organizations
          </h2>
        </motion>

        <!-- Description -->
        <motion
          :initial="{ opacity: 0, y: 20 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.3 }"
        >
          <p class="text-gray-400 text-lg max-w-2xl mx-auto">
            Proud member and contributor to various organizations driving
            innovation, knowledge sharing, and community growth in tech
          </p>
        </motion>
      </div>

      <!-- Featured Organization Highlight -->
      <motion
        :initial="{ opacity: 0, y: 20 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.5, delay: 0.3 }"
      >
        <div class="mb-16">
          <div class="relative group">
            <!-- Gradient Border -->
            <div
              class="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"
            ></div>

            <!-- Content Container -->
            <div
              class="relative bg-dark/60 rounded-3xl overflow-hidden border border-cyan-400/30"
            >
              <div class="grid md:grid-cols-2 gap-0">
                <!-- Left: Content -->
                <div class="p-8 md:p-12 flex flex-col justify-center">
                  <!-- Logo & Name -->
                  <div class="flex items-center gap-4 mb-6">
                    <div
                      class="w-20 h-20 rounded-2xl bg-white shadow-xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300"
                    >
                      {{ featuredOrg.logo }}
                    </div>
                    <div>
                      <h3
                        class="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300"
                      >
                        {{ featuredOrg.name }}
                      </h3>
                      <div class="flex items-center gap-2">
                        <span class="text-cyan-400 font-semibold text-lg">{{
                          featuredOrg.role
                        }}</span>
                      </div>
                    </div>
                  </div>

                  <!-- Description -->
                  <p class="text-gray-300 text-lg mb-6 leading-relaxed">
                    {{ featuredOrg.description }}
                  </p>

                  <!-- Social Media Links -->
                  <div class="mb-6">
                    <h4 class="text-sm font-semibold text-gray-400 mb-3">
                      Follow Us
                    </h4>
                    <div class="flex flex-wrap gap-3">
                      <a
                        v-for="(social, index) in featuredOrg.socials"
                        :key="index"
                        :href="social.url"
                        target="_blank"
                        class="group/social h-10 flex justify-center items-center aspect-square rounded-xl bg-gray-900/50 border border-gray-700/50 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-300 hover:scale-110"
                        :title="social.name"
                      >
                        <i
                          class="bi text-gray-400 group-hover/social:text-cyan-400 transition-colors duration-300"
                          :class="social.icon"
                        ></i>
                      </a>
                    </div>
                  </div>

                  <!-- CTA Buttons -->
                  <div class="flex flex-wrap gap-3">
                    <a
                      :href="featuredOrg.websiteUrl"
                      target="_blank"
                      class="group/btn relative px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] active:scale-95"
                    >
                      <span class="relative z-10 flex items-center gap-2">
                        Visit Website
                        <i
                          class="bi bi-box-arrow-up-right group-hover/btn:translate-x-1 transition-transform duration-300"
                        ></i>
                      </span>
                      <div
                        class="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                      ></div>
                    </a>

                    <!-- <a
                      :href="featuredOrg.joinUrl"
                      target="_blank"
                      class="px-6 py-3 border-2 border-cyan-400/50 rounded-lg font-semibold text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300"
                    >
                      Join Community
                    </a> -->
                  </div>
                </div>

                <!-- Right: Image/Visual -->
                <div class="relative aspect-[4/3] h-96 md:h-auto overflow-hidden">
                  <NuxtImg
                    :src="featuredOrg.image"
                    alt="Featured Organization"
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    width="400"
                    height="300"
                  />
                  <div
                    class="absolute inset-0 bg-gradient-to-l from-gray-900/80 to-gray-900/30"
                  ></div>

                </div>
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
</style>
