<template>
  <div class="filters breadcrumb">
   <SpeciesCompatibilityChoice></SpeciesCompatibilityChoice>
    <NeedWarmPlaceChoice></NeedWarmPlaceChoice>
    <button type="button" class="btn btn-primary">Показать список</button>
  </div>
</template>

<script>
  import SpeciesCompatibilityChoice from "./SpeciesCompatibilityChoice";
  import NeedWarmPlaceChoice from "./NeedWarmPlaceChoice";
    export default {
        name: 'secondForm',
        data() {
            return {
            }
        },
        methods: {
        },
        components: {
           SpeciesCompatibilityChoice,
            NeedWarmPlaceChoice
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    text-align: center;
  }
  .filters {
    height: 450px;
    width: 70%;
    margin-left: 10%;
  }

</style>
