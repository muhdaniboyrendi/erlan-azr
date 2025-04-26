<template>
  <div class="w-full py-10 px-3">
    <div
      class="max-w-4xl mx-auto bg-linear-to-b/oklch from-primary to-secondary p-0.5 rounded-3xl hover:from-secondary hover:to-primary transition duration-1000 ease-out"
    >
      <div
        class="flex flex-wrap items-center gap-y-10 bg-white/80 rounded-3xl p-8 dark:bg-dark/90"
      >
        <div class="w-full lg:w-1/2 px-10">
          <NuxtImg src="/img/software.png" alt="komputer software" class="w-full" />
        </div>
        <div class="w-full lg:w-1/2">
          <h2 class="text-2xl font-exo font-bold text-dark dark:text-white">
            Software
          </h2>
          <ul
            class="list-disc list-inside mt-5 text-dark/80 font-semibold dark:text-white/80"
          >
            <li class="mb-1">
              Editor:
              <a
                href="https://code.visualstudio.com/"
                target="_blank"
                class="ml-1 underline font-light hover:text-tertiary transition"
                >Visual Studio Code</a
              >
            </li>
            <li class="mb-1">
              Database Management:
              <a
                href="https://dbeaver.io/"
                target="_blank"
                class="ml-1 underline font-light hover:text-tertiary transition"
                >DBeaver</a
              >
            </li>
            <li class="mb-1">
              Design:
              <a
                href="https://www.figma.com/"
                target="_blank"
                class="ml-1 underline font-light hover:text-tertiary transition"
                >Figma</a
              >
            </li>
            <li class="mb-1">
              REST API Testing:
              <a
                href="https://www.postman.com/"
                target="_blank"
                class="ml-1 underline font-light hover:text-tertiary transition"
                >PostMan</a
              >
            </li>
            <li class="mb-1">
              Vertion Control System:
              <a
                href="https://git-scm.com/"
                target="_blank"
                class="ml-1 underline font-light hover:text-tertiary transition"
                >Git</a
              >
            </li>
            <li class="mb-1">
              Container App Management:
              <a
                href="https://www.docker.com/"
                target="_blank"
                class="ml-1 underline font-light hover:text-tertiary transition"
                >Docker Desktop</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
