<script setup>
const isMobileMenuOpen = ref(false);

const pageList = ref([
  {
    label: "Home",
    path: "/#home",
  },
  {
    label: "About",
    path: "/#about",
  },
  {
    label: "Skills",
    path: "/#skills",
  },
  {
    label: "Projects",
    path: "/#projects",
  },
  {
    label: "Business",
    path: "/#business",
  },
  {
    label: "Organizations",
    path: "/#organizations",
  },
  {
    label: "Uses",
    path: "/#uses",
  },
  {
    label: "Contact",
    path: "/#contact",
  },
]);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500 gap-4 mt-4 mx-4 md:mx-6',
    ]"
  >
    <div class="w-full max-w-7xl flex justify-between gap-4">
      <div
        :class="[
          'w-fit h-fit flex transition-all duration-500 p-2 bg-gray-900/50 backdrop-blur-xl border-cyan-400/30 shadow-[0_8px_32px_rgba(6,182,212,0.15)] rounded-2xl border justify-between',
        ]"
      >
        <NuxtLink to="/">
          <NuxtImg
            src="/favicon.png"
            width="50"
            height="50"
            alt="Erlan Azhari logo"
          />
        </NuxtLink>
      </div>
      <div
        :class="[
          'w-full md:w-fit flex flex-wrap transition-all duration-500 p-4 md:py-6 md:px-12 bg-gray-900/50 backdrop-blur-xl border-cyan-400/30 shadow-[0_8px_32px_rgba(6,182,212,0.15)] rounded-2xl border',
        ]"
      >
        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-10">
          <NuxtLink
            v-for="(item, index) in pageList"
            :key="index"
            :to="item.path"
            class="text-slate-300 hover:text-cyan-400 transition-all duration-300 relative group"
          >
            {{ item.label }}
            <span
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"
            ></span>
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <div class="w-full flex justify-end md:hidden">
          <button
            @click="toggleMobileMenu"
            aria-label="Open and close menu button"
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
          :page-list="pageList"
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
