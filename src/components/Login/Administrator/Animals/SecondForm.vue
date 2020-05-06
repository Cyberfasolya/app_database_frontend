<template>
  <div class="filters breadcrumb">
   <SpeciesCompatibilityChoice class="container-item"></SpeciesCompatibilityChoice>
    <NeedWarmPlaceChoice class="container-item"></NeedWarmPlaceChoice>
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
    height: 370px;
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
