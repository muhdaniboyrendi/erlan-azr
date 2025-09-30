<template>
  <section
    id="business"
    class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-gray-950 py-20 px-6"
  >
    <!-- Animated Grid Background -->
    <div class="absolute inset-0 opacity-10">
      <div class="grid-pattern"></div>
    </div>

    <!-- Floating Gradient Orbs -->
    <div
      class="absolute top-32 left-10 w-96 h-96 bg-purple-400/10 rounded-full blur-[120px] animate-blob"
    ></div>
    <div
      class="absolute bottom-32 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-[120px] animate-blob animation-delay-2000"
    ></div>

    <!-- Content Container -->
    <div class="relative z-10 max-w-7xl mx-auto w-full">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-fade-in-up">
        <!-- Badge -->
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-400/30 bg-purple-400/10 backdrop-blur-sm mb-6"
        >
          <svg
            class="w-4 h-4 text-purple-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span class="text-purple-300 text-sm font-medium"
            >My Ventures</span
          >
        </div>

        <!-- Title -->
        <h2
          class="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent neon-text"
        >
          Business Portfolio
        </h2>

        <!-- Description -->
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          Explore the businesses and ventures I've built, combining technology
          and innovation to create value
        </p>
      </div>

      <!-- Main Featured Business -->
      <div
        class="mb-16 animate-fade-in-up animation-delay-200"
      >
        <div class="relative group">
          <!-- Gradient Border -->
          <div
            class="absolute -inset-1 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"
          ></div>

          <!-- Content Container -->
          <div
            class="relative bg-gray-800/50 backdrop-blur-xl rounded-3xl overflow-hidden border border-purple-400/30"
          >
            <div class="grid md:grid-cols-2 gap-0">
              <!-- Left: Image -->
              <div class="relative h-96 md:h-auto overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                  alt="Featured Business"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent"
                ></div>

                <!-- Featured Badge -->
                <div
                  class="absolute top-6 left-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-400/20 backdrop-blur-xl border border-purple-400/50"
                >
                  <svg
                    class="w-4 h-4 text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <span class="text-white text-sm font-semibold"
                    >Featured</span
                  >
                </div>
              </div>

              <!-- Right: Content -->
              <div class="p-8 md:p-12 flex flex-col justify-center">
                <!-- Category -->
                <div class="flex items-center gap-2 mb-4">
                  <span
                    class="px-3 py-1 text-xs font-semibold rounded-full bg-purple-400/20 border border-purple-400/30 text-purple-300"
                  >
                    SaaS Platform
                  </span>
                  <span
                    class="px-3 py-1 text-xs font-semibold rounded-full bg-green-400/20 border border-green-400/30 text-green-300"
                  >
                    Active
                  </span>
                </div>

                <!-- Title -->
                <h3
                  class="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300"
                >
                  TechSolutions Pro
                </h3>

                <!-- Description -->
                <p class="text-gray-300 text-lg mb-6 leading-relaxed">
                  A comprehensive project management platform designed for tech
                  teams. Streamline workflows, enhance collaboration, and boost
                  productivity with AI-powered features.
                </p>

                <!-- Stats -->
                <div class="grid grid-cols-3 gap-4 mb-6">
                  <div
                    class="p-4 rounded-xl bg-gray-900/50 border border-gray-700/50"
                  >
                    <div
                      class="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                    >
                      10k+
                    </div>
                    <div class="text-gray-400 text-xs mt-1">Users</div>
                  </div>
                  <div
                    class="p-4 rounded-xl bg-gray-900/50 border border-gray-700/50"
                  >
                    <div
                      class="text-2xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent"
                    >
                      $500k
                    </div>
                    <div class="text-gray-400 text-xs mt-1">ARR</div>
                  </div>
                  <div
                    class="p-4 rounded-xl bg-gray-900/50 border border-gray-700/50"
                  >
                    <div
                      class="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                    >
                      95%
                    </div>
                    <div class="text-gray-400 text-xs mt-1">Satisfaction</div>
                  </div>
                </div>

                <!-- CTA Buttons -->
                <div class="flex flex-wrap gap-3">
                  <a
                    href="#"
                    class="group/btn relative px-6 py-3 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"
                  >
                    <span class="relative z-10 flex items-center gap-2">
                      Visit Website
                      <svg
                        class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300"
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
                    </span>
                    <div
                      class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-pink-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                    ></div>
                  </a>

                  <a
                    href="#"
                    class="px-6 py-3 border-2 border-purple-400/50 rounded-lg font-semibold text-purple-300 hover:bg-purple-400/10 hover:border-purple-400 transition-all duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Other Businesses Grid -->
      <div
        class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up animation-delay-400"
      >
        <div
          v-for="(business, index) in businesses"
          :key="index"
          class="group relative rounded-2xl overflow-hidden bg-gray-800/30 backdrop-blur-sm border border-purple-400/20 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]"
        >
          <!-- Business Image -->
          <div class="relative h-48 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
            <img
              :src="business.image"
              :alt="business.name"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"
            ></div>

            <!-- Logo Overlay -->
            <div
              class="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-2xl"
            >
              {{ business.icon }}
            </div>

            <!-- Status Badge -->
            <div
              class="absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-sm border"
              :class="business.statusClass"
            >
              {{ business.status }}
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <!-- Category -->
            <span
              class="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3"
              :class="business.categoryClass"
            >
              {{ business.category }}
            </span>

            <!-- Title -->
            <h3
              class="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300"
            >
              {{ business.name }}
            </h3>

            <!-- Description -->
            <p class="text-gray-400 text-sm mb-4 line-clamp-2">
              {{ business.description }}
            </p>

            <!-- Metrics -->
            <div class="grid grid-cols-2 gap-3 mb-4">
              <div class="text-center p-2 rounded-lg bg-gray-900/50 border border-gray-700/50">
                <div
                  class="text-sm font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                >
                  {{ business.metric1.value }}
                </div>
                <div class="text-gray-500 text-xs">{{ business.metric1.label }}</div>
              </div>
              <div class="text-center p-2 rounded-lg bg-gray-900/50 border border-gray-700/50">
                <div
                  class="text-sm font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                >
                  {{ business.metric2.value }}
                </div>
                <div class="text-gray-500 text-xs">{{ business.metric2.label }}</div>
              </div>
            </div>

            <!-- Link -->
            <a
              :href="business.url"
              target="_blank"
              class="flex items-center justify-between text-purple-400 hover:text-purple-300 text-sm font-semibold group/link"
            >
              <span>View Details</span>
              <svg
                class="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300"
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
            </a>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-16 animate-fade-in-up animation-delay-600">
        <div
          class="relative inline-block p-8 rounded-2xl bg-gradient-to-r from-purple-400/10 via-pink-400/10 to-cyan-400/10 backdrop-blur-sm border border-purple-400/30"
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
            <a
              href="#contact"
              class="group relative px-8 py-4 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"
            >
              <span class="relative z-10">Get in Touch</span>
              <div
                class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
            </a>
            <a
              href="#"
              class="px-8 py-4 border-2 border-purple-400/50 rounded-lg font-semibold text-purple-300 hover:bg-purple-400/10 hover:border-purple-400 transition-all duration-300"
            >
              View Pitch Deck
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const businesses = ref([
  {
    name: 'DevTools Agency',
    category: 'Digital Agency',
    description:
      'Full-service digital agency specializing in web development, design, and digital marketing solutions for startups and enterprises.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop',
    icon: '🚀',
    status: 'Active',
    statusClass: 'bg-green-400/20 border-green-400/30 text-green-300',
    categoryClass: 'bg-blue-400/20 border border-blue-400/30 text-blue-300',
    metric1: { label: 'Clients', value: '50+' },
    metric2: { label: 'Projects', value: '120+' },
    url: '#'
  },
  {
    name: 'CodeMentor Pro',
    category: 'EdTech',
    description:
      'Online learning platform offering premium coding courses and mentorship programs for aspiring developers worldwide.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
    icon: '📚',
    status: 'Growing',
    statusClass: 'bg-blue-400/20 border-blue-400/30 text-blue-300',
    categoryClass: 'bg-purple-400/20 border border-purple-400/30 text-purple-300',
    metric1: { label: 'Students', value: '5k+' },
    metric2: { label: 'Courses', value: '25' },
    url: '#'
  },
  {
    name: 'AI Assistant Hub',
    category: 'AI/ML',
    description:
      'Suite of AI-powered productivity tools helping businesses automate workflows and improve efficiency with machine learning.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    icon: '🤖',
    status: 'Beta',
    statusClass: 'bg-yellow-400/20 border-yellow-400/30 text-yellow-300',
    categoryClass: 'bg-cyan-400/20 border border-cyan-400/30 text-cyan-300',
    metric1: { label: 'Beta Users', value: '1.2k' },
    metric2: { label: 'API Calls', value: '50k/mo' },
    url: '#'
  },
  {
    name: 'DesignStudio',
    category: 'Creative',
    description:
      'Boutique design studio creating stunning brand identities, UI/UX designs, and visual content for modern brands.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    icon: '🎨',
    status: 'Active',
    statusClass: 'bg-green-400/20 border-green-400/30 text-green-300',
    categoryClass: 'bg-pink-400/20 border border-pink-400/30 text-pink-300',
    metric1: { label: 'Projects', value: '80+' },
    metric2: { label: 'Awards', value: '12' },
    url: '#'
  },
  {
    name: 'CloudHost Solutions',
    category: 'Infrastructure',
    description:
      'Reliable cloud hosting and infrastructure services with 99.9% uptime guarantee for businesses of all sizes.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
    icon: '☁️',
    status: 'Active',
    statusClass: 'bg-green-400/20 border-green-400/30 text-green-300',
    categoryClass: 'bg-indigo-400/20 border border-indigo-400/30 text-indigo-300',
    metric1: { label: 'Uptime', value: '99.9%' },
    metric2: { label: 'Servers', value: '200+' },
    url: '#'
  },
  {
    name: 'StartupKit',
    category: 'SaaS',
    description:
      'All-in-one toolkit for startups including legal templates, financial models, and business planning resources.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop',
    icon: '💼',
    status: 'Coming Soon',
    statusClass: 'bg-purple-400/20 border-purple-400/30 text-purple-300',
    categoryClass: 'bg-orange-400/20 border border-orange-400/30 text-orange-300',
    metric1: { label: 'Waitlist', value: '800+' },
    metric2: { label: 'Resources', value: '50+' },
    url: '#'
  }
])
</script>

<style scoped>
.grid-pattern {
  background-image: linear-gradient(rgba(168, 85, 247, 0.5) 1px, transparent 1px),
    linear-gradient(90deg, rgba(168, 85, 247, 0.5) 1px, transparent 1px);
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