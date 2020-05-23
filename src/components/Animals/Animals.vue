<template>
  <div>
    <h1>Животные</h1>
    <div class="page-container">
      <AddSpeciesForm @species-added="loadSpecies"/>
      <AddAnimalForm :species="this.species" class="add-form" @animal-added="loadAnimals"/>
      <div class="app-container">
        <div class="form-container">
          <BasicInfoForm @filter-animals="loadAnimalsByBasicInfo"/>
          <SpeciesInfoForm @filter-animals="loadAnimalsBySpeciesInfo"/>
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
    import BasicInfoForm from "./BasicInfoForm";
    import SpeciesInfoForm from "./SpeciesInfoForm";
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
            loadAnimals() {
                RestService.getAnimals().then((response) => this.animals = response.data)
            },
            loadSpecies() {
                RestService.getSpecies().then((response) => this.species = response.data);
            },
            loadAnimalsBySpeciesInfo(filters) {
                RestService.getAnimalsBySpeciesInfo(filters).then((response) => this.animals = response.data)
            },
            loadAnimalsByBasicInfo(filters) {
                RestService.getAnimalsByBasicInfo(filters).then((response) => this.animals = response.data)
            },
        },
        mounted: function () {
            this.loadAnimals();
            this.loadSpecies();
        },
        components: {
            SpeciesInfoForm,
            AnimalsList,
            BasicInfoForm,
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
