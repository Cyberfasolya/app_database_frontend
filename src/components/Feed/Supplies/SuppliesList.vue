<template>
  <div class=list>
    <h3>Список поставок</h3>
    <div class="breadcrumb"
         v-for="(supply) of supplies">
      <div class="list-item-content">
        <div class="base-info">
          Название поставщика: {{supply.providerName}}
          <br>
          Название корма: {{supply.feedName}}
          <br>
        </div>
        <div class="info">
          Дата поставки: {{getSupplyDate(supply)}}
          <br>
          Кол-во корма: {{supply.feedAmount}} кг
          <br>
          Цена: {{supply.price}} тыс. рублей
          <br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import moment from "moment";

    export default {
        props: ['supplies'],
        name: 'suppliesList',
        data() {
            return {}
        },
        methods: {
            getSupplyDate(supply) {
                return moment(supply.supplyDate).calendar();
            },
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    text-align: center;
  }

  .breadcrumb {
    margin-bottom: 5px;
  }

  .list {
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 42%;
    margin-left: 1%;
  }

  .list-item-content {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }

  .info {
    color: lightsteelblue;
    font-size: large;
    font-weight: bolder;
  }

  .base-info {
    color: honeydew;
    font-size: large;
    font-weight: bolder;
  }


</style>
