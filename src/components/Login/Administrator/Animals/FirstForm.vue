<template>
  <div class="filters breadcrumb">
    <SpeciesChoice class="container-item"></SpeciesChoice>
    <GenderChoice class="container-item"></GenderChoice>
    <AgeChoice class="container-item"></AgeChoice>
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
            return {}
        },
        methods: {},
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
