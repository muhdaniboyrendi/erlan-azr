<script setup>
const route = useRoute();
const projectStore = useProjectStore();

const slug = ref("");
const data = ref([]);

onMounted(() => {
  slug.value = route.params.slug;
  projectStore.projects.find((project) => {
    return project.slug === slug.value;
  });
  data.value = projectStore.projects.filter((project) => {
    return project.slug === slug.value;
  });
});

onUnmounted(() => {
  slug.value = "";
  data.value = [];
});
</script>

<template>
  <div class="w-full px-3 py-10">
    <div
      class="max-w-4xl mx-auto bg-linear-to-b/oklch from-primary to-secondary p-0.5 rounded-3xl"
    >
      <div class="p-5 bg-white/80 dark:bg-dark/90 rounded-3xl">
        <div v-if="data.length !== 0">
          <div v-for="project in data" :key="project.index">
            <NuxtImg
              :src="project.image"
              :alt="project.title"
              class="w-full mb-10 rounded-xl"
            />
            <h1
              class="text-4xl text-dark font-bold font-exo dark:text-white mb-5"
            >
              {{ project.title }}
            </h1>
            <p class="mb-10 text-dark/80 dark:text-white/80">
              {{ project.quote }}
            </p>
            <div
              v-if="project.source || project.link"
              class="flex gap-x-4 mb-10"
            >
              <a
                v-if="project.source"
                :href="project.source"
                target="_blank"
                class="text-dark/80 dark:text-white/80 underline hover:text-tertiary transition"
                ><i class="bi bi-github mr-1"></i>Source Code</a
              >
              <a
                v-if="project.link"
                :href="project.link"
                target="_blank"
                class="text-dark/80 dark:text-white/80 underline hover:text-tertiary transition"
                ><i class="bi bi-box-arrow-up-right mr-1"></i>Live Demo</a
              >
            </div>
            <p class="text-dark/80 dark:text-white/80 mb-3">
              {{ project.description }}
            </p>
            <p class="text-dark/80 dark:text-white/80">
              {{ project.story }}
            </p>
            <p class="text-dark/80 dark:text-white/80 mt-5 mb-1">Stack:</p>
            <ul
              class="list-disc list-inside mb-5 text-dark/80 dark:text-white/80"
            >
              <li v-for="item in project.stack" :key="item.index">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
        <div v-else class="py-10 text-center text-dark/80 dark:text-white/80">
          <p
            class="text-8xl font-secondary font-semibold mb-10 bg-linear-to-br/oklch from-primary to-secondary bg-clip-text text-transparent w-fit mx-auto"
          >
            404
          </p>
          <p class="text-4xl text-dark font-exo dark:text-white mb-5">Oops</p>
          <p class="text-lg text-dark dark:text-white">Project Not Found</p>
        </div>
      </div>
    </div>
  </div>
</template>
