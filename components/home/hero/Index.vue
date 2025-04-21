<template>
  <div>
    <div class="mx-auto max-w-6xl flex flex-wrap space-y-20 lg:space-y-0 py-16 dark:text-white">
      <div class="w-full lg:w-1/2 px-3 flex items-center">
        <div class="w-full font-secondary">
          <h1 class="text-3xl lg:text-4xl font-semibold mb-3">Hi There,</h1>
          <h1 class="text-3xl lg:text-4xl font-semibold mb-5">
            I'm
            <span
              class="text-4xl lg:text-5xl bg-linear-to-r/oklch from-primary to-secondary text-transparent bg-clip-text"
              >Muhdani Boyrendi Erlan Azhari</span
            >
          </h1>
          <h2 class="text-lg lg:text-xl font-secondary mb-10">
            Web Developer | Programmer
          </h2>
          <div class="flex gap-x-8 text-dark/80 text-2xl bg-dark/8 rounded-2xl p-4 w-fit dark:text-white/80 dark:bg-white/5">
            <HomeHeroSocialLink link="https://www.instagram.com/erlan.azr_?igsh=MTN3anUxNDZiZjA4MA==" icon="bi bi-instagram" />
            <HomeHeroSocialLink link="https://github.com/muhdaniboyrendi" icon="bi bi-github" />
            <HomeHeroSocialLink link="https://www.linkedin.com/in/muhdani-boyrendi/" icon="bi bi-linkedin" />
            <HomeHeroSocialLink link="https://wa.me/+6282220633024" icon="bi bi-whatsapp" />
            <HomeHeroSocialLink link="boyrendierlan@gmailcom" icon="bi bi-envelope" />
          </div>
        </div>
      </div>
      <div class="w-full lg:w-1/2 px-3 flex items-center">
        <HomeHeroPicture />
      </div>
      <div class="w-full px-3 pt-15">
        <HomeHeroCtaButton />
      </div>
    </div>
  </div>
</template>
