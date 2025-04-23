<script setup>
const props = defineProps(["link", "icon"]);
</script>

<template>
  <a
    :href="props.link"
    target="_blank"
    class="hover:bg-linear-to-br/oklch hover:from-primary hover:to-secondary hover:bg-clip-text hover:text-transparent transition"
  >
    <i :class="props.icon"></i>
  </a>
</template>
