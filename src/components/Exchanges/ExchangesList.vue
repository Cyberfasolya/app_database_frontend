<template>
  <div class=list>
    <h3> Список обменов </h3>
    <div class="breadcrumb"
         v-for="(exchange) of exchanges">
      <div class="list-item-content">
        <div class="main-information">
          Название зоопарка: {{exchange.zoo.name}}
        </div>
        <br>
        <div class="basic-information">
          Имя животного: {{exchange.animal.name}}
          <br>
          Вид животного: {{exchange.animal.species.name}}
          <br>
          {{getSide(exchange.side)}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>

    export default {
        name: 'exchangesList',
        props: ['exchanges'],
        data() {
            return {}
        },
        methods: {
            getSide(side) {
                if (side === true) {
                    return "Получение животного";
                }
                return "Отдача животного";
            }
        },
    }
</script>


<style scoped>
  h1 {
    text-align: center;
  }

  .list {
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 65%;
    margin-right: 3%;
    margin-left: 1%;
  }

  .list-item-content {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }

  .main-information {
    color: honeydew;
    font-size: large;
    font-weight: bolder;
  }

  .basic-information {
    color: cadetblue;
    font-size: large;
    font-weight: bolder;
  }
</style>
