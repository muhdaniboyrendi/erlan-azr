<script setup>
const hamburger = ref("hidden");
const hamburgerTop = ref("");
const hamburgerMid = ref("w-4");
const hamburgerBottom = ref("");

const hamburgerMenu = () => {
  hamburger.value = hamburger.value === "" ? "hidden" : "";
  hamburgerTop.value = hamburger.value === "" ? "rotate-45" : "";
  hamburgerBottom.value = hamburger.value === "" ? "-rotate-45" : "";
  hamburgerMid.value = hamburgerMid.value === "w-4" ? "w-0" : "w-4";
};
</script>

<template>
  <nav class="fixed w-full z-20 top-3 flex justify-center px-3">
    <div
      class="bg-white/50 backdrop-blur-md rounded-2xl w-full max-w-4xl dark:bg-dark/50"
    >
      <div
        class="w-full flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <HeaderNavBrand />
        <div class="flex md:order-2 space-x-3 md:space-x-0">
          <div class="hidden md:flex md:space-x-2">
            <Icon name="hugeicons:sun-03" size="23" class="text-dark dark:text-gray-400" />
            <HeaderDarkModeToggle />
            <Icon name="hugeicons:moon-02" size="23" class="text-dark dark:text-gray-400" />
          </div>

          <button
            @click="hamburgerMenu"
            type="button"
            class="flex flex-wrap justify-end items-center space-y-2 p-2 w-10 h-10 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none dark:text-gray-400"
          >
            <span
              class="border-t border-b border-dark/90 dark:border-gray-100 w-6 block transition-all origin-top-left"
              :class="hamburgerTop"
            ></span>
            <span
              class="border-t border-b border-dark/90 dark:border-gray-100 block transition-all"
              :class="hamburgerMid"
            ></span>
            <span
              class="border-t border-b border-dark/90 dark:border-gray-100 w-6 block transition-all origin-bottom-left"
              :class="hamburgerBottom"
            ></span>
          </button>
        </div>
        <div
          class="items-center justify-between w-full md:flex md:w-auto md:order-1"
          :class="hamburger"
          id="navbar-sticky"
        >
          <HeaderMobileNavLink />
          <ul
            class="hidden md:flex p-4 md:p-0 mt-4 font-semibold md:space-x-8 md:flex-row md:mt-0"
          >
            <HeaderNavLink title="Home" />
            <HeaderNavLink title="About" />
            <HeaderNavLink title="Projects" />
            <HeaderNavLink title="Contact" />
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
