<template>
  <div class="breadcrumb form-container ">
    <h4>Добавление нового животного</h4>
    <SpeciesChoice class="container-item"
                   @species-change="onSpeciesChanged"
    ></SpeciesChoice>
    <AnimalNameInput class="container-item"
                     @name-change="onNameChanged"
    ></AnimalNameInput>
    <CageInput class="container-item"
               @cage-change="onCageChanged"
    ></CageInput>
    <GenderChoice class="container-item"
                  @gender-change="onGenderChanged"
    ></GenderChoice>
    <OffspringInput class="container-item"
                    @offspring-change="onOffspringChanged"
    ></OffspringInput>
    <DateOfBirthInput class="container-item"
                      @date-of-birth-change="onDateOfBirthChanged"
    ></DateOfBirthInput>
    <ReceiptDateInput class="container-item"
                      @receipt-date-change="onReceiptDateChanged"
    ></ReceiptDateInput>
    <button type="button" class="btn btn-primary"
            @click="onAddClick"
    >Добавить</button>
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
    import RestService from "../../../../service/RestService";

    export default {
        name: 'addAnimalForm',

        data() {
            return {
                dto: {
                    name: '',
                    cage: '',
                    dateOfBirth: '',
                    numberOfOffspring: '',
                    species: '',
                    receiptDate: '',
                    gender: ''
                }
            }
        },
        methods: {
            onNameChanged(value) {
                this.dto.name = value;
            },
            onCageChanged(value) {
                this.dto.cage = value;
            },
            onDateOfBirthChanged(value) {
                this.dto.dateOfBirth = value;
            },
            onOffspringChanged(value) {
                this.dto.numberOfOffspring = value;
            },
            onSpeciesChanged(value) {
                this.dto.species = value;
            },
            onReceiptDateChanged(value) {
                this.dto.receiptDate = value;
            },
            onGenderChanged(value) {
                this.dto.gender = value;
            },
            onAddClick(){
                RestService.createAnimal(this.dto);
            }
        },
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
  h4 {
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

  .btn {
    margin-right: 7%;
    margin-left: 5%;
  }

  .container-item {
    width: 20%;
    margin-left: 5%;
  }
</style>
