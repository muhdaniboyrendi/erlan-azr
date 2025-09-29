<script setup>
const isMenuOpen = ref(false);
const isScrolled = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 10;
  };
  window.addEventListener("scroll", handleScroll);
  onUnmounted(() => window.removeEventListener("scroll", handleScroll));
});
</script>

<template>
  <nav
    class="fixed w-full z-50 transition-all duration-300 ease-in-out"
    :class="isScrolled ? 'top-0 px-3 pt-3' : 'top-0 px-0 pt-0'"
  >
    <div
      class="w-full transition-all duration-500 ease-in-out"
      :class="[
        isScrolled
          ? 'max-w-6xl mx-auto rounded-full bg-white/50 dark:bg-dark/50 backdrop-blur-2xl shadow-xl shadow-cyan-400/10'
          : 'max-w-none rounded-none bg-transparent backdrop-blur-none shadow-none',
      ]"
    >
      <div
        class="w-full flex flex-wrap items-center justify-between mx-auto transition-all duration-500"
        :class="isScrolled ? 'p-4' : 'px-6 py-6'"
      >
        <HeaderNavBrand />

        <div class="flex md:order-2 items-center gap-4">
          <div
            class="hidden md:flex items-center gap-2 rounded-full px-3 py-1.5 transition-all duration-500"
            :class="
              isScrolled
                ? 'bg-dark/5 dark:bg-white/5'
                : 'bg-dark/5 dark:bg-white/5 backdrop-blur-md'
            "
          >
            <i
              class="bi bi-sun text-base text-amber-500 dark:text-gray-400 transition-colors"
            ></i>
            <HeaderDarkModeToggle />
            <i
              class="bi bi-moon text-base text-gray-400 dark:text-blue-400 transition-colors"
            ></i>
          </div>

          <button
            @click="toggleMenu"
            type="button"
            class="relative flex flex-col justify-center items-center w-10 h-10 md:hidden rounded-lg transition-all duration-300"
            :class="
              isScrolled
                ? 'hover:bg-gray-100 dark:hover:bg-white/5'
                : 'hover:bg-white/10 dark:hover:bg-white/5 backdrop-blur-md'
            "
            aria-label="Toggle menu"
          >
            <div
              class="flex flex-col justify-center items-center w-6 h-5 relative"
            >
              <span
                class="absolute h-0.5 w-6 transform transition-all duration-300 ease-out"
                :class="[
                  isMenuOpen ? 'rotate-45' : '-translate-y-2',
                  isScrolled
                    ? 'bg-dark/90 dark:bg-gray-100'
                    : 'bg-white dark:bg-gray-100',
                ]"
              ></span>
              <span
                class="absolute h-0.5 w-4 transform transition-all duration-300 ease-out"
                :class="[
                  isMenuOpen ? 'opacity-0' : 'opacity-100',
                  isScrolled
                    ? 'bg-dark/90 dark:bg-gray-100'
                    : 'bg-white dark:bg-gray-100',
                ]"
              ></span>
              <span
                class="absolute h-0.5 w-6 transform transition-all duration-300 ease-out"
                :class="[
                  isMenuOpen ? '-rotate-45' : 'translate-y-2',
                  isScrolled
                    ? 'bg-dark/90 dark:bg-gray-100'
                    : 'bg-white dark:bg-gray-100',
                ]"
              ></span>
            </div>
          </button>
        </div>

        <div
          class="w-full md:flex md:w-auto md:order-1 md:mt-0 transition-all duration-300 ease-in-out overflow-hidden md:overflow-visible"
          :class="isMenuOpen ? 'max-h-screen mt-4' : 'max-h-0'"
          id="navbar-sticky"
        >
          <div class="md:hidden">
            <HeaderMobileNavLink @toggle-nav="toggleMenu" />
          </div>

          <ul
            class="hidden md:flex p-4 md:p-0 font-semibold md:space-x-10 md:flex-row items-center"
          >
            <HeaderNavLink title="Home" path="/" />
            <HeaderNavLink title="About" path="/about" />
            <HeaderNavLink title="Projects" path="/projects" />
            <HeaderNavLink title="Uses" path="/uses" />
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
