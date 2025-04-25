<script setup>
const route = useRoute();

const mount = ref("scale-0 opacity-0 -translate-y-full");

onMounted(() => {
  mount.value = "scale-100 opacity-100 translate-y-0";
});
</script>

<template>
  <div>
    <HomeHero />
    <HomeSponsor />
    <HomeAbout />
    <HomeProjects />
  </div>
</template>
