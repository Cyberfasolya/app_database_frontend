<template>
  <div>
    <h1>Обмены с другими зоопарками</h1>
    <div class="page-container">
      <div class="form-container">
      <ZooAddForm></ZooAddForm>
        <ExchangeAddForm></ExchangeAddForm>
      </div>
      <div class="app-container">
        <ZoosList></ZoosList>
        <ExchangesList></ExchangesList>
      </div>
    </div>
  </div>
</template>
<script>
    import ExchangesList from "./ExchangesList";
    import ZoosList from "./ZoosList";
    import ZooAddForm from "./ZooAddForm";
    import ExchangeAddForm from "./ExchangeAddForm"

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
            ZoosList,
            ExchangeAddForm,
            ZooAddForm
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

  .form-container {
    display: flex;
    flex-direction: row;
  }

  .page-container {
    display: flex;
    flex-direction: column;
  }
</style>
