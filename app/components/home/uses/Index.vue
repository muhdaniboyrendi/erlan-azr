<template>
  <section
    id="uses"
    class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark to-gray-950 py-20 px-6"
  >
    <!-- Animated Grid Background -->
    <div class="absolute inset-0 opacity-10">
      <div class="grid-pattern"></div>
    </div>

    <!-- Floating Gradient Orbs -->
    <div
      class="absolute top-32 right-20 w-96 h-96 bg-cyan-400/10 rounded-full blur-[120px] animate-blob"
    ></div>
    <div
      class="absolute bottom-32 left-20 w-96 h-96 bg-pink-400/10 rounded-full blur-[120px] animate-blob animation-delay-2000"
    ></div>

    <!-- Content Container -->
    <div class="relative z-10 max-w-7xl mx-auto w-full">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-fade-in-up">
        <!-- Badge -->
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 backdrop-blur-sm mb-6"
        >
          <svg
            class="w-4 h-4 text-cyan-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span class="text-cyan-300 text-sm font-medium">My Setup</span>
        </div>

        <!-- Title -->
        <h2
          class="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text"
        >
          What I Use
        </h2>

        <!-- Description -->
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          A detailed look at the hardware, software, and tools that power my
          daily development workflow
        </p>
      </div>

      <!-- Categories Tabs -->
      <div
        class="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up animation-delay-200"
      >
        <button
          v-for="category in categories"
          :key="category"
          @click="activeCategory = category"
          :class="[
            'px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center gap-2',
            activeCategory === category
              ? 'bg-gradient-to-r from-cyan-400 to-purple-400 text-white shadow-[0_0_20px_rgba(6,182,212,0.5)]'
              : 'border-2 border-cyan-400/30 text-cyan-300 hover:border-cyan-400/50 hover:bg-cyan-400/10',
          ]"
        >
          <component :is="getCategoryIcon(category)" class="w-5 h-5" />
          {{ category }}
        </button>
      </div>

      <!-- Hardware Items Grid -->
      <div
        v-if="activeCategory === 'Hardware'"
        class="grid md:grid-cols-2 gap-6 animate-fade-in-up animation-delay-400"
      >
        <div
          v-for="(item, index) in hardwareItems"
          :key="index"
          class="group relative p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(6,182,212,0.2)]"
        >
          <div class="flex gap-6">
            <!-- Icon/Image -->
            <div
              class="flex-shrink-0 w-20 h-20 rounded-xl bg-gradient-to-br from-cyan-400/20 to-purple-400/20 border border-cyan-400/30 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300"
            >
              {{ item.icon }}
            </div>

            <!-- Content -->
            <div class="flex-1">
              <div class="flex items-start justify-between mb-2">
                <div>
                  <h3
                    class="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300"
                  >
                    {{ item.name }}
                  </h3>
                  <p class="text-cyan-400 text-sm font-medium">
                    {{ item.category }}
                  </p>
                </div>
                <span
                  v-if="item.year"
                  class="px-3 py-1 text-xs font-semibold rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300"
                >
                  {{ item.year }}
                </span>
              </div>

              <p class="text-gray-400 text-sm mb-4">
                {{ item.description }}
              </p>

              <!-- Specs -->
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="spec in item.specs"
                  :key="spec"
                  class="px-2 py-1 text-xs rounded bg-gray-700/50 text-gray-300 border border-gray-600/50"
                >
                  {{ spec }}
                </span>
              </div>
            </div>
          </div>

          <!-- Hover Glow Effect -->
          <div
            class="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/0 via-cyan-400/5 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          ></div>
        </div>
      </div>

      <!-- Software Items Grid -->
      <div
        v-if="activeCategory === 'Software'"
        class="grid md:grid-cols-3 gap-6 animate-fade-in-up animation-delay-400"
      >
        <div
          v-for="(item, index) in softwareItems"
          :key="index"
          class="group relative p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-purple-400/20 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]"
        >
          <!-- Icon -->
          <div
            class="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-purple-400/20 to-pink-400/20 border border-purple-400/30 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300"
          >
            {{ item.icon }}
          </div>

          <!-- Content -->
          <h3
            class="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300"
          >
            {{ item.name }}
          </h3>

          <p class="text-gray-400 text-sm mb-3">{{ item.description }}</p>

          <!-- Category Badge -->
          <span
            class="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-purple-400/10 border border-purple-400/30 text-purple-300"
          >
            {{ item.category }}
          </span>
        </div>
      </div>

      <!-- Accessories Items Grid -->
      <div
        v-if="activeCategory === 'Accessories'"
        class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up animation-delay-400"
      >
        <div
          v-for="(item, index) in accessoriesItems"
          :key="index"
          class="group relative p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-pink-400/20 hover:border-pink-400/50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(244,114,182,0.2)]"
        >
          <!-- Icon -->
          <div
            class="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-pink-400/20 to-cyan-400/20 border border-pink-400/30 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300"
          >
            {{ item.icon }}
          </div>

          <!-- Content -->
          <h3
            class="text-base font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300"
          >
            {{ item.name }}
          </h3>

          <p class="text-gray-400 text-xs mb-2">{{ item.brand }}</p>

          <p class="text-gray-500 text-xs">{{ item.description }}</p>
        </div>
      </div>

      <!-- Workspace Image Section -->
      <div class="mt-16 animate-fade-in-up animation-delay-600">
        <div class="relative group">
          <!-- Gradient Border -->
          <div
            class="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500"
          ></div>

          <!-- Image Container -->
          <div
            class="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden border border-cyan-400/30"
          >
            <div
              class="aspect-video flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900"
            >
              <img
                src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=1200&h=675&fit=crop"
                alt="Workspace Setup"
                class="w-full h-full object-cover"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"
              ></div>
            </div>

            <!-- Info Overlay -->
            <div class="absolute bottom-0 left-0 right-0 p-8">
              <div
                class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900/80 backdrop-blur-xl border border-cyan-400/30 mb-4"
              >
                <div class="relative flex h-3 w-3">
                  <span
                    class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"
                  ></span>
                  <span
                    class="relative inline-flex rounded-full h-3 w-3 bg-cyan-400"
                  ></span>
                </div>
                <span class="text-white text-sm font-medium"
                  >My Current Workspace</span
                >
              </div>
              <p class="text-gray-300 max-w-2xl">
                A minimalist setup designed for maximum productivity and comfort
                during long coding sessions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const activeCategory = ref("Hardware");

