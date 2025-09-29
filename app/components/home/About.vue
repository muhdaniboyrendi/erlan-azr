<template>
  <div class="w-full px-3 py-10">
    <div class="mx-auto max-w-2xl flex">
      <div
        class="h-auto w-13 bg-linear-to-b/oklch from-primary to-secondary rounded-lg"
      ></div>
      <div class="pl-6">
        <h3
          class="text-base lg:text-lg text-primary uppercase tracking-widest mb-3"
        >
          Litle About Me
        </h3>
        <p
          class="text-lg/8 lg:text-xl/12 text-dark font-semibold tracking-wide mb-3 dark:text-white"
        >
          Hi, my name is Muhdani Boyrendi Erlan Azhari usually called Erlan. I
          was born in Karanganyar, Central Java, Indonesia, and I am currently
          21 y.o. I graduated from SMK Negeri 2 Karanganyar as a Software
          Engineering student. After that I studied at the Wali Barokah Islamic
          Boarding School in Kediri, East Java for about 1.5 years and continued
          to teaching islamic knowledge in Jombang, East Java for about 1.5
          years.
        </p>
        <NuxtLink
          to="/about"
          class="text-lg lg:text-xl text-primary font-bold tracking-widest hover:underline"
          >Read More <i class="bi bi-arrow-right"></i
        ></NuxtLink>
      </div>
    </div>
  </div>
</template>
