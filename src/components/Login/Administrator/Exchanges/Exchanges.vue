<template>
  <div>
    <h1>Обмены с другими зоопарками</h1>
    <div class="page-container">
      <ExchangeAddForm></ExchangeAddForm>
      <div class="form-container">
        <ZooAddForm></ZooAddForm>
        <ExchangeAddForm></ExchangeAddForm>
      </div>
      <div class="list-container">
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
    import ZooListForm from "./ZooListForm";

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
            ZooAddForm,
            ZooListForm
        }


    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    text-align: center;
  }

  .form-container {
    display: flex;
    flex-direction: row;
  }

  .list-container {
    display: flex;
    flex-direction: row;
  }

  .page-container {
    display: flex;
    flex-direction: column;
  }
</style>
