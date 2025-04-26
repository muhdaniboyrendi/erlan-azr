<template>
  <NuxtLoadingIndicator />
  <div class="relative font-primary min-h-screen overflow-hidden">
    <NuxtLayout>
      <div class="pt-23">
        <NuxtPage />
      </div>
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active {
  transition: all 0.7s ease-out;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(100px);
  scale: 0;
}
</style>