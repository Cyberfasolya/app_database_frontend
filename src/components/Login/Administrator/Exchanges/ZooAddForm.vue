<template>
  <div class="breadcrumb form-container ">
    <h4>Добавление нового зоопарка</h4>

    <!--форма для ввода вида название зоопарка-->
    <div class="form-group container-item">
      <label class="col-form-label" for="inputDefault">
        <h5>Введите название зоопарка</h5>
      </label>
      <input v-model="dto.name"
             type="text"
             class="form-control"
             placeholder="Название зоопарка"
             id="inputDefault">
    </div>

    <button type="button" class="btn btn-primary">Добавить</button>
  </div>


</template>

<script>
    export default {
        name: 'zooAddForm',
        data() {
            return {
                dto:{
                    name:''
                }
            }
        },
        methods: {},
        components: {}
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
