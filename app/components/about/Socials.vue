<template>
  <div class="max-w-6xl mx-auto px-3 py-10">
    <div class="bg-linear-to-b/oklch from-primary to-secondary p-0.5 rounded-3xl">
      <div class="p-5 bg-white/80 rounded-3xl dark:bg-dark/90">
        <div class="flex justify-between items-center">
          <h1
            class="text-2xl md:text-3xl text-dark text-center font-bold dark:text-white"
          >
            Get in touch
          </h1>
          <i
            class="bi bi-globe-asia-australia text-2xl md:text-3xl bg-linear-to-br/oklch from-primary to-secondary bg-clip-text text-transparent"
          ></i>
        </div>
        <hr class="my-4 border-t border-dark/50 dark:border-white/50" />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <AboutSocialCard />
        </div>
      </div>
    </div>
  </div>
</template>
