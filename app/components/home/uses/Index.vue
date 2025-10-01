<script setup>
const activeCategory = ref("Hardware");

const categories = ref(["Hardware", "Accessories"]);

const hardwareItems = ref([
  {
    name: "Lenovo ThinkPad X1 Carbon (7th Gen)",
    category: "Laptop",
    description:
      "My primary machine for development. Powerful enough to handle any task I throw at it.",
    specs: ["Intel Core i5-10210U", "8GB RAM", "256GB SSD", "Black"],
    icon: "💻",
    year: "2024",
  },
  {
    name: "Xiaomi A27i",
    category: "Monitor",
    description:
      "27-inch monitor with excellent color accuracy for design and development work.",
    specs: ['27"', "FHD", "IPS", "100Hz"],
    icon: "🖥️",
    year: "2025",
  },
  {
    name: "Samsung Galaxy A35 5G",
    category: "Phone",
    description:
      "A powerful smartphone with a stunning display and versatile camera.",
    specs: ["Exynos 1380", "8GB RAM", "256GB Storage", "5G"],
    icon: "📱",
    year: "2024",
  },
]);

const accessoriesItems = ref([
  {
    name: "Rexus Legionare MX",
    brand: "Rexus",
    description: "Mechanical keyboard with hot-swappable switches",
    icon: "⌨️",
  },
  {
    name: "Logitech G305",
    brand: "Logitech",
    description: "Ergonomic wireless mouse with precision scrolling",
    icon: "🖱️",
  },
  {
    name: "Realme Buds T100",
    brand: "Realme",
    description: "TWS earbuds for deep focus",
    icon: "🎧",
  },
  {
    name: "Orico MPS8030",
    brand: "Orico",
    description: "Medium to large desk mat for mouse and keyboard",
    icon: "🖼️",
  },
  {
    name: "UNEED Laptop Stand",
    brand: "UNEED",
    description: "Adjustable aluminum laptop stand for better ergonomics",
    icon: "🖥️",
  },
]);
</script>

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
            <span class="text-cyan-300 text-sm font-medium">My Setup</span>
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
            What I Use
          </h2>
        </motion>

        <!-- Description -->
        <motion
          :initial="{ opacity: 0, y: 20 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.3 }"
        >
          <p class="text-gray-400 text-lg max-w-2xl mx-auto">
            A detailed look at the hardware, software, and tools that power my
            daily development workflow
          </p>
        </motion>
      </div>

      <!-- Categories Tabs -->
      <motion
        :initial="{ opacity: 0, y: 20 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.5, delay: 0.3 }"
      >
        <div class="flex flex-wrap justify-center gap-3 mb-12">
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
            {{ category }}
          </button>
        </div>
      </motion>

      <!-- Hardware Items Grid -->
      <div
        v-if="activeCategory === 'Hardware'"
        class="grid md:grid-cols-2 gap-6"
      >
        <motion
          :initial="{ opacity: 0, y: 20 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.3 }"
          v-for="(item, index) in hardwareItems"
          :key="index"
        >
          <div
            class="group relative p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(6,182,212,0.2)]"
          >
            <div class="flex flex-col gap-6">
              <div class="flex gap-6">
                <!-- Icon/Image -->
                <div
                  class="flex-shrink-0 w-20 h-20 rounded-xl bg-gradient-to-br from-cyan-400/20 to-purple-400/20 border border-cyan-400/30 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300"
                >
                  {{ item.icon }}
                </div>

                <!-- Content -->
                <div class="flex-1">
                  <div
                    class="flex items-start justify-end md:justify-between mb-2"
                  >
                    <div class="hidden md:block">
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

                  <p class="text-gray-400 text-sm mb-4 hidden md:block">
                    {{ item.description }}
                  </p>

                  <!-- Specs -->
                  <div class="hidden md:flex flex-wrap gap-2">
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

              <div class="flex md:hidden flex-col gap-2">
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
        </motion>
      </div>

      <!-- Accessories Items Grid -->
      <div
        v-if="activeCategory === 'Accessories'"
        class="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <motion
          :initial="{ opacity: 0, y: 20 }"
          :whileInView="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.3 }"
          v-for="(item, index) in accessoriesItems"
          :key="index"
        >
          <div
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
        </motion>
      </div>

      <!-- Workspace Image Section -->
      <motion
        :initial="{ opacity: 0, y: 20 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.5, delay: 0.3 }"
      >
        <div class="mt-16">
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
                <NuxtImg
                  src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=1200&h=675&fit=crop"
                  alt="Workspace Setup"
                  class="w-full h-full object-cover"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"
                ></div>
              </div>

              <!-- Info Overlay -->
              <div class="absolute bottom-0 left-0 right-0 p-4 md:p-8">
                <div
                  class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark/30 backdrop-blur-xl border border-cyan-400/30"
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
</style>
