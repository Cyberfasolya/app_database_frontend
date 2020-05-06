<template>
  <div class="breadcrumb form-container ">
    <h4>Добавление нового зоопарка</h4>
    <ZooNameInput class="container-item"></ZooNameInput>
    <button type="button" class="btn btn-primary">Добавить</button>
  </div>


</template>

<script>
    import ZooNameInput from "./ZooNameInput";
    export default {
        name: 'zooAddForm',
        data() {
            return {}
        },
        methods: {},
        components: {
          ZooNameInput
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h4{
    margin-left: 5%;
  }
  .breadcrumb {
    height: 280px;
    width: 42%;
    margin-left: 2%;
  }

  .form-container {
    display: flex;
    flex-direction: column;
  }

  .btn{
    margin-right: 7%;
    margin-left: 5%;
    width: 50%;
  }

  .container-item {
    width: 50%;
    margin-left: 5%;
  }
</style>
