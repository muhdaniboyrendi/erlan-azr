<template>
  <div class="bg-primary/15 dark:bg-dark min-h-screen">
    <div
      class="absolute -top-100 -right-100 w-200 h-200 rounded-full bg-linear-to-bl/oklch from-primary via-primary/70 to-primary/0 blur-2xl"
    ></div>
    <Header />
    <slot />
  </div>
</template>
