<script setup>
const route = useRoute();

const props = defineProps(["title", "path"]);
</script>

<template>
  <li>
    <NuxtLink
      :to="props.path"
      class="block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-tertiary md:p-0 md:dark:hover:text-tertiary dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition"
      :class="route.path === props.path ? 'text-tertiary' : 'text-dark dark:text-white/90'"
      >{{ props.title }}</NuxtLink
    >
  </li>
</template>
