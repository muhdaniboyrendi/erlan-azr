<template>
  <section
    id="projects"
    class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-bl from-gray-950 to-dark py-20 px-6"
  >
    <!-- Animated Grid Background -->
    <div class="absolute inset-0 opacity-10">
      <div class="grid-pattern"></div>
    </div>

    <!-- Floating Gradient Orbs -->
    <div
      class="absolute top-20 left-10 w-96 h-96 bg-purple-400/10 rounded-full blur-[120px] animate-blob"
    ></div>
    <div
      class="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-[120px] animate-blob animation-delay-2000"
    ></div>

    <!-- Content Container -->
    <div class="relative z-10 max-w-7xl mx-auto w-full">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-fade-in-up">
        <!-- Badge -->
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-400/30 bg-purple-400/10 backdrop-blur-sm mb-6"
        >
          <span class="text-purple-300 text-sm font-medium">Portfolio</span>
        </div>

        <!-- Title -->
        <h2
          class="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent neon-text"
        >
          Featured Projects
        </h2>

        <!-- Description -->
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          Showcasing my recent work and personal projects that demonstrate my
          expertise in modern web development
        </p>
      </div>

      <!-- Projects Grid -->
      <div
        class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up animation-delay-400"
      >
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="group relative rounded-2xl overflow-hidden bg-gray-800/30 backdrop-blur-sm border border-purple-400/20 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]"
        >
          <!-- Project Image -->
          <div
            class="relative h-56 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900"
          >
            <img
              :src="project.image"
              :alt="project.title"
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
                class="px-3 py-1 text-xs font-semibold rounded-full bg-purple-400/20 backdrop-blur-sm border border-purple-400/30 text-purple-300"
              >
                {{ tag }}
              </span>
            </div>

            <!-- Quick Actions -->
            <div
              class="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
            >
              <a
                :href="project.liveUrl"
                target="_blank"
                class="p-2 rounded-lg bg-cyan-400/20 backdrop-blur-sm border border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/30 transition-all duration-300"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
              <a
                :href="project.githubUrl"
                target="_blank"
                class="p-2 rounded-lg bg-purple-400/20 backdrop-blur-sm border border-purple-400/30 text-purple-300 hover:bg-purple-400/30 transition-all duration-300"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <!-- Project Content -->
          <div class="p-6">
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
                <div class="flex items-center gap-1">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <span>{{ project.stars }}</span>
                </div>
                <div class="flex items-center gap-1">
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
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  <span>{{ project.views }}</span>
                </div>
              </div>
              <span class="text-xs text-gray-500">{{ project.year }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- View All Button -->
      <div class="text-center mt-12 animate-fade-in-up animation-delay-600">
        <button
          class="group relative px-8 py-4 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"
        >
          <span class="relative z-10 flex items-center gap-2">
            View All Projects
            <svg
              class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
          <div
            class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = ref([
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with advanced features including real-time inventory management, payment integration, and admin dashboard.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
    tags: ["Featured", "Web App"],
    techStack: ["Vue.js", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    stars: 234,
    views: "12.5k",
    year: "2024",
    category: "Web App",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates, team collaboration features, and productivity analytics.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    tags: ["Web App"],
    techStack: ["React", "Firebase", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
    stars: 156,
    views: "8.2k",
    year: "2024",
    category: "Web App",
  },
  {
    title: "Fitness Tracking Mobile App",
    description:
      "Cross-platform mobile app for tracking workouts, nutrition, and fitness goals with personalized recommendations.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
    tags: ["Mobile"],
    techStack: ["React Native", "Node.js", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    stars: 189,
    views: "15.3k",
    year: "2024",
    category: "Mobile",
  },
  {
    title: "Portfolio Website Builder",
    description:
      "No-code portfolio builder with drag-and-drop interface, customizable themes, and one-click deployment.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    tags: ["Web App", "UI/UX"],
    techStack: ["Nuxt.js", "TailwindCSS", "Supabase"],
    liveUrl: "#",
    githubUrl: "#",
    stars: 312,
    views: "22.1k",
    year: "2023",
    category: "Web App",
  },
  {
    title: "Weather Forecast API",
    description:
      "RESTful API providing accurate weather forecasts with historical data analysis and climate predictions.",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    tags: ["API"],
    techStack: ["Node.js", "Express", "Redis", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
    stars: 267,
    views: "18.7k",
    year: "2023",
    category: "API",
  },
  {
    title: "Design System Library",
    description:
      "Comprehensive design system with reusable components, design tokens, and documentation for consistent UI development.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    tags: ["UI/UX"],
    techStack: ["Figma", "Storybook", "Vue.js"],
    liveUrl: "#",
    githubUrl: "#",
    stars: 423,
    views: "31.2k",
    year: "2023",
    category: "UI/UX",
  },
]);
</script>

<style scoped>
.grid-pattern {
  background-image: linear-gradient(
      rgba(168, 85, 247, 0.5) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(168, 85, 247, 0.5) 1px, transparent 1px);
  background-size: 50px 50px;
  width: 100%;
  height: 100%;
  animation: grid-move 20s linear infinite;
}

.neon-text {
  text-shadow: 0 0 10px rgba(168, 85, 247, 0.5),
    0 0 20px rgba(168, 85, 247, 0.3), 0 0 30px rgba(168, 85, 247, 0.2);
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

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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
</style>
