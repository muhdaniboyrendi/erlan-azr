<script setup>
const props = defineProps(["title", "icon", "items"]);
</script>

<template>
  <div class="bg-linear-to-b/oklch from-primary to-secondary p-0.5 rounded-2xl">
    <div class="bg-white/80 h-full p-5 rounded-2xl dark:bg-dark/90">
      <div class="flex justify-between items-center">
        <h3 class="text-3xl font-bold text-dark dark:text-white">
          {{ props.title }}
        </h3>
        <i
          class="text-3xl bg-linear-to-br/oklch from-primary to-secondary bg-clip-text text-transparent"
          :class="props.icon"
        ></i>
      </div>
      <hr class="my-5 border-dark/50 dark:border-white/50" />
      <ul class="list-disc list-inside text-dark/70 dark:text-white/70">
        <li v-for="item in props.items" :key="item.index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>
