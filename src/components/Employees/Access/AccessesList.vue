<template>
  <div class=list>
    <h3>Доступ к животным</h3>
    <div class="breadcrumb"
         v-for="(access) of accesses">
      <div class="list-item-content">
        <div class="base-info">
          Имя работника: {{access.employeeName}}
          <br>
          Фамилия работника: {{access.employeeSurname}}
          <br>
        </div>
        <div class="animal-info">
          Имя животного: {{access.animalName}}
          <br>
          Вид животного: {{access.species}}
          <br>
        </div>
        <div class="info">
          Дата начала доступа: {{getAccessDate(access)}}
          <br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import moment from "moment";

    export default {
        props: ['accesses'],
        name: 'accessesList',
        data() {
            return {}
        },
        methods: {
            getAccessDate(access) {
                return moment(access.accessStartDate).calendar();
            },
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
    width: 68%;
    margin-right: 3%;
  }

  .list-item-content {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }

  .info {
    color: lightsteelblue;
    font-size: large;
    font-weight: bolder;
  }

  .base-info {
    color: honeydew;
    font-size: large;
    font-weight: bolder;
  }

  .animal-info{
    color: cadetblue;
    font-size: large;
    font-weight: bolder;
  }

</style>
