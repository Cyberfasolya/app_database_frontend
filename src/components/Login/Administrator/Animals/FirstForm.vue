<template>
  <div class="filters breadcrumb">
    <SpeciesChoice class="container-item"
                   @species-change="onSpeciesChanged"
    ></SpeciesChoice>
    <GenderChoice class="container-item"
                  @gender-change="onGenderChanged"
    ></GenderChoice>
    <AgeChoice class="container-item"
               @low-age-change="onLowAgeChanged"
               @high-age-change="onHighAgeChanged"
    ></AgeChoice>
    <button type="button" class="btn btn-primary">Показать список</button>
  </div>
</template>

<script>
    import SpeciesChoice from "./SpeciesChoice";
    import GenderChoice from "./GenderChoice";
    import AgeChoice from "./AgeChoice";

    export default {
        name: 'firstForm',
        data() {
            return {
                lowAge:'',
                highAge:'',
                species:''
            }
        },
        methods: {
            onLowAgeChanged(value) {
                this.lowAge = value;
            },
            onHighAgeChanged(value) {
                this.highAge = value;
            },
            onSpeciesChanged(value){
                this.species = value;
            },
            onGenderChanged(value){
                this.gender = value;
            },

        },
        components: {
            SpeciesChoice,
            GenderChoice,
            AgeChoice,
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    text-align: center;
  }

  .filters {
    height: 540px;
    width: 87%;
    margin-left: 10%;
  }

  .container-item {
    width: 73%;
    margin-left: 5%;
  }

  .btn{
    width: 80%;
    margin-left: 5%;
    height: 40px;
  }

</style>
