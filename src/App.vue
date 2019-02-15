<template>
  <div id="app">
    <app-header>
      <template v-slot:logo>
        <img src="./assets/logo.jpg" alt="Falafelburg">
      </template>
      <template v-slot:navigation>
        <navigation />
      </template>
    </app-header>
    <router-view />
  </div>
</template>

<script>
import AppHeader from './components/Header';
import Navigation from './components/Navigation';

export default {
  components: { AppHeader, Navigation },
};
</script>
