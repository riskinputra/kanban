<template>
  <v-app id="app">
    <header-navbar></header-navbar>
    <v-toolbar app></v-toolbar>
    <v-content>
      <v-container fluid grid-list-md>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
import HeaderNavbar from './components/HeaderNavbar'

export default {
  name: 'app',
  components: {
    'header-navbar': HeaderNavbar
  }
}
</script>

<style>
#app {
  font-family: 'Dosis', sans-serif;
}
</style>
