<script setup>
const route = useRoute();

const emit = defineEmits(['toggleNav']);
</script>

<template>
  <div
    class="flex justify-center gap-4 mt-5 max-w-md mx-auto md:hidden dark:text-white/70"
  >
    <NuxtLink @click="emit('toggleNav')"
      to="/"
      class="flex items-center w-1/2 text-center bg-dark/20 p-3 rounded-full dark:bg-white/10"
    >
      <div
        class="flex justify-center items-center w-10 h-10 mr-2 rounded-full"
        :class="route.path === '/' ? 'bg-cyan-500' : 'bg-dark/30 dark:bg-dark/50'"
      >
        <i class="bi bi-house-door-fill text-white text-xl"></i>
      </div>
      <span class="mt-1 dark:text-text_secondary_dark text-xs">Home</span>
    </NuxtLink>
    <NuxtLink @click="emit('toggleNav')"
      to="/about"
      class="flex items-center w-1/2 text-center bg-dark/20 p-3 rounded-full dark:bg-white/10"
    >
      <div
        class="flex justify-center items-center w-10 h-10 mr-2 rounded-full"
        :class="route.path === '/about' ? 'bg-cyan-500' : 'bg-dark/30 dark:bg-dark/50'"
      >
        <i class="bi bi-info-circle-fill text-white text-xl"></i>
      </div>
      <span class="mt-1 dark:text-text_secondary_dark text-xs">About</span>
    </NuxtLink>
  </div>
  <div
    class="py-6 bg-dark/20 rounded-[2rem] flex items-center mt-4 max-w-md mx-auto md:hidden dark:bg-white/10 dark:text-white/70"
  >
    <NuxtLink @click="emit('toggleNav')" to="/projects" class="w-1/3 flex flex-wrap justify-center mt-1">
      <div
        class="flex justify-center items-center w-10 h-10 rounded-full"
        :class="route.path === '/projects' ? 'bg-cyan-500' : 'bg-dark/30 dark:bg-dark/50'"
      >
        <i class="bi bi-clipboard-data-fill text-white text-xl"></i>
      </div>
      <span
        class="w-full text-center text-xs mt-2 dark:text-text_secondary_dark"
        >Projects</span
      >
    </NuxtLink>
    <NuxtLink @click="emit('toggleNav')" to="/uses" class="w-1/3 flex flex-wrap justify-center mt-1">
      <div
        class="flex justify-center items-center w-10 h-10 rounded-full"
        :class="route.path === '/uses' ? 'bg-cyan-500' : 'bg-dark/30 dark:bg-dark/50'"
      >
        <i class="bi bi-tools text-white text-xl"></i>
      </div>
      <span
        class="w-full text-center text-xs mt-2 dark:text-text_secondary_dark"
        >Uses</span
      >
    </NuxtLink>
    <NuxtLink @click="emit('toggleNav')" class="w-1/3 flex flex-wrap justify-center mt-1">
      <div
        class="flex justify-center items-center w-10 h-10 rounded-full"
        :class="route.path === '/' ? 'bg-cyan-500' : 'bg-dark/30 dark:bg-dark/50'"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-person-rolodex text-white"
          viewBox="0 0 16 16"
        >
          <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
          <path
            d="M1 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h.5a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6.707L6 1.293A1 1 0 0 0 5.293 1zm0 1h4.293L6 2.707A1 1 0 0 0 6.707 3H15v10h-.085a1.5 1.5 0 0 0-2.4-.63C11.885 11.223 10.554 10 8 10c-2.555 0-3.886 1.224-4.514 2.37a1.5 1.5 0 0 0-2.4.63H1z"
          />
        </svg>
      </div>
      <span
        class="w-full text-center text-xs mt-2 dark:text-text_secondary_dark"
        >Contact</span
      >
    </NuxtLink>
  </div>
  <div
    class="p-3 mt-4 mb-1 bg-dark/20 rounded-full flex items-center justify-between max-w-md mx-auto md:hidden dark:bg-white/10 dark:text-white/70"
  >
    <div class="flex items-center">
      <div
        class="flex justify-center items-center w-10 h-10 mr-2 rounded-full bg-dark/30 dark:bg-cyan-500"
      >
        <i class="bi bi-moon-fill text-white text-xl"></i>
      </div>
      <span class="mt-1 dark:text-text_secondary_dark text-xs">Dark Mode</span>
    </div>
    <HeaderDarkModeToggle class="mr-3 md:ml-20" />
  </div>
</template>
