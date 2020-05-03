<template>
  <div>
    <h1>Служащие</h1>
 {{JSON.stringify(employees)}}
  </div>
</template>
<script>
    import RestService from "@/service/RestService";
    export default {
        name: 'employees',
        data() {
            return {
                employees: []
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
</style>
