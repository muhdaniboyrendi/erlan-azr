<script setup>
const props = defineProps({
  skill: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <motion
    :initial="{ opacity: 0, y: 20 }"
    :whileInView="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.5, delay: 0.3 }"
  >
    <div
      class="group relative overflow-hidden rounded-xl bg-dark transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] cursor-pointer"
    >
      <div
        class="p-6 bg-pink-400/5 border border-pink-400/20 hover:border-pink-400/50 rounded-xl"
      >
        <NuxtImg
          :src="skill.image"
          :alt="skill.name"
          width="50"
          height="50"
          class="mx-auto"
        />
        <div class="text-white font-semibold text-sm text-center mt-4">
          {{ skill.name }}
        </div>
      </div>
    </div>
  </motion>
</template>
