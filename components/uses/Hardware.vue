<template>
  <div class="w-full py-10 px-3">
    <div
      class="max-w-4xl mx-auto bg-linear-to-b/oklch from-primary to-secondary p-0.5 rounded-3xl hover:from-secondary hover:to-primary transition duration-1000 ease-out"
    >
      <div
        class="flex flex-wrap flex-row-reverse items-center gap-y-10 bg-white/80 rounded-3xl p-8 dark:bg-dark/90"
      >
        <div class="w-full lg:w-1/2 px-10">
          <NuxtImg src="/img/hardware.png" alt="komputer hardware" class="w-full" />
        </div>
        <div class="w-full lg:w-1/2">
          <h2 class="text-2xl font-exo font-bold text-dark dark:text-white">
            Hardware
          </h2>
          <ul
            class="list-disc list-inside mt-5 text-dark/80 font-semibold dark:text-white/80"
          >
            <li class="mb-1">Laptop: <span class="font-light">Lenovo Thinkpad X1 Carbon 7th Gen</span></li>
            <li class="mb-1">
              Specs:
              <ul class="list-disc list-inside ml-5">
                <li class="mb-1">
                  OS:
                  <a
                    href="https://www.microsoft.com/en-us/windows/business/windows-11-pro"
                    target="_blank"
                    class="ml-1 underline font-light hover:text-tertiary transition"
                    >Windows 11 Pro</a
                  >
                </li>
                <li class="mb-1">Processor : <span class="font-light">Intel Core i5-8265U</span></li>
                <li class="mb-1">RAM : <span class="font-light">8 GB</span></li>
                <li class="mb-1">Storage : <span class="font-light">256GB SSD M.2 NVMe</span></li>
              </ul>
            </li>
            <li class="mb-1">Keyboard: <span class="font-light">Rexus Legionare MX 5.1</span></li>
            <li class="mb-1">Mouse: <span class="font-light">Logitech M100r</span></li>
            <li class="mb-1">Deskmat: <span class="font-light">Orico</span></li>
            <li class="mb-1">
              TWS:
              <a
                href="https://www.realme.com/mea-en//realme-buds-t100"
                target="_blank"
                class="ml-1 underline font-light hover:text-tertiary transition"
                >Realme Burs T100</a
              >
            </li>
            <li class="mb-1">
              Phone:
              <a
                href="https://www.samsung.com/id/smartphones/galaxy-a/galaxy-a35-5g-awesome-lilac-256gb-sm-a356elvgxid/"
                target="_blank"
                class="ml-1 underline font-light hover:text-tertiary transition"
                >Samsung Galaxy A35</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
