<template>
  <div>
    <h1>Животные</h1>
    <div class="app-container">
      <div class="filters">
        <SpeciesChoice></SpeciesChoice>
        <GenderChoice></GenderChoice>
        <AgeChoice></AgeChoice>
      </div>
      <AnimalsList></AnimalsList>
    </div>
  </div>
</template>

<script>
    import RestService from "@/service/RestService";
    import moment from "moment";
    import AnimalsList from "./AnimalsList";
    import SpeciesChoice from "./SpeciesChoice";
    import GenderChoice from "./GenderChoice";
    import AgeChoice from "./AgeChoice";

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
            AnimalsList,
            SpeciesChoice,
            GenderChoice,
            AgeChoice
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    text-align: center;
  }

  .filters {
    width: 20%;
    margin: 20px;
  }

  .app-container {
    display: flex;
    flex-direction: row;
  }

</style>
