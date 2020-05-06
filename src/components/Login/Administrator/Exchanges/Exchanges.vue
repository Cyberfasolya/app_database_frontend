<template>
  <div>
    <h1>Обмены с другими зоопарками</h1>
  </div>
</template>
<script>
  import RestService from "../../../../service/RestService";
    export default {
        name: 'exchanges',
        data() {
            return {
                exchanges: [],
                zoos: []
            }
        },

    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    text-align: center;
  }
</style>
