<template>
  <div class="about">
    <h1>This is an about page</h1>

    <div v-for="(doc,index) in currentDocs" :key="index">
      ID: {{doc.id}} , DATA : {{doc.data()}}
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
