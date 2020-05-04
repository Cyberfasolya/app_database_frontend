<template>
  <div>
    <h1>Служащие</h1>
    <div class="app-container">
      <RoleChoice></RoleChoice>
      <EmployeesList></EmployeesList>
    </div>
  </div>
</template>
<script>
    import RestService from "@/service/RestService";
    import moment from "moment";
    import EmployeesList from "./EmployeesList";
    import RoleChoice from "./RoleChoice";

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

            }
        },
        created: function () {
            RestService.getEmployees().then((response) => this.employees = response.data);
        },
        components: {
            EmployeesList,
            RoleChoice
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
</style>
