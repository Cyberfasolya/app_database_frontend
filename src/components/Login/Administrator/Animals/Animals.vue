<template>
  <div>
    <h1>Животные</h1>
    <div class="app-container">
      <div class="filters">
        <div class="form-group">
          <label for="exampleSelect1">Выбор вида животного</label>
          <select class="form-control" id="exampleSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        тт
      </div>
    <AnimalsList> </AnimalsList>
  </div>
  </div>
</template>

<script>
    import RestService from "@/service/RestService";
    import moment from "moment";
    import AnimalsList from "./AnimalsList";
    export default {
        name: 'animals',
        data() {
            return {
                animals: []
            }
        },
        methods:{
            getReceiptDate(animal){
                return moment(animal.receiptDate).calendar();
            },
        },
        created: function () {
            RestService.getAnimals().then((response) => this.animals = response.data);
        },
        components:{
            AnimalsList
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
    color: goldenrod;
    font-size: large;
    font-weight: bolder;
  }

  .species {
    color: darkcyan;
    font-size: large;
    font-weight: bolder;
  }

  .information {
    color: seagreen;
    font-size: large;
    font-weight: bolder;
  }

  .app-container {
    display: flex;
    flex-direction: row;
  }

  .filters {
    width: 20%;
    margin: 20px;
  }

  .form-group {
    width: 60%;
    margin-left: 20%;
  }

</style>
