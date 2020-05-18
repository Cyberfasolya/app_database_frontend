<template>
  <div>
    <h1>Животные</h1>
    <div class="page-container">
      <AddSpeciesForm @species-added="loadSpecies"/>
      <AddAnimalForm :species="this.species" class="add-form" @animal-added="loadAnimals"/>
      <div class="app-container">
        <div class="form-container">
          <FirstForm @filter-animals="loadAnimals"></FirstForm>
          <SecondForm></SecondForm>
        </div>
        <AnimalsList :animals="this.animals"></AnimalsList>
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
    import AddSpeciesForm from "./AddSpeciesForm";

    export default {
        name: 'animals',
        data() {
            return {
                animals: [],
                species: []
            }
        },
        methods: {
            getReceiptDate(animal) {
                return moment(animal.receiptDate).calendar();
            },
            loadAnimals(filters) {
                RestService.getAnimals(filters).then((response) => this.animals = response.data)
            },
            loadSpecies(){
                RestService.getSpecies().then((response) => this.species = response.data);
            }
        },
        mounted: function () {
            this.loadAnimals();
            this.loadSpecies();
        },
        components: {
            SecondForm,
            AnimalsList,
            FirstForm,
            AddAnimalForm,
            AddSpeciesForm
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    text-align: center;
    margin-bottom: 30px;
    margin-top: 10px;
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

  .page-container {
    display: flex;
    flex-direction: column;
  }
</style>
