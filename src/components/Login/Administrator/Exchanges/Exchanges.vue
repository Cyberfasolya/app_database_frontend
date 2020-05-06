<template>
  <div>
    <h1>Обмены с другими зоопарками</h1>
    <div class="app-container">
      <ZoosList></ZoosList>
      <ExchangesList></ExchangesList>
    </div>
  </div>
</template>
<script>
   import ExchangesList from "./ExchangesList";
   import ZoosList from "./ZoosList";

    export default {
        name: 'exchanges',
        data() {
            return {
                exchanges: [],
                zoos: []
            }
        },
        components: {
            ExchangesList,
            ZoosList
        }


    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    text-align: center;
  }
  .app-container {
    display: flex;
    flex-direction: row;
  }

  .page-container {
    display: flex;
    flex-direction: column;
  }
</style>
