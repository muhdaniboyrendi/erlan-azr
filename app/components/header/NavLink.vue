<script setup>
const route = useRoute();

const props = defineProps(["title", "path"]);
</script>

<template>
  <li>
    <NuxtLink
      :to="props.path"
      class="block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition relative group"
      :class="
        route.path === props.path
          ? 'text-cyan-500'
          : 'text-dark dark:text-white/70'
      "
    >
      {{ props.title }}
      <span
        class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full bg-gradient-to-r from-cyan-500/50 via-cyan-500 to-cyan-500/50 transition-all duration-300 ease-out group-hover:w-full"
        :class="route.path === props.path ? '!w-full' : ''"
      ></span>
    </NuxtLink>
  </li>
</template>
