import { defineStore } from "pinia";

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [
        {
          id: "id1",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sit voluptate asperiores repellendus nemo unde nostrum reiciendis nobis iure blanditiis.",
        },
        {
          id: "id2",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        },
      ],
    };
  },
  actions: {
    addNote(newNoteContent: any) {
      const id = new Date().getTime().toString();

      const note = {
        id,
        content: newNoteContent,
      };

      this.notes.unshift(note);
    },
    deleteNote(idToDelete: any) {
      this.notes = this.notes.filter((note) => {
        return note.id !== idToDelete;
      });
    },
  },
});

15-6
