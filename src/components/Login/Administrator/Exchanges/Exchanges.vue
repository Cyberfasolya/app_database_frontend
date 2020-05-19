<template>
  <div>
    <h1>Обмены с другими зоопарками</h1>
    <div class="page-container">
      <ExchangeAddForm></ExchangeAddForm>
      <div class="form-container">
        <ZooAddForm @zoo-added="loadZoos"/>
        <ZooListForm></ZooListForm>
      </div>
      <div class="list-container">
        <ZoosList :zoos="this.zoos"></ZoosList>
        <ExchangesList :exchanges="this.exchanges"></ExchangesList>
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
    import RestService from "../../../../service/RestService";

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
        },
        methods:
            {
                loadZoos() {
                    RestService.getZoos().then((response) => this.zoos = response.data);
                },
                loadExchanges() {
                    RestService.getExchanges().then((response) => this.exchanges = response.data);
                },
            },
        mounted: function () {
            this.loadZoos();
            this.loadExchanges();
        },
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    text-align: center;
    margin-bottom: 30px;
    margin-top: 10px;
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
