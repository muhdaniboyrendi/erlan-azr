<template>
  <div class="relative font-primary min-h-screen overflow-hidden">
    <NuxtLayout>
      <div class="pt-23">
        <NuxtPage />
      </div>
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.5s ease-out;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(100px);
  scale: 0;
}
</style>