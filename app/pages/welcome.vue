<!-- pages/welcome.vue -->
<script setup>
const router = useRouter();
const { markAsVisited } = useWelcome();

const handleOpenPage = () => {
  markAsVisited();
  router.push("/");
};
</script>

<template>
  <NuxtLayout name="welcome">
    <Welcome @open="handleOpenPage()" />
  </NuxtLayout>
</template>
