<script setup>
const frontendSkills = ref([
  {
    name: "Vue.js",
    image: "/brand/vue.png",
  },
  {
    name: "Nuxt",
    image: "/brand/nuxt.png",
  },
  // {
  //   name: "TypeScript",
  //   image: '/brand/vue.png',
  // },
  {
    name: "Tailwind CSS",
    image: "/brand/tailwind.png",
  },
  {
    name: "Bootstrap",
    image: "/brand/bootstrap.png",
  },
  {
    name: "HTML",
    image: "/brand/html.png",
  },
  {
    name: "CSS",
    image: "/brand/css.png",
  },
  {
    name: "JavaScript",
    image: "/brand/js.png",
  },
]);

const backendSkills = ref([
  {
    name: "Laravel",
    image: "/brand/laravel.png",
  },
  {
    name: "Supabase",
    image: "/brand/supabase.png",
  },
  {
    name: "PHP",
    image: "/brand/php.png",
  },
]);

const toolsSkills = ref([
  {
    name: "Git",
    image: "/brand/git.png",
  },
  {
    name: "Docker",
    image: "/brand/docker.png",
  },
  {
    name: "MySQL",
    image: "/brand/mysql.png",
  },
  {
    name: "SQLite",
    image: "/brand/sqlite.png",
  },
  {
    name: "Postman",
    image: "/brand/postman.png",
  },
  {
    name: "VS Code",
    image: "/brand/vscode.png",
  },
  {
    name: "Figma",
    image: "/brand/figma.png",
  },
  {
    name: "Canva",
    image: "/brand/canva.png",
  },
]);
</script>

<template>
  <section
    id="skills"
    class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark to-gray-950 py-20 px-4 md:px-6"
  >
    <!-- Animated Grid Background -->
    <div class="absolute inset-0 opacity-10">
      <div class="grid-pattern"></div>
    </div>

    <!-- Content Container -->
    <div class="relative z-10 max-w-7xl mx-auto w-full">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-fade-in-up">
        <!-- Badge -->
        <motion
          :initial="{ opacity: 0, y: 20 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.3 }"
        >
          <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 backdrop-blur-sm mb-6"
          >
            <span class="text-cyan-300 text-sm font-medium">Tech Stack</span>
          </div>
        </motion>

        <!-- Title -->
        <motion
          :initial="{ opacity: 0, y: 20 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.3 }"
        >
          <h2
            class="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent neon-text"
          >
            Skills & Technologies
          </h2>
        </motion>

        <!-- Description -->
        <motion
          :initial="{ opacity: 0, y: 20 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.3 }"
        >
          <p class="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies I use to build
            exceptional digital experiences
          </p>
        </motion>
      </div>

      <!-- Skills Categories -->
      <div class="space-y-12">
        <!-- Frontend Development -->
        <div>
          <motion
            :initial="{ opacity: 0, x: -20 }"
            :whileInView="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.5, delay: 0.3 }"
          >
            <div class="flex items-center gap-3 mb-6 group">
              <div
                class="h-12 aspect-square flex justify-center items-center rounded-xl bg-gradient-to-r from-cyan-400/10 to-purple-400/10 border border-cyan-400/30 group-hover:border-cyan-400/50 transition-all duration-300"
              >
                <i class="bi bi-code-slash text-2xl text-cyan-400"></i>
              </div>
              <h3
                class="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
              >
                Frontend
              </h3>
            </div>
          </motion>

          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <LazyHomeSkillsFrontEndSkillCard
              v-for="skill in frontendSkills"
              :key="skill.name"
              :skill="skill"
            />
          </div>
        </div>

        <!-- Backend Development -->
        <div>
          <motion
            :initial="{ opacity: 0, x: -20 }"
            :whileInView="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.5, delay: 0.3 }"
          >
            <div class="flex items-center gap-3 mb-6 group">
              <div
                class="h-12 aspect-square flex justify-center items-center rounded-xl bg-gradient-to-r from-purple-400/10 to-pink-400/10 border border-purple-400/30 group-hover:border-purple-400/50 transition-all duration-300"
              >
                <i class="bi bi-hdd-stack text-2xl text-purple-400"></i>
              </div>
              <h3
                class="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              >
                Backend
              </h3>
            </div>
          </motion>

          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <LazyHomeSkillsBackEndSkillCard
              v-for="skill in backendSkills"
              :key="skill.name"
              :skill="skill"
            />
          </div>
        </div>

        <!-- Tools & Others -->
        <div>
          <motion
            :initial="{ opacity: 0, x: -20 }"
            :whileInView="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.5, delay: 0.3 }"
          >
            <div class="flex items-center gap-3 mb-6 group">
              <div
                class="h-12 aspect-square flex justify-center items-center rounded-xl bg-gradient-to-r from-pink-400/10 to-cyan-400/10 border border-pink-400/30 group-hover:border-pink-400/50 transition-all duration-300"
              >
                <i class="bi bi-tools text-2xl text-pink-400"></i>
              </div>
              <h3
                class="text-2xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent"
              >
                Tools & Others
              </h3>
            </div>
          </motion>

          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <LazyHomeSkillsToolsCard
              v-for="skill in toolsSkills"
              :key="skill.name"
              :skill="skill"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid-pattern {
  background-image:
    linear-gradient(rgba(6, 182, 212, 0.5) 1px, transparent 1px),
    linear-gradient(90deg, rgba(6, 182, 212, 0.5) 1px, transparent 1px);
  background-size: 120px 120px;
  width: 100%;
  height: 100%;
  animation: grid-move 20s linear infinite;
}

.neon-text {
  text-shadow:
    0 0 10px rgba(6, 182, 212, 0.5),
    0 0 20px rgba(6, 182, 212, 0.3),
    0 0 30px rgba(6, 182, 212, 0.2);
}
</style>
