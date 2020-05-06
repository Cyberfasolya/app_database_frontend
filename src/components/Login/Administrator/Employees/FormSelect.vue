<template>
  <div class="filters breadcrumb">
    <RoleChoice class="container-item"></RoleChoice>
    <GenderChoice class="container-item"></GenderChoice>
    <SalaryChoice class="container-item"></SalaryChoice>
    <button type="button" class="btn btn-primary">Показать список</button>
  </div>
</template>

<script>
    import RoleChoice from "./RoleChoice";
    import GenderChoice from "./GenderChoice";
    import SalaryChoice from "./SalaryChoice";

    export default {
        name: 'formselect',
        data() {
            return {}
        },
        methods: {},
        components: {
           RoleChoice,
            GenderChoice,
            SalaryChoice
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
    width: 25%;
    margin-left: 3%;
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
