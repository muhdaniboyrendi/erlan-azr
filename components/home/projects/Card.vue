<template>
  <div
    class="relative p-6 bg-tertiary/10 border border-dark/10 dark:border-white/10 rounded-2xl overflow-hidden"
  >
    <div
      class="absolute top-0 left-0 h-1 w-full bg-linear-to-r/oklch from-primary to-secondary"
    ></div>
    <div class="flex flex-wrap mt-1 gap-y-4">
      <div class="w-full sm:w-2/5 md:w-full lg:w-2/5">
        <img
          src="/projects/ea-invitation.png"
          alt="project"
          class="rounded-md"
        />
      </div>
      <div class="w-full sm:w-3/5 md:w-full lg:w-3/5 sm:pl-5 md:pl-0 lg:pl-5">
        <h3
          class="text-xl text-dark font-semibold font-secondary mb-2 dark:text-white"
        >
          Project
        </h3>
        <p class="text-sm text-dark/80 dark:text-white/80">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, quod.
        </p>
        <div class="flex items-center mt-4">
          <a href="#" class="text-sm text-dark/70 font-semibold hover:underline dark:text-white/70"
            >View Project<i class="bi bi-arrow-right ml-1"></i></a
          >
          <span class="mx-2 text-dark/30 dark:text-white/30">|</span>
          <a href="#" class="text-sm text-dark/70 font-semibold hover:underline dark:text-white/70"
            ><i class="bi bi-link-45deg mr-1"></i>Live Demo</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
