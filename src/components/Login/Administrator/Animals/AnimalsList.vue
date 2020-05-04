<template>
  <div class=list>
    <div class="breadcrumb"
         v-for="(animal) of animals"
         :key="animal.id">
      <div class="list-item-content">
        <div class="name">
          Имя: {{animal.name}}
        </div>
        <br>
        <div class="species">
          Вид: {{animal.species.name}}
          <br>
          Тип: {{animal.species.type}}
          <br>
          Необходимость в новом помещении на зиму {{animal.species.needWarmPlace ? "есть" : "нет"}}
          <br>
          Приемлимый возрас для родов начинается с {{animal.species.ageForChildbirth}} лет
        </div>
        <br>
        <div class="information">
          Пол: {{animal.gender}}
          <br>
          Номер клетки: {{animal.cage}}
          <br>
          Дата появления в зоопарке: {{getReceiptDate(animal)}}
          <br>
          Количество потомства: {{animal.numberOfOffspring}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import RestService from "@/service/RestService";
    import moment from "moment";

    export default {
        name: 'animalsList',
        data() {
            return {
                animals: []
            }
        },
        methods: {
            getReceiptDate(animal) {
                return moment(animal.receiptDate).calendar();
            },
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

  .list {
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 65%;
    margin-left: 7%;
  }

  .list-item-content {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }

  .name {
    color: honeydew;
    font-size: large;
    font-weight: bolder;
  }

  .species {
    color: lightsteelblue;
    font-size: large;
    font-weight: bolder;
  }

  .information {
    color: cadetblue;
    font-size: large;
    font-weight: bolder;
  }

</style>
