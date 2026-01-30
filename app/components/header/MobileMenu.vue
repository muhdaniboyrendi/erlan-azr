<script setup>
const props = defineProps(["pageList"]);
const emit = defineEmits(["closeMenu"]);
</script>

<template>
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 max-h-0"
    enter-to-class="opacity-100 max-h-96"
    leave-active-class="transition-all duration-300"
    leave-from-class="opacity-100 max-h-96"
    leave-to-class="opacity-0 max-h-0"
  >
    <div
      class="w-full md:hidden pt-4 border-t border-cyan-400/20 mt-4 overflow-hidden"
    >
      <div class="flex flex-col gap-4">
        <NuxtLink
          v-for="(item, index) in props.pageList"
          :key="index"
          :to="item.path"
          @click="emit('closeMenu')"
          class="text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 text-center"
        >
          {{ item.label }}
        </NuxtLink>
      </div>
    </div>
  </Transition>
</template>
