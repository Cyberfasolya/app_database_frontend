<template>
  <div class="breadcrumb form-container ">
    <SpeciesChoice class="container-item"></SpeciesChoice>
    <button type="button" class="btn btn-primary">Показать список зоопарков</button>
  </div>


</template>

<script>
    import SpeciesChoice from "../Animals/SpeciesChoice";

    export default {
        name: 'zooListForm',
        data() {
            return {}
        },
        methods: {},
        components: {
           SpeciesChoice
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h4{
    margin-left: 5%;
  }
  .breadcrumb {
    height: 230px;
  }

  .form-container {
    display: flex;
    flex-direction: column;
  }

  .btn{
    margin-right: 7%;
    margin-left: 5%;
    width: 50%;
  }

  .container-item {
    width: 50%;
    margin-left: 5%;
  }
</style>
