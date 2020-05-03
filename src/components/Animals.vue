<template>
  <div>
    <h1>Animals</h1>
    {{JSON.stringify(animals)}}
  </div>
</template>
<script>
    import RestService from "@/service/RestService";
    export default {
        name: 'animals',
        data() {
            return {
                animals: []
            }
        },
        created: function () {
            RestService.getAnimals().then((response) => this.animals = response.data);
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    text-align: center;
  }
</style>
