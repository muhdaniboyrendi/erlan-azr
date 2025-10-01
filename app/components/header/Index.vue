<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out',
      isScrolled ? 'mt-4 mx-4 md:mx-8' : 'mt-0 mx-0',
    ]"
  >
    <div
      :class="[
        'transition-all duration-500',
        isScrolled
          ? 'bg-gray-900/80 backdrop-blur-xl border border-cyan-400/30 rounded-2xl shadow-[0_8px_32px_rgba(6,182,212,0.15)]'
          : 'bg-transparent',
      ]"
    >
      <div class="max-w-7xl mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <NuxtLink
            to="/"
            class="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 neon-text"
          >
            <NuxtImg src="/favicon.png" alt="Logo" width="40" height="40" />
          </NuxtLink>

          <!-- Desktop Menu -->
          <div class="hidden md:flex items-center gap-8">
            <NuxtLink
              to="#home"
              class="text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group"
            >
              Home
              <span
                class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"
              ></span>
            </NuxtLink>
            <NuxtLink
              to="#about"
              class="text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group"
            >
              About
              <span
                class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"
              ></span>
            </NuxtLink>
            <NuxtLink
              to="#skills"
              class="text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group"
            >
              Skills
              <span
                class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"
              ></span>
            </NuxtLink>
            <NuxtLink
              to="#projects"
              class="text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group"
            >
              Projects
              <span
                class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"
              ></span>
            </NuxtLink>
            <NuxtLink
              to="#business"
              class="text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group"
            >
              Business
              <span
                class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"
              ></span>
            </NuxtLink>
            <NuxtLink
              to="#organization"
              class="text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group"
            >
              Organization
              <span
                class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"
              ></span>
            </NuxtLink>
            <NuxtLink
              to="#contact"
              class="text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group"
            >
              Contact
              <span
                class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"
              ></span>
            </NuxtLink>
          </div>

          <!-- CTA Button -->
          <div class="hidden md:block">
            <NuxtLink
              to="#contact"
              class="group relative px-6 py-2.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg font-semibold text-white text-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]"
            >
              <span class="relative z-10"
                ><i class="bi bi-arrow-down"></i
              ></span>
              <div
                class="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
            </NuxtLink>
          </div>

          <!-- Mobile Menu Button -->
          <button
            @click="toggleMobileMenu"
            class="md:hidden text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                v-if="!isMobileMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 max-h-0"
          enter-to-class="opacity-100 max-h-96"
          leave-active-class="transition-all duration-300 ease-in"
          leave-from-class="opacity-100 max-h-96"
          leave-to-class="opacity-0 max-h-0"
        >
          <div
            v-show="isMobileMenuOpen"
            class="md:hidden pt-4 border-t border-cyan-400/20 mt-4 overflow-hidden"
          >
            <div class="flex flex-col gap-4">
              <NuxtLink
                to="#home"
                @click="closeMobileMenu"
                class="text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 text-center"
              >
                Home
              </NuxtLink>
              <NuxtLink
                to="#about"
                @click="closeMobileMenu"
                class="text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 text-center"
              >
                About
              </NuxtLink>
              <NuxtLink
                to="#skills"
                @click="closeMobileMenu"
                class="text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 text-center"
              >
                Skills
              </NuxtLink>
              <NuxtLink
                to="#projects"
                @click="closeMobileMenu"
                class="text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 text-center"
              >
                Projects
              </NuxtLink>
              <NuxtLink
                to="#business"
                @click="closeMobileMenu"
                class="text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 text-center"
              >
                Business
              </NuxtLink>
              <NuxtLink
                to="#organization"
                @click="closeMobileMenu"
                class="text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 text-center"
              >
                Organization
              </NuxtLink>
              <NuxtLink
                to="#uses"
                @click="closeMobileMenu"
                class="text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 text-center"
              >
                Uses
              </NuxtLink>
              <NuxtLink
                to="#contact"
                @click="closeMobileMenu"
                class="text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 text-center"
              >
                Contact
              </NuxtLink>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </nav>
</template>

<script setup>
const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const handleScroll = () => {
  if (window.scrollY > 50) {
    isScrolled.value = true;
  } else {
    isScrolled.value = false;
  }
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.neon-text {
  text-shadow: 0 0 20px rgba(6, 182, 212, 0.3);
}
</style>
