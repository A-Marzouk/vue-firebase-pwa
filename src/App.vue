<template>
  <v-app class="grey lighten-3">
    <v-content>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>

      <v-container>
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<style lang="scss">

</style>
