<script setup>
const skills = [
  {
    title: "Languages",
    icon: "bi bi-code-slash",
    items: ["HTML", "CSS", "JavaScript", "PHP"],
  },
  {
    title: "Frontend",
    icon: "bi bi-laptop",
    items: ["Nuxt", "Vue", "Tailwind", "Bootstrap"],
  },
  {
    title: "Backend",
    icon: "bi bi-cpu",
    items: ["Laravel", "MySQL", "SQLite"],
  },
];
</script>

<template>
  <div class="max-w-6xl mx-auto px-3 py-20">
    <h1
      class="text-4xl z-10 mb-10 text-dark text-center font-bold dark:text-white"
    >
      Skills
    </h1>
    <div
      class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
    >
      <AboutSkillCard :title="skills[0].title" :icon="skills[0].icon" :items="skills[0].items" />
      <AboutSkillCard :title="skills[1].title" :icon="skills[1].icon" :items="skills[1].items" />
      <AboutSkillCard :title="skills[2].title" :icon="skills[2].icon" :items="skills[2].items" />
    </div>
    <div
      class="max-w-6xl mx-auto px-3 flex flex-wrap justify-center items-center gap-5"
    >
    </div>
  </div>
</template>
