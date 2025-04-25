<script setup>
const props = defineProps(["project"]);
</script>

<template>
  <div
    v-if="project"
    class="pt-1 border border-white/50 border-t-0 rounded-2xl bg-linear-to-r/oklch from-primary to-secondary overflow-hidden hover:from-secondary hover:to-primary transition duration-1000 ease-out dark:border-dark/50"
  >
    <div class="p-4 h-full bg-white/80 dark:bg-dark/90">
      <div class="flex flex-wrap gap-y-4">
        <div class="w-full sm:w-1/2 md:w-full lg:w-1/2">
          <NuxtImg :src="project.image" :alt="project.title" class="rounded-lg" />
        </div>
        <div
          class="w-full flex flex-wrap content-between sm:w-1/2 md:w-full lg:w-1/2 sm:pl-4 md:pl-0 lg:pl-4"
        >
          <div>
            <h3
              class="text-xl text-dark font-semibold font-secondary mb-2 dark:text-white"
            >
              {{ project.title }}
            </h3>
            <p class="text-dark/80 dark:text-white/80">
              {{ project.quote }}
            </p>
          </div>
          <div class="w-full flex justify-center items-center gap-x-3 mt-4">
            <NuxtLink
              :to="`/projects/${project.slug}`"
              class="relative w-full bg-linear-to-br/oklch from-primary to-secondary p-0.5 rounded-full overflow-hidden"
            >
              <div
                class="py-2 rounded-full text-center text-dark text-sm bg-white/80 hover:bg-transparent hover:text-white transition dark:bg-dark/90 dark:text-white"
              >
                View Project
              </div>
            </NuxtLink>
            <a
              v-if="project.link"
              :href="project.link"
              target="_blank"
              class="relative w-full bg-linear-to-br/oklch from-primary to-secondary p-0.5 rounded-full overflow-hidden"
            >
              <div
                class="py-2 rounded-full text-center text-dark text-sm bg-white/80 hover:bg-transparent hover:text-white transition dark:bg-dark/90 dark:text-white"
              >
                Live Demo
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
