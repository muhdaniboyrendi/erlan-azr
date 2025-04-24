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
    <div class="max-w-4xl mx-auto p-5 bg-dark/10 dark:bg-white/10 rounded-3xl">
      <div v-if="data.length !== 0">
        <div v-for="project in data" :key="project.index">
          <img
            :src="project.data.image"
            :alt="project.data.title"
            class="w-full mb-10 rounded-xl"
          />
          <h1 class="text-4xl text-dark font-bold font-exo dark:text-white mb-5">
            {{ project.data.title }}
          </h1>
          <p class="text-dark/80 dark:text-white/80">
            {{ project.data.quote }}
          </p>
          <div class="flex gap-x-4 mt-3 mb-10">
            <a
              v-if="project.data.source"
              :href="project.data.source"
              target="_blank"
              class="text-dark/80 dark:text-white/80 underline hover:text-tertiary transition"
              ><i class="bi bi-github mr-1"></i>Source Code</a
            >
            <a
              v-if="project.data.link"
              :href="project.data.link"
              target="_blank"
              class="text-dark/80 dark:text-white/80 underline hover:text-tertiary transition"
              ><i class="bi bi-box-arrow-up-right mr-1"></i>Live Demo</a
            >
          </div>
          <p class="text-dark/80 dark:text-white/80 mb-3">
            {{ project.data.description }}
          </p>
          <p class="text-dark/80 dark:text-white/80">
            {{ project.data.story }}
          </p>
          <p class="text-dark/80 dark:text-white/80 mt-5 mb-1">Stack:</p>
          <ul class="list-disc list-inside mb-5 text-dark/80 dark:text-white/80">
            <li v-for="item in project.data.stack" :key="item.index">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
