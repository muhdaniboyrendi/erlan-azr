<!-- pages/index.vue -->
<script setup>
const showMainContent = ref(false);

onMounted(() => {
  // Show content with fade-in effect after mount
  setTimeout(() => {
    showMainContent.value = true;
  }, 100);
});
</script>

<template>
  <NuxtLayout name="default">
    <Transition
      enter-active-class="transition-opacity duration-500 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
    >
      <div v-if="showMainContent">
        <HomeHero />
        <LazyHomeProfile />
        <LazyHomeSkills />
        <LazyHomeProjects />
        <LazyHomeBusiness />
        <LazyHomeUses />
        <LazyHomeContact />
        <LazyFooter />
      </div>
    </Transition>
  </NuxtLayout>
</template>
