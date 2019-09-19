<template>
    <div class="about">
        <h1 class="mb-4">About my project : [Firestore database] </h1>

        <div v-for="(doc,index) in currentDocs" :key="index">
            ID: {{doc.id}} , <br/>
            DATA : <br/>
            Title : {{doc.data().title}}<br/>
            Description : {{doc.data().description}}<br/>
            website: {{doc.data().website}}
            <hr>
        </div>

    </div>
</template>

<script>
    import db from '../database' ;

    export default {
        data() {
            return {
                currentDocs: []
            };
        },
        mounted() {
            db.collection('projects').onSnapshot((snapshot) => {
                snapshot.docChanges().forEach((change) => {
                    if (change.type === 'added') {
                        this.currentDocs.push(change.doc);
                    }

                    if (change.type === 'removed') {
                        this.currentDocs.forEach((doc, index) => {
                            if (doc.id === change.doc.id) {
                                this.currentDocs.splice(index, 1)
                            }
                        });
                    }

                    if (change.type === 'modified') {
                        // replace the document with the updated document
                        this.currentDocs.forEach((doc, index) => {
                            if (doc.id === change.doc.id) {
                                this.currentDocs.splice(index, 1, change.doc)
                            }
                        });

                    }
                })
            });

        }

    }
</script>

<style scoped lang="scss">

</style>
