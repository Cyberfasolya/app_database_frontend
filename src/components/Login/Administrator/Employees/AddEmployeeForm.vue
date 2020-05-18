<template>
  <div class="breadcrumb form-container ">
    <h4>Добавление нового служащего</h4>

    <!--ввод имени служащего-->
    <div class="container-item">
      <label class="col-form-label" for="inputName">
        <h5>Введите имя служащего</h5>
      </label>
      <input v-model="dto.name"
             type="text"
             class="form-control"
             placeholder="Имя служащего"
             id="inputName">
    </div>

    <!--ввод фамилии служащего-->
    <div class="container-item">
      <label class="col-form-label" for="inputSurname">
        <h5>Введите фамилию служащего</h5>
      </label>
      <input v-model="dto.surname"
             type="text"
             class="form-control"
             placeholder="Фамилия служащего"
             id="inputSurname">
    </div>

    <!--выбор пола служащего-->
    <div class="genderChoice container-item">
      <h5> Выберите пол служащего </h5>
      <div class="btn-group btn-group-toggle" data-toggle="buttons">
        <label class="btn btn-primary"
               :class="{ active: male }"
               @click="onMaleClick">
          <input type="radio" name="options" id="option1" autocomplete="off" checked=""> М
        </label>
        <label class="btn btn-primary" :class="{ active: female }" @click="onFemaleClick">
          <input type="radio" name="options" id="option2" autocomplete="off"> Ж
        </label>
      </div>
    </div>

    <!--ввод начала даты работы служащего-->
    <div class="container-item">
      <div class="form-group">
        <label class="col-form-label" for="inputDateOfBirth">
          <h5>Введите дату начала работы служащего</h5>
        </label>
        <input type="date"
               v-model="dto.workStartDate"
               class="form-control"
               placeholder="гггг-мм-дд"
               min="1990-01-01" max="2020-05-13"
               id="inputDateOfBirth">
      </div>
    </div>

    <!--выбор профессии служащего-->
    <div class="form-group container-item">
      <label for="roleSelect"><h5>Выберите профессию</h5></label>
      <select class="form-control" id="roleSelect" v-model="dto.role">
        <option>Не выбрано</option>
        <option>Администратор</option>
        <option>Ветеринар</option>
        <option>Дрессировщик</option>
        <option>Уборщик</option>
        <option>Строитель</option>
      </select>
    </div>

    <!--ввод месячной зарплаты служащего-->
    <div class="form-group">
      <label class="col-form-label" for="inputDefault">
        <h5>Введите зарплату служащего</h5>
      </label>
      <input v-model="dto.monthlySalary"
             type="text"
             class="form-control"
             placeholder="Зарплата служащего"
             id="inputDefault">
    </div>

    <button type="button" class="btn btn-primary">Добавить</button>
  </div>


</template>

<script>

    export default {
        name: 'addEmployeeForm',
        data() {
            return {

                male: false,
                female: false,

                dto: {
                    name: '',
                    surname: '',
                    gender: '',
                    workStartDate: '',
                    role: '',
                    monthlySalary: '',
                }
            }
        },
        methods: {
            onMaleClick: function () {
                this.male = true;
                this.female = false;
                this.dto.gender = 'м';
            },
            onFemaleClick: function () {
                this.male = false;
                this.female = true;
                this.dto.gender = 'ж';
            },
        },
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
    margin-left: 3%;
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
