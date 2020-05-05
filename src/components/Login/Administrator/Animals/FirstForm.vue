<template>
  <div class="filters breadcrumb">
    <SpeciesChoice></SpeciesChoice>
    <GenderChoice></GenderChoice>
    <AgeChoice></AgeChoice>
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

</style>