const categories = ref(["Hardware", "Software", "Accessories"]);

const hardwareItems = ref([
  {
    name: 'MacBook Pro 16"',
    category: "Laptop",
    description:
      "My primary machine for development. Powerful enough to handle any task I throw at it.",
    specs: ["M2 Pro", "32GB RAM", "1TB SSD", "Space Gray"],
    icon: "💻",
    year: "2024",
  },
  {
    name: "Dell UltraSharp U2720Q",
    category: "Monitor",
    description:
      "27-inch 4K monitor with excellent color accuracy for design and development work.",
    specs: ['27"', "4K UHD", "IPS", "USB-C Hub"],
    icon: "🖥️",
    year: "2023",
  },
  {
    name: "Custom Built PC",
    category: "Desktop",
    description:
      "High-performance workstation for intensive tasks, rendering, and gaming.",
    specs: ["AMD Ryzen 9", "RTX 4080", "64GB RAM", "2TB NVMe"],
    icon: "🖲️",
    year: "2024",
  },
  {
    name: 'iPad Pro 12.9"',
    category: "Tablet",
    description:
      "Perfect for sketching UI designs, note-taking, and mobile testing.",
    specs: ["M2 Chip", "256GB", "WiFi + Cellular", "Magic Keyboard"],
    icon: "📱",
    year: "2023",
  },
]);

const softwareItems = ref([
  {
    name: "VS Code",
    description: "My go-to code editor with extensive customization",
    category: "Editor",
    icon: "⚡",
  },
  {
    name: "Warp",
    description: "Modern terminal with AI-powered features",
    category: "Terminal",
    icon: "🔲",
  },
  {
    name: "Figma",
    description: "Design tool for UI/UX and prototyping",
    category: "Design",
    icon: "🎨",
  },
  {
    name: "Raycast",
    description: "Productivity launcher for macOS",
    category: "Productivity",
    icon: "🚀",
  },
  {
    name: "Notion",
    description: "All-in-one workspace for notes and docs",
    category: "Notes",
    icon: "📝",
  },
  {
    name: "Arc Browser",
    description: "Next-gen browser with unique features",
    category: "Browser",
    icon: "🌐",
  },
  {
    name: "Docker Desktop",
    description: "Containerization platform",
    category: "DevOps",
    icon: "🐳",
  },
  {
    name: "TablePlus",
    description: "Modern database management tool",
    category: "Database",
    icon: "🗄️",
  },
  {
    name: "Spotify",
    description: "Music streaming for focus",
    category: "Music",
    icon: "🎵",
  },
]);

const accessoriesItems = ref([
  {
    name: "Keychron K8 Pro",
    brand: "Keychron",
    description: "Wireless mechanical keyboard with hot-swappable switches",
    icon: "⌨️",
  },
  {
    name: "Logitech MX Master 3S",
    brand: "Logitech",
    description: "Ergonomic wireless mouse with precision scrolling",
    icon: "🖱️",
  },
  {
    name: "Sony WH-1000XM5",
    brand: "Sony",
    description: "Noise-cancelling headphones for deep focus",
    icon: "🎧",
  },
  {
    name: "Elgato Key Light",
    brand: "Elgato",
    description: "Professional LED panel for video calls",
    icon: "💡",
  },
  {
    name: "CalDigit TS4",
    brand: "CalDigit",
    description: "Thunderbolt 4 dock with 18 ports",
    icon: "🔌",
  },
  {
    name: "Herman Miller Aeron",
    brand: "Herman Miller",
    description: "Ergonomic office chair for long coding sessions",
    icon: "🪑",
  },
  {
    name: "Autonomous SmartDesk",
    brand: "Autonomous",
    description: "Electric standing desk with memory presets",
    icon: "🪵",
  },
  {
    name: "Nanoleaf Panels",
    brand: "Nanoleaf",
    description: "Smart LED light panels for ambient lighting",
    icon: "✨",
  },
]);

const getCategoryIcon = (category) => {
  const icons = {
    Hardware: {
      template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
    },
    Software: {
      template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>`,
    },
    Accessories: {
      template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/></svg>`,
    },
  };
  return icons[category];
};
</script>

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
    transform: translate(120px, 120px);
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
