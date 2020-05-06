<template>
  <div class="breadcrumb form-container ">
    <h4>Добавление нового служащего</h4>

    <button type="button" class="btn btn-primary">Добавить</button>
  </div>


</template>

<script>
    export default {
        name: 'addAnimalForm',
        data() {
            return {}
        },
        methods: {},
        components: {

        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h4{
    margin-left: 5%;
  }
  .breadcrumb {
    height: 340px;
    width: 94%;
    margin-left: 3%;
  }

  .form-container {
    display: flex;
    flex-direction: column;
  }

  .btn{
    margin-right: 7%;
    margin-left: 5%;
  }

  .container-item {
    width: 20%;
    margin-left: 5%;
  }
</style>
