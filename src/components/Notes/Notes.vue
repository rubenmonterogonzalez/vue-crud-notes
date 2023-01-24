<template>
  <section class="pt-4">
    <div
      v-for="note in store.notes"
      :key="note.id"
      class="flex mt-4 max-w-3xl overflow-hidden bg-white rounded-lg shadow-lg m-auto"
    >
      <div class="w-full p-4 md:p-4">
        <p class="mt-2 text-sm text-gray-600">{{ note.content }}</p>
        <small class="flex justify-end text-gray-300"
          >{{ note.content.length }}
          {{ note.content.length > 1 ? "characters" : "character" }}</small
        >
        <div class="flex justify-between mt-6 flex-col sm:flex-row">
          <button
            class="px-32 py-2 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-blue-500 rounded 0 hover:bg-blue-600 ray-600 focus:outline-none focus:bg-blue-700"
          >
            EDIT
          </button>
          <button
            @click="store.deleteNote"
            class="px-32 py-2 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-red-500 rounded 0 hover:bg-red-600 ray-600 focus:outline-none focus:bg-red-700 mt-4 sm:mt-0"
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useStoreNotes } from "@/store/storeNotes";

const store = useStoreNotes();
</script>
