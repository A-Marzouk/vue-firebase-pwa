<template>
    <nav>
        <v-toolbar app>
            <v-app-bar-nav-icon class="grey lighten-5" @click="drawer = !drawer"  v-if="!drawer"></v-app-bar-nav-icon>
            <v-btn icon v-if="drawer"  class="grey lighten-5" @click="drawer = !drawer">
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-toolbar-title class="grey--text text-uppercase">
                <span class="font-weight-light">Ahmed</span>
                <span>Marzouk</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn color="transparent" class="grey--text grey lighten-4" depressed>
                Contact
                <v-icon right>mdi-phone</v-icon>
            </v-btn>
        </v-toolbar>

        <v-navigation-drawer  v-model="drawer" app class="grey lighten-3">
            <NavList></NavList>
        </v-navigation-drawer>
    </nav>
</template>

<script>
    import NavList from './List'
    export default {
        name: "Navbar",
        components: {NavList},
        data(){
            return{
                drawer : false
            }
        }
    }
</script>

<style scoped>

</style>
