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
      class="group relative p-6 rounded-xl border border-purple-400/20 bg-gray-800/30 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] cursor-pointer"
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
  </motion>
</template>
