<template>
  <div class="breadcrumb container ">
    <h4>Добавление нового животного</h4>
    <AnimalNameInput class="container-item"></AnimalNameInput>
    <GenderChoice class="container-item"></GenderChoice>
    <SpeciesChoice class="container-item"></SpeciesChoice>
    <CageInput class="container-item"></CageInput>
    <OffspringInput class="container-item"></OffspringInput>
  </div>


</template>

<script>
    import GenderChoice from "./GenderChoice";
    import SpeciesChoice from "./SpeciesChoice";
    import AnimalNameInput from "./AnimalNameInput";
    import CageInput from "./CageInput";
    import OffspringInput from "./OffspringInput";

    export default {
        name: 'addAnimalForm',
        data() {
            return {}
        },
        methods: {},
        components: {
            GenderChoice,
            SpeciesChoice,
            AnimalNameInput,
            CageInput,
            OffspringInput
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .breadcrumb {
    width: 94%;
    margin-left: 3%;
    height: 700px;
  }

  .container {
    display: flex;
    flex-direction: column;
  }

  .container-item {
    margin-bottom: 3%;
    width: 70%;
  }
</style>
