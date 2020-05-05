<template>
  <div>
    <h1>Животные</h1>
    <div class="page-container">
      <AddAnimalForm></AddAnimalForm>
      <div class="app-container">
        <div class="form-container">
          <FirstForm></FirstForm>
          <SecondForm></SecondForm>
        </div>
        <AnimalsList></AnimalsList>
      </div>
    </div>
  </div>
</template>

<script>
    import RestService from "@/service/RestService";
    import moment from "moment";
    import AnimalsList from "./AnimalsList";
    import FirstForm from "./FirstForm";
    import SecondForm from "./SecondForm";
    import AddAnimalForm from "./AddAnimalForm";

    export default {
        name: 'animals',
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
        },
        components: {
            SecondForm,
            AnimalsList,
            FirstForm,
            AddAnimalForm
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
    flex-direction: column;
    width: 30%;
  }
  .page-container{
    display: flex;
    flex-direction: column;
  }

</style>
