<script setup>
const projectStore = useProjectStore();

const projects = projectStore.projects
</script>

<template>
  <div class="w-full px-4 py-10">
    <div class="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
      <ProjectsProjectCard v-for="project in projects" :key="project.slug" :project="project" />
    </div>
  </div>
</template>
