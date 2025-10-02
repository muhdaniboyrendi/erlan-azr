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

<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500 gap-4',
      isScrolled ? 'mt-4 mx-4 md:mx-6' : 'mt-0 mx-0',
    ]"
  >
    <div class="w-full max-w-7xl flex justify-between gap-4">
      <div
        :class="[
          'w-fit h-fit flex transition-all duration-500 p-2 bg-gray-900/50 backdrop-blur-xl border-cyan-400/30 shadow-[0_8px_32px_rgba(6,182,212,0.15)]',
          isScrolled
            ? 'rounded-2xl border justify-between'
            : 'rounded-2xl rounded-tl-none border-b border-l border-r',
        ]"
      >
        <NuxtLink to="/">
          <NuxtImg src="/favicon.png" width="50" height="50" />
        </NuxtLink>
      </div>
      <div
        :class="[
          'w-full md:w-fit flex flex-wrap transition-all duration-500 p-4 md:py-6 md:px-12 bg-gray-900/50 backdrop-blur-xl border-cyan-400/30 shadow-[0_8px_32px_rgba(6,182,212,0.15)]',
          isScrolled
            ? 'rounded-2xl border'
            : 'rounded-2xl rounded-tr-none border-b border-l border-r',
        ]"
      >
        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-10">
          <NuxtLink
            to="#home"
            class="text-slate-300 hover:text-cyan-400 transition-all duration-300 relative group"
          >
            Home
            <span
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"
            ></span>
          </NuxtLink>
          <NuxtLink
            to="#about"
            class="text-slate-300 hover:text-cyan-400 transition-all duration-300 relative group"
          >
            About
            <span
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"
            ></span>
          </NuxtLink>
          <NuxtLink
            to="#skills"
            class="text-slate-300 hover:text-cyan-400 transition-all duration-300 relative group"
          >
            Skills
            <span
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"
            ></span>
          </NuxtLink>
          <NuxtLink
            to="#projects"
            class="text-slate-300 hover:text-cyan-400 transition-all duration-300 relative group"
          >
            Projects
            <span
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"
            ></span>
          </NuxtLink>
          <NuxtLink
            to="#business"
            class="text-slate-300 hover:text-cyan-400 transition-all duration-300 relative group"
          >
            Business
            <span
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"
            ></span>
          </NuxtLink>
          <NuxtLink
            to="#organizations"
            class="text-slate-300 hover:text-cyan-400 transition-all duration-300 relative group"
          >
            Organizations
            <span
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"
            ></span>
          </NuxtLink>
          <NuxtLink
            to="#contact"
            class="text-slate-300 hover:text-cyan-400 transition-all duration-300 relative group"
          >
            Contact
            <span
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"
            ></span>
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <div class="w-full flex justify-end md:hidden">
          <button
            @click="toggleMobileMenu"
            class="text-cyan-400 hover:text-cyan-300 transition-colors"
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
        <HeaderMobileMenu
          v-show="isMobileMenuOpen"
          @close-menu="closeMobileMenu"
        />
      </div>
    </div>
  </nav>
</template>

<style scoped>
.neon-text {
  text-shadow: 0 0 20px rgba(6, 182, 212, 0.3);
}
</style>
