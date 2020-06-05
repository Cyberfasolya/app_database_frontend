<template>
  <div>
    <h1>Доступ</h1>
    <div class="page-container">
      <AddAccessForm @access-added="loadAccesses"/>
      <div class="app-container">
        <FormSelectAccess @filter-employees="showEmployees"
                          @reset-employees="resetEmployee"/>
        <AccessesList :accesses="accesses"/>
        <EmployeesList v-if="isEmployeesFilter"
                       :employees="employees"/>
      </div>
    </div>
  </div>
</template>

<script>
    import AddAccessForm from "./AddAccessForm";
    import FormSelectAccess from "./FormSelectAccess";
    import AccessesList from "./AccessesList";
    import RestService from "../../../service/RestService";
    import EmployeesList from "./EmployeesList";

    export default {
        name: 'access',
        data() {
            return {
                accesses: [],
                isEmployeesFilter: false,
                employees: [],
            }
        },
        methods: {
            loadAccesses() {
                RestService.getAccesses().then((response) => this.accesses = response.data);
            },
            showEmployees(dto) {
                this.isEmployeesFilter = true;
                RestService.getAccessEmployees(dto).then((response) => this.employees = response.data);
            },
            resetEmployee() {
                this.isEmployeesFilter = false;
            }
        },
        mounted: function () {
            this.loadAccesses();
        },
        components: {
            AddAccessForm,
            FormSelectAccess,
            AccessesList,
            EmployeesList
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    text-align: center;
    margin-bottom: 30px;
    margin-top: 10px;
  }

  .page-container {
    display: flex;
    flex-direction: column;
  }

  .app-container {
    display: flex;
    flex-direction: row;
  }
</style>
