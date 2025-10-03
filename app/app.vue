<!-- app.vue -->
<script setup>
const route = useRoute();

useHead({
  link: [
    {
      rel: 'canonical',
      href: () => `https://erlanazhari.my.id${route.path}`,
    },
  ],
});
</script>

<template>
  <NuxtLoadingIndicator />
  <div class="relative font-primary min-h-screen bg-dark overflow-hidden">
    <NuxtPage />
  </div>
</template>
