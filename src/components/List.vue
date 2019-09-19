<template>
    <div>
        <v-list>
            <v-subheader>
                <v-icon left small>mdi-link</v-icon>
                Quick links
            </v-subheader>
            <v-list-item-group v-model="selectedItem" color="primary">
                <v-list-item v-for="(item, i) in items" :key="i"  router :to="item.route">
                    <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>{{item.text}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </div>
</template>

<script>
    export default {
        name: "List",
        data() {
            return {
                selectedItem: 0,
                items: [
                    {text: 'Home', icon: 'mdi-home', route: '/'},
                    {text: 'About', icon: 'mdi-account', route: '/about'},
                ],
            }
        },
        methods: {}
    }
</script>

<style scoped>

</style>
