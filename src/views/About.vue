<template>
  <div class="about">
    <h1 class="mb-4">About my project : [Firestore database] </h1>

    <div v-for="(doc,index) in currentDocs" :key="index">
      ID: {{doc.id}} , <br/>
      DATA : <br/>
      Title : {{doc.data().title}}<br/>
      Description : {{doc.data().description}}<br/>
      website : {{doc.data().website}}
    </div>

  </div>
</template>

<script>
  import  db from '../database' ;

  export default {
    data(){
      return{
        currentDocs : []
      };
    },
    mounted() {
      db.collection('projects').get().then( (snapshot) => {
        this.currentDocs = snapshot.docs;
      });

    }

  }
</script>

<style scoped lang="scss">

</style>
