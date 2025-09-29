<template>
  <div>
    <motion
      :initial="{ transform: 'translateY(-500px)', opacity: 0 }"
      :animate="{ transform: 'translateY(0px)', opacity: 1 }"
      :transition="{ type: 'spring', duration: 1 }"
    >
      <HomeHero />
      <HomeSponsor />
      <HomeAbout />
      <HomeProjects />
    </motion>
  </div>
</template>
