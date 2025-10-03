<!-- pages/welcome.vue -->
<script setup>
definePageMeta({
  layout: false,
  ssr: false, // Disable SSR
});

const router = useRouter();
const { markAsVisited } = useWelcome();

const handleOpenPage = () => {
  markAsVisited();
  router.push("/");
};
</script>

<template>
  <ClientOnly>
    <NuxtLayout name="welcome">
      <Welcome @open="handleOpenPage()" />
    </NuxtLayout>
  </ClientOnly>
</template>
