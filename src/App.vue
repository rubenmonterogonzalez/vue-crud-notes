<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "./components/Layout/Header.vue";
</script>

<template>
  <Header />
  <main class="bg-blue-100 w-full h-screen">
    <RouterView />
  </main>
</template>
