<script setup>
const projects = ref([
  {
    title: "Photobooth KraTim 1",
    description:
      "A website to make a photo strip at Bazar and Futsal event in Karanganyar Timur 1.",
    image: "/projects/b&f-photobooth.png",
    tags: ["Web App"],
    techStack: ["Nuxt", "Tailwind CSS"],
    liveUrl: "https://karanganyar-timur-1-photobooth.vercel.app/",
    githubUrl:
      "https://github.com/muhdaniboyrendi/karanganyar-timur-1-photobooth",
    year: "2025",
  },
  {
    title: "EA Invitation",
    description:
      "A SaaS application for creating and managing digital wedding invitations.",
    image: "/projects/ea-invitation.png",
    tags: ["Web App"],
    techStack: ["Nuxt", "Tailwind CSS", "Laravel", "MySQL"],
    liveUrl: "https://ea-invitation-landing.vercel.app/",
    githubUrl: "https://github.com/muhdaniboyrendi/ea-invitation-landing",
    year: "2025",
  },
  {
    title: "Note App",
    description: "A website that I created for practice React.js.",
    image: "/projects/note-app.png",
    tags: ["Web App"],
    techStack: ["React.js", "Bootstrap"],
    liveUrl: "https://personal-notes-tawny-five.vercel.app/",
    githubUrl: "https://github.com/muhdaniboyrendi/personal-notes",
    year: "2024",
  },
]);
</script>

<template>
  <section
    id="projects"
    class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-bl from-gray-950 to-dark py-20 px-4 md:px-6"
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
            <span class="text-purple-300 text-sm font-medium">Portfolio</span>
          </div>
        </motion>

        <!-- Title -->
        <motion
          :initial="{ opacity: 0, y: 20 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.3 }"
        >
          <h2
            class="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent neon-text"
          >
            Featured Projects
          </h2>
        </motion>

        <!-- Description -->
        <motion
          :initial="{ opacity: 0, y: 20 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.3 }"
        >
          <p class="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing my recent work and personal projects that demonstrate my
            expertise in modern web development
          </p>
        </motion>
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <motion
          v-for="(project, index) in projects"
          :key="index"
          :initial="{ opacity: 0, y: 20 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.3 }"
        >
          <div
            class="group relative rounded-2xl overflow-hidden bg-dark border border-purple-400/20 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]"
          >
            <!-- Project Image -->
            <div
              class="relative aspect-video overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900"
            >
              <NuxtImg
                :src="project.image"
                :alt="project.title"
                width="320"
                height="180"
                loading="lazy"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <!-- Overlay -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"
              ></div>

              <!-- Project Tags -->
              <div class="absolute top-4 left-4 flex flex-wrap gap-2">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="px-3 py-1 text-xs font-semibold rounded-full bg-purple-400/20 backdrop-blur-sm border border-purple-400/30 text-purple-100"
                >
                  {{ tag }}
                </span>
              </div>
            </div>

            <!-- Project Content -->
            <div class="p-4 md:p-6">
              <!-- Title -->
              <h3
                class="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300"
              >
                {{ project.title }}
              </h3>

              <!-- Description -->
              <p class="text-gray-400 text-sm mb-4 line-clamp-2">
                {{ project.description }}
              </p>

              <!-- Tech Stack Icons -->
              <div class="flex flex-wrap gap-2 mb-4">
                <div
                  v-for="tech in project.techStack"
                  :key="tech"
                  class="px-2 py-1 text-xs rounded bg-gray-700/50 text-gray-300 border border-gray-600/50"
                >
                  {{ tech }}
                </div>
              </div>

              <!-- Project Stats -->
              <div
                class="flex items-center justify-between pt-4 border-t border-gray-700/50"
              >
                <div class="flex items-center gap-4 text-xs text-gray-400">
                  <a
                    :href="project.liveUrl"
                    target="_blank"
                    aria-label="Live demo"
                    class="group h-10 aspect-square flex justify-center items-center border-2 border-purple-400/50 rounded-lg font-semibold text-purple-300 transition-all duration-300 hover:bg-purple-400/10 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                  >
                    <i class="bi bi-box-arrow-up-right text-base"></i>
                  </a>
                  <a
                    :href="project.githubUrl"
                    target="_blank"
                    aria-label="View source code"
                    class="group h-10 aspect-square flex justify-center items-center border-2 border-purple-400/50 rounded-lg font-semibold text-purple-300 transition-all duration-300 hover:bg-purple-400/10 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                  >
                    <i class="bi bi-github text-base"></i>
                  </a>
                </div>
                <span class="text-xs text-gray-500">{{ project.year }}</span>
              </div>
            </div>
          </div>
        </motion>
      </div>

      <!-- View All Button -->
      <div class="text-center mt-12 animate-fade-in-up animation-delay-600">
        <motion
          :initial="{ opacity: 0, x: -20 }"
          :whileInView="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.5, delay: 0.3 }"
        >
          <NuxtLink to="/projects">
            <button
              class="group relative px-8 py-4 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] active:scale-95"
            >
              <span class="relative z-10 flex items-center gap-2">
                View All Projects
                <i
                  class="bi bi-arrow-right group-hover:translate-x-1 transition-transform duration-300"
                ></i>
              </span>
              <div
                class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
            </button>
          </NuxtLink>
        </motion>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid-pattern {
  background-image:
    linear-gradient(rgba(168, 85, 247, 0.5) 1px, transparent 1px),
    linear-gradient(90deg, rgba(168, 85, 247, 0.5) 1px, transparent 1px);
  background-size: 60px 60px;
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
