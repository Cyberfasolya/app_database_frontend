<template>
  <div>
    <h1>Служащие</h1>
    <div class="app-container">
      <div class="filters">
        <div class="form-group">
          <label for="exampleSelect1">Example select</label>
          <select class="form-control" id="exampleSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      </div>
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
    </div>
  </div>
</template>
<script>
    import RestService from "@/service/RestService";
    import moment from "moment";

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
    width: 65%;
    margin-left: 7%;
  }

  .list-item-content {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }

  .main-information {
    color: goldenrod;
    font-size: large;
    font-weight: bolder;
  }

  .basic-information {
    color: darkcyan;
    font-size: large;
    font-weight: bolder;
  }

  .app-container {
    display: flex;
    flex-direction: row;
  }

  .filters {
    width: 20%;
    margin: 20px;
  }

  .form-group {
    width: 60%;
    margin-left: 20%;
  }
</style>
