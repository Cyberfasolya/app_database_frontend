<template>
  <div class=list>
    <h3> Список зоопарков </h3>
    <div class="breadcrumb"
         v-for="(zoo) of zoos"
         :key="zoo.id">
      <div class="list-item-content">
        <div class="main-information">
          Название зоопарка: {{zoo.name}}
      </div>
    </div>
    </div>
  </div>
</template>
<script>
    import RestService from "@/service/RestService";

    export default {
        name: 'zoosList',
        data() {
            return {
                zoos: []
            }
        },
        methods: {
        },
        created: function () {
            RestService.getZoos().then((response) => this.zoos = response.data);
        },
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

</style>
