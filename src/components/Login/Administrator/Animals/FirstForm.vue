<template>
  <div class="filters breadcrumb">
    <SpeciesChoice></SpeciesChoice>
    <GenderChoice></GenderChoice>
    <AgeChoice class="form-group"> </AgeChoice>
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
            }
        },
        methods: {
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
    height: 590px;
    width: 70%;
    margin-left: 10%;
  }

  .genderChoice {
    margin-left: 19%;
    margin-top: 12%;
  }

  .form-group {
    width: 60%;
    margin-left: 20%;
  }

</style>
