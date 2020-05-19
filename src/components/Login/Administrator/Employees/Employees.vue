<template>
  <div>
    <h1>Служащие</h1>
    <div class="page-container">
      <AddEmployeeForm></AddEmployeeForm>
      <div class="app-container">
        <FormSelect @filter-employees="loadEmployees"/>
        <EmployeesList :employees="this.employees"/>
      </div>
    </div>
  </div>
</template>
<script>
    import RestService from "@/service/RestService";
    import moment from "moment";
    import EmployeesList from "./EmployeesList";
    import FormSelect from "./FormSelect";
    import AddEmployeeForm from "./AddEmployeeForm";

    export default {
        name: 'employees',
        data() {
            return {
                employees: []
            }
        },
        methods: {
            getReceiptDate(employee) {
                return moment(employee.workStartDate).calendar();
            },
            getRole(role) {
                const roles = {
                    cleaner: "уборщик",
                    trainer: "дрессировщик",
                    administrator: "администратор",
                    builderWorker: "строитель",
                    vet: "ветеринар",
                };
                return roles[role];
            },
            loadEmployees(filters) {
                RestService.getEmployees(filters).then((response) => this.employees = response.data)
            },
        },
        mounted: function () {
            this.loadEmployees();
        },
        components: {
            EmployeesList,
            FormSelect,
            AddEmployeeForm
        }

    }
</script>


<style scoped>
  h1 {
    text-align: center;
  }

  .app-container {
    display: flex;
    flex-direction: row;
  }

  .page-container {
    display: flex;
    flex-direction: column;
  }
</style>
