<template>
  <section class="pt-4">
    <div
      class="flex max-w-3xl overflow-hidden bg-blue-500 rounded-lg shadow-lg m-auto"
    >
      <form @submit.prevent class="w-full p-4 md:p-4">
        <div class="form-group mb-6">
          <textarea
            v-model="newNote"
            ref="newNoteRef"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none h-40"
            rows="3"
            placeholder="Add a new note"
          ></textarea>
        </div>
        <button
          @click="addNote"
          :disabled="!newNote"
          :class="
            newNote
              ? 'cursor-pointer hover:bg-blue-300 hover:shadow-lg focus:bg-blue-300 focus:shadow-lg focus:outline-none focus:ring-0'
              : 'cursor-not-allowed'
          "
          class="w-full px-6 py-2.5 bg-blue-200 font-semibold text-xs leading-tight uppercase rounded shadow-md active:bg-blue-400 active:shadow-lg transition duration-150 ease-in-out"
        >
          Add a new Note
        </button>
      </form>
    </div>
  </section>

  <Notes />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useStoreNotes } from "@/store/storeNotes";
import Notes from "@/components/Notes/Notes.vue";

const store = useStoreNotes();

const newNote = ref("");
const newNoteRef = ref(null);

const addNote = () => {
  store.addNote(newNote.value);
  newNote.value = "";
  newNoteRef.value.focus();
};
</script>
