<template>
  <div>
    <h1>Животные</h1>
    <div class="app-container">
      <SpeciesChoice></SpeciesChoice>
      <AnimalsList></AnimalsList>
    </div>
  </div>
</template>

<script>
    import RestService from "@/service/RestService";
    import moment from "moment";
    import AnimalsList from "./AnimalsList";
    import SpeciesChoice from "./SpeciesChoice";

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
            SpeciesChoice
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

</style>
