<script setup>
import { state } from "../state";
</script>

<template>
  <div class="pane">
    <table class="table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Kind</th>
          <th>Date Modified</th>
          <th>Author</th>
        </tr>
      </thead>
      <tbody>
        <tr class="file_arq"
				v-for="note in Object.values(state.notesMap)"
				:key="note.id"
				>
          <td>{{note.name}}</td>
          <td>{{note.kind}}</td>
          <td>{{new Date(note.dateCreated).toLocaleDateString()}}</td>
          <td>{{note.author}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
