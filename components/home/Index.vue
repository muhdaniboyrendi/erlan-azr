<script setup>
const mount = ref("opacity-0 blur-md transform -translate-y-200");

onMounted(() => {
  mount.value = "opacity-100 blur-none translate-y-0";
});
</script>

<template>
  <div class="transition-all duration-1000 ease-out" :class="mount">
    <HomeHero />
    <HomeSponsor />
    <HomeAbout />
    <HomeProjects />
  </div>
</template>
