<script setup>
const blur = ref("blur-2xl");

onMounted(() => {
  blur.value = "blur-none";
});
</script>

<template>
  <div
    class="hexagon-wrapper w-72 h-72 md:w-80 md:h-80 flex justify-center items-center mx-auto transition-all ease-out duration-1000"
    :class="blur"
  >
    <div
      class="hexagon-shadow absolute w-60 h-60 md:w-64 md:h-64 rounded-full"
    ></div>
    <div class="hexagon relative transition-all bg-white">
      <div class="absolute flex items-center justify-center">
        <img
          src="/img/profile.png"
          alt="My Photo"
          class="ml-4 -mt-12 scale-105"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.hexagon-wrapper {
  position: relative;
}

.hexagon {
  width: 85%;
  height: 100%;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}

.hexagon-shadow {
  box-shadow: 0 0 100px 50px #a645a2;
}
</style>
