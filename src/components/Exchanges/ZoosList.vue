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

    export default {
        name: 'zoosList',
        props:['zoos'],
        data() {
            return {
            }
        },
        methods: {},
    }
</script>


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
    width: 28%;
    margin-left: 3%;
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
