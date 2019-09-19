<template>
  <div>
    <v-app class="grey lighten-3">
      <v-content>
        <Navbar/>
        <v-container>
          <router-view></router-view>
        </v-container>
      </v-content>
    </v-app>
  </div>

</template>

<script>
  import Navbar from './components/Navbar'
  export default {
    name: 'App',

    components: {Navbar},
    data: () => ({
      //
    }),
  };
</script>
