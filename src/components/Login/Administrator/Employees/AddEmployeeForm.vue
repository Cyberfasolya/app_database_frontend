<template>
  <div class="breadcrumb form-container ">
    <h4>Добавление нового служащего</h4>
    <EmployeeNameInput class="container-item"></EmployeeNameInput>
    <EmployeeSurnameInput class="container-item"></EmployeeSurnameInput>
    <GenderChoice class="container-item"></GenderChoice>
    <WorkStartDateInput class="container-item"></WorkStartDateInput>
    <RoleChoice class="container-item"></RoleChoice>
    <SalaryInput class="container-item"></SalaryInput>
    <button type="button" class="btn btn-primary">Добавить</button>
  </div>


</template>

<script>
    import EmployeeNameInput from "./EmployeeNameInput";
    import EmployeeSurnameInput from "./EmployeeSurnameInput";
    import GenderChoice from "./GenderChoice";
    import WorkStartDateInput from "./WorkStartDateInput";
    import RoleChoice from "./RoleChoice";
    import SalaryInput from "./SalaryInput";

    export default {
        name: 'addEmployeeForm',
        data() {
            return {}
        },
        methods: {},
        components: {
            EmployeeNameInput,
            EmployeeSurnameInput,
            GenderChoice,
            WorkStartDateInput,
            RoleChoice,
            SalaryInput
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h4 {
    margin-left: 5%;
  }

  .breadcrumb {
    height: 280px;
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
