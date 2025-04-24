<template>
  <div class="w-full px-4 py-20">
    <h3
      class="text-center text-3xl text-dark font-semibold font-exo mb-15 dark:text-white"
    >
      My Latest Projects
    </h3>
    <div class="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
      <ProjectsProjectCard />
      <ProjectsProjectCard />
    </div>
    <NuxtLink
      to="/projects"
      class="text-lg text-white mt-15 mx-auto block p-0.5 font-semibold bg-linear-to-br/oklch from-primary to-secondary rounded-full hover:cursor-pointer group"
    >
      <div
        class="bg-white/80 text-dark py-2 px-8 lg:py-3 lg:px-12 rounded-full group-hover:bg-transparent group-hover:text-white dark:text-white dark:bg-dark/90 transition"
      >
        View All Projects
      </div>
    </NuxtLink>
  </div>
</template>
