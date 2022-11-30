<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";

const isOpen = ref(false);

const openMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <header class="shadow-md h-16 p-4">
    <nav class="flex flex-wrap items-center justify-between">
      <h1 class="text-2xl font-bold">Crud Notes</h1>
      <button
        @click="openMenu"
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        :class="isOpen ? 'block' : 'hidden'"
        class="w-full md:block md:w-auto"
        id="navbar-multi-level"
      >
        <ul
          class="flex flex-col p-3 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white"
        >
          <RouterLink
            to="/"
            class="mx-2 my-auto hover:bg-slate-100 md:hover:bg-white"
            >Home</RouterLink
          >
          <RouterLink
            to="/stats"
            class="mx-2 my-auto hover:bg-slate-100 md:hover:bg-white"
            >Stats</RouterLink
          >
        </ul>
      </div>
    </nav>
  </header>
</template>
