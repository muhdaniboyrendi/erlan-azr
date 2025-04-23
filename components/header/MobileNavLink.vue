<script setup></script>

<template>
  <div
    class="flex justify-center gap-4 mt-5 max-w-md mx-auto md:hidden dark:text-white/70"
  >
    <NuxtLink
      to="/"
      class="flex items-center w-1/2 text-center bg-dark/20 p-3 rounded-full dark:bg-white/10"
    >
      <div
        class="flex justify-center items-center w-10 h-10 mr-2 rounded-full bg-dark/30 dark:bg-dark/50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-house-door-fill text-white"
          viewBox="0 0 16 16"
        >
          <path
            d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"
          />
        </svg>
      </div>
      <span class="mt-1 dark:text-text_secondary_dark text-xs">Home</span>
    </NuxtLink>
    <NuxtLink
      to="/about"
      class="flex items-center w-1/2 text-center bg-dark/20 p-3 rounded-full dark:bg-white/10"
    >
      <div
        class="flex justify-center items-center w-10 h-10 mr-2 rounded-full bg-opacity-20 bg-dark/30 dark:bg-dark/50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-info-circle-fill text-white"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
          />
        </svg>
      </div>
      <span class="mt-1 dark:text-text_secondary_dark text-xs">About</span>
    </NuxtLink>
  </div>
  <div
    class="py-6 bg-dark/20 rounded-[2rem] flex items-center mt-4 max-w-md mx-auto md:hidden dark:bg-white/10 dark:text-white/70"
  >
    <NuxtLink to="/projects" class="w-1/3 flex flex-wrap justify-center mt-1">
      <div
        class="flex justify-center items-center w-10 h-10 rounded-full bg-opacity-20 bg-dark/30 dark:bg-dark/50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-kanban text-white"
          viewBox="0 0 16 16"
        >
          <path
            d="M13.5 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm-11-1a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"
          />
          <path
            d="M6.5 3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm-4 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm8 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1z"
          />
        </svg>
      </div>
      <span
        class="w-full text-center text-xs mt-2 dark:text-text_secondary_dark"
        >Projects</span
      >
    </NuxtLink>
    <NuxtLink to="/uses" class="w-1/3 flex flex-wrap justify-center mt-1">
      <div
        class="flex justify-center items-center w-10 h-10 rounded-full bg-opacity-20 bg-dark/30 dark:bg-dark/50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-tools text-white"
          viewBox="0 0 16 16"
        >
          <path
            d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3q0-.405-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708M3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z"
          />
        </svg>
      </div>
      <span
        class="w-full text-center text-xs mt-2 dark:text-text_secondary_dark"
        >Uses</span
      >
    </NuxtLink>
    <NuxtLink class="w-1/3 flex flex-wrap justify-center mt-1">
      <div
        class="flex justify-center items-center w-10 h-10 rounded-full bg-opacity-20 bg-dark/30 dark:bg-dark/50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-person-rolodex text-white"
          viewBox="0 0 16 16"
        >
          <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
          <path
            d="M1 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h.5a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6.707L6 1.293A1 1 0 0 0 5.293 1zm0 1h4.293L6 2.707A1 1 0 0 0 6.707 3H15v10h-.085a1.5 1.5 0 0 0-2.4-.63C11.885 11.223 10.554 10 8 10c-2.555 0-3.886 1.224-4.514 2.37a1.5 1.5 0 0 0-2.4.63H1z"
          />
        </svg>
      </div>
      <span
        class="w-full text-center text-xs mt-2 dark:text-text_secondary_dark"
        >Contact</span
      >
    </NuxtLink>
  </div>
  <div
    class="p-3 mt-4 mb-1 bg-dark/20 rounded-full flex items-center justify-between max-w-md mx-auto md:hidden dark:bg-white/10 dark:text-white/70"
  >
    <div class="flex items-center">
      <div
        class="flex justify-center items-center w-10 h-10 mr-2 rounded-full bg-dark/30 dark:bg-tertiary"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-moon-fill text-white"
          viewBox="0 0 16 16"
        >
          <path
            d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"
          />
        </svg>
      </div>
      <span class="mt-1 dark:text-text_secondary_dark text-xs">Dark Mode</span>
    </div>
    <HeaderDarkModeToggle class="mr-3 md:ml-20" />
  </div>
</template>
