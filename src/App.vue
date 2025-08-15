<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <q-layout view="lHh Lpr lFf">
   <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>Session Reports App</q-toolbar-title>
        <q-btn flat label="Sessions" to="/sessions" />
        <q-btn flat label="Reports" to="/reports" />
        <q-btn flat label="Diffusion" to="/diffusion" />
        <q-btn flat label="Schedule" to="/schedule" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
