<script setup>
const colorMode = useColorMode();
const isDarkMode = ref(false);

const toggleButton = () => {
  colorMode.preference = isDarkMode.value ? 'light' : 'dark';
  isDarkMode.value = !isDarkMode.value;
};

watch(() => colorMode.value, (newValue) => {
  isDarkMode.value = newValue === 'dark';
});

onMounted(() => {
  isDarkMode.value = colorMode.value === 'dark';
});
</script>

<template>
  <div class="flex items-center space-x-2">
    <label class="inline-flex items-center cursor-pointer">
      <input
        @click="toggleButton"
        type="checkbox"
        :checked="isDarkMode"
        value=""
        class="sr-only peer"
      />
      <div
        class="relative w-11 h-6 bg-dark/30 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-tertiary dark:peer-checked:bg-tertiary"
      ></div>
    </label>
  </div>
</template>
