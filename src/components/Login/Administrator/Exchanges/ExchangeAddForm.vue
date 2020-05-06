<template>
  <div class="breadcrumb form-container ">
    <h4>Добавление нового обмена</h4>
    <AnimalNameInput class="container-item"></AnimalNameInput>
    <SpeciesChoice class="container-item"></SpeciesChoice>
    <ZooNameInput class="container-item"></ZooNameInput>
    <SideChoice class="container-item"></SideChoice>
    <button type="button" class="btn btn-primary">Добавить</button>
  </div>


</template>

<script>
    import AnimalNameInput from "../Animals/AnimalNameInput";
    import SpeciesChoice from "../Animals/SpeciesChoice";
    import ZooNameInput from "./ZooNameInput";
    import SideChoice from "./SideChoice";

    export default {
        name: 'exchangeAddForm',
        data() {
            return {}
        },
        methods: {},
        components: {
          AnimalNameInput,
            SpeciesChoice,
            ZooNameInput,
            SideChoice
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h4{
    margin-left: 5%;
  }
  .breadcrumb {
    height: 280px;
    width: 94%;
    margin-left: 1%;
    margin-right: 2%;
  }

  .form-container {
    display: flex;
    flex-direction: column;
  }

  .btn{
    margin-right: 7%;
    margin-left: 5%;
  }

  .container-item {
    width: 20%;
    margin-left: 5%;
  }
</style>
