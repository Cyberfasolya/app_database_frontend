<template>
  <div class="breadcrumb form-container ">
    <h4>Добавление нового животного</h4>
    <SpeciesChoice class="container-item"></SpeciesChoice>
    <AnimalNameInput class="container-item"></AnimalNameInput>
    <CageInput class="container-item"></CageInput>
    <GenderChoice class="container-item"></GenderChoice>
    <OffspringInput class="container-item"></OffspringInput>
    <DateOfBirthInput class="container-item"></DateOfBirthInput>
    <ReceiptDateInput class="container-item"></ReceiptDateInput>
    <button type="button" class="btn btn-primary">Добавить</button>
  </div>


</template>

<script>
    import GenderChoice from "./GenderChoice";
    import SpeciesChoice from "./SpeciesChoice";
    import AnimalNameInput from "./AnimalNameInput";
    import CageInput from "./CageInput";
    import OffspringInput from "./OffspringInput";
    import DateOfBirthInput from "./DateOfBirthInput";
    import ReceiptDateInput from "./ReceiptDateInput";

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
            OffspringInput,
            DateOfBirthInput,
            ReceiptDateInput
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h4{
    margin-left: 5%;
  }
  .breadcrumb {
    height: 340px;
    width: 94%;
    margin-left: 3%;
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
