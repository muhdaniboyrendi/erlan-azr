<script setup>
const pageOpen = ref(false);

const handleOpenPage = () => {
  pageOpen.value = true;
};
</script>

<template>
  <Welcome v-if="!pageOpen" @open="handleOpenPage" />

  <div v-else>
    <LazyHeader />
    <LazyHomeHero />
    <LazyHomeProfile />
    <LazyHomeSkills />
    <LazyHomeProjects />
    <LazyHomeBusiness />
    <LazyHomeOrganization />
    <LazyHomeUses />
    <LazyHomeContact />
    <LazyFooter />
  </div>
</template>
