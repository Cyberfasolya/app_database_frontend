<template>
  <div class="breadcrumb form-container ">
    <h4>Добавление нового обмена</h4>

    <!--форма для ввода имени животного-->
    <div class="container-item">
      <div class="form-group">
        <label class="col-form-label" for="inputName">
          <h5>Введите имя животного</h5>
        </label>
        <input v-model="dto.animal"
               type="text"
               class="form-control"
               placeholder="Имя животного"
               id="inputName">
      </div>
    </div>

    <!--форма для выбора вида животного-->
    <div class="container-item">
      <label for="exampleSelect1"><h5>Выберите вид животного</h5></label>
      <select class="form-control" id="exampleSelect1" v-model="selectedSpecies">
        <option disabled value="">Не выбрано</option>
        <option v-for="(spec) of species"
                :key="spec.id">{{spec.name}}
        </option>
      </select>
    </div>

    <!--форма для ввода вида название зоопарка-->
    <div class="form-group">
      <label class="col-form-label" for="inputDefault">
        <h5>Введите название зоопарка</h5>
      </label>
      <input v-model="dto.name"
             type="text"
             class="form-control"
             placeholder="Название зоопарка"
             id="inputDefault">
    </div>

    <div class="form-group">
      <label for="exampleSelect"><h5>Выберете тип обмена</h5></label>
      <select class="form-control" id="exampleSelect" v-model="dto.side">
        <option>Не выбрано</option>
        <option>Отдача</option>
        <option>Получение</option>
      </select>
    </div>

    <button type="button" class="btn btn-primary">Добавить</button>
  </div>


</template>

<script>

    export default {
        props: ['species'],//передавать
        name: 'exchangeAddForm',
        data() {
            return {
                selectedSpecies: '',

                dto: {
                    animal: '',
                    name: '',
                    side: '',

                }
            }
        },
        methods: {},
        components: {}
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h4 {
    margin-left: 5%;
  }

  .breadcrumb {
    height: 280px;
    width: 94%;
    margin-left: 1%;
    margin-right: 2%;
  }

  .form-container {
    display: flex;
    flex-direction: column;
  }

  .btn {
    margin-right: 7%;
    margin-left: 5%;
  }

  .container-item {
    width: 20%;
    margin-left: 5%;
  }
</style>
