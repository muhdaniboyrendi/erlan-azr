<script setup>
const props = defineProps(['title', 'path'])
</script>

<template>
  <li>
    <a
      href="#"
      class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-tertiary md:p-0 md:dark:hover:text-tertiary dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition"
      >{{ props.title }}</a
    >
  </li>
</template>
