<template>
  <div class=list>
    <h3>Список служащих</h3>
    <div class="breadcrumb"
         v-for="(employee) of employees">
      <div class="list-item-content">
        <div class="base-info">
          Имя работника: {{employee.name}}
          <br>
          Фамилия работника: {{employee.surname}}
          <br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import moment from "moment";

    export default {
        props: ['employees'],
        name: 'employeesList',
        data() {
            return {}
        },
        methods: {
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    text-align: center;
  }

  .breadcrumb {
    margin-bottom: 5px;
  }

  .list {
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 25%;
    margin-left: 1%;
    margin-right: 3%;
  }

  .list-item-content {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }

  .base-info {
    color: honeydew;
    font-size: large;
    font-weight: bolder;
  }

</style>
