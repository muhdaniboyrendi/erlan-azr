<script setup>
const pageOpen = ref(false);
const welcomeClass = ref("");
const showMainContent = ref(false);

const handleOpenPage = () => {
  welcomeClass.value = "-translate-y-full";

  setTimeout(() => {
    pageOpen.value = true;
    showMainContent.value = true;
  }, 1000);
};
</script>

<template>
  <div class="relative min-h-screen bg-dark overflow-hidden">
    <!-- Welcome Page -->
    <Welcome
      v-if="!pageOpen"
      @open="handleOpenPage"
      class="fixed inset-0 z-50 transition-transform duration-1000 ease-in-out"
      :class="welcomeClass"
    />

    <!-- Main Content -->
    <Transition
      enter-active-class="transition-opacity duration-500 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
    >
      <div v-if="showMainContent">
        <Header />
        <HomeHero />
        <LazyHomeProfile />
        <LazyHomeSkills />
        <LazyHomeProjects />
        <LazyHomeBusiness />
        <LazyHomeOrganization />
        <LazyHomeUses />
        <LazyHomeContact />
        <LazyFooter />
      </div>
    </Transition>
  </div>
</template>
