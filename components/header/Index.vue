<script setup>
const hamburger = ref(null);
const hamburgerTop = ref(null);
const hamburgerMid = ref(null);
const hamburgerBottom = ref(null);
const bottomNav = ref('')

const hamburgerMenu = () => {
  hamburger.value.classList.toggle("hidden");
  hamburgerTop.value.classList.toggle("rotate-45");
  hamburgerBottom.value.classList.toggle("-rotate-45");
  hamburgerMid.value.classList.toggle("w-0");
  hamburgerMid.value.classList.toggle("w-4");
  bottomNav.value.classList.toggle("rounded-b-[2.5rem]");
};
</script>

<template>
  <nav class="fixed w-full z-20 top-3 flex justify-center px-3">
    <div
      class="bg-white/50 backdrop-blur-md rounded-2xl w-full max-w-4xl border border-gray-200/60 dark:bg-gray-900/50 dark:border-gray-700/60"
    >
      <div
        class="w-full flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <a href="https://flowbite.com/" class="flex items-center space-x-3">
          <span
            class="self-center text-3xl font-semibold whitespace-nowrap dark:text-white font-exo"
            >Erlan Azr</span
          >
        </a>
        <div class="flex md:order-2 space-x-3 md:space-x-0">
          <div class="flex items-center space-x-2">
            <Icon name="hugeicons:sun-03" size="23" class="text-white" />
            <label class="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div
                class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"
              ></div>
            </label>
            <Icon name="hugeicons:moon-02" size="23" class="text-white" />
          </div>

          <button
            @click="hamburgerMenu"
            type="button"
            class="block items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none dark:text-gray-400"
          >
            <span
              ref="hamburgerTop"
              class="border-t-2 border-slate-600 dark:border-slate-300 w-6 block transition-all origin-top-left"
            ></span>
            <span
              ref="hamburgerMid"
              class="border-t border-b border-slate-600 dark:border-slate-300 w-4 block my-[0.4rem]"
            ></span>
            <span
              ref="hamburgerBottom"
              class="border-b-2 border-slate-600 dark:border-slate-300 w-6 block transition-all origin-bottom-left"
            ></span>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul
            class="flex flex-col p-4 md:p-0 mt-4 font-semibold md:space-x-8 md:flex-row md:mt-0"
          >
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
                >Home</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >About</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >Services</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >Contact</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
