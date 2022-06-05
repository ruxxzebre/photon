<script setup>
import {
  isAnyNoteOpened,
  createNote,
  getCurrentNote,
  openNote,
	closeNote,
  state,
  getNote,
  openLatestNote,
} from "../state";

function newNote() {
  const id = createNote();
  openNote(id);
}

function editNoteName() {

}

if (!state.currentEditorNoteID) {
  openLatestNote()();
}

</script>

<template>
  <div class="pane">
    <div class="tab-group">
      <div
        v-for="item in state.openedNoteIDs"
        :key="item"
        class="tab-item"
        :class="{ active: item == state.currentEditorNoteID }"
        @click="openNote(item)"
      >
        <span class="icon icon-cancel icon-close-tab" @click="closeNote(item)" />
				{{ getNote(item).name }}
      </div>
      <div
        class="tab-item tab-item-fixed"
        @click="newNote"
      >
        <span class="icon icon-plus" />
      </div>
    </div>
    <span v-if="state.currentEditorNoteID">
      <v-md-editor
        :key="state.currentEditorNoteID" 
        v-model="state.notesMap[state.currentEditorNoteID].text"
        height="100%"
      />
    </span>
  </div>
</template>
