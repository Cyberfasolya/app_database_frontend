<template>
  <div class=list>
    <div class="breadcrumb"
         v-for="(employee) of employees"
         :key="employee.id">
      <div class="list-item-content">
        <div class="main-information">
          Имя: {{employee.name}}
          <br>
          Фамилия: {{employee.surname}}
        </div>
        <div class="basic-information">
          Пол: {{employee.gender}}
          <br>
          Профессия: {{getRole(employee.role)}}
          <br>
          Месячная зарплата в рублях {{employee.monthlySalary}}
          <br>
          Дата начала работы: {{getReceiptDate(employee)}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import RestService from "@/service/RestService";
    import moment from "moment";

    export default {
        name: 'employeesList',
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
        }
    }
</script>


<style scoped>
  h1 {
    text-align: center;
  }

  .list {
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 68%;
    margin-left: 1%;
  }

  .list-item-content {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }

  .main-information {
    color: honeydew;
    font-size: large;
    font-weight: bolder;
  }

  .basic-information {
    color: cadetblue;
    font-size: large;
    font-weight: bolder;
  }
</style>
