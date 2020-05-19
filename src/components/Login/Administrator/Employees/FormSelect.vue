<template>
  <div class="filters breadcrumb">

    <!--выбор профессии служащего-->
    <div class="container-item">
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

    <!--выбор пола служащего-->
    <div class="container-item">
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

    <h5 class="text-control"> Выберите месячную зарплату служащего </h5>
    <div class="form-group has-success container-item">
      <label class="form-control-label">От</label>
      <input type="text" placeholder="Зарплата служащего"
             v-model="dto.lowSalary"
             :class="{'is-valid': isValidLow, 'is-invalid': isInvalidLow}"
             @change="checkIsNumberLow"
             class="form-control"
             id="inputValid">
      <div class="valid-feedback">Success</div>
      <div class="invalid-feedback">It's not a number</div>
    </div>

    <div class="form-group has-danger container-item">
      <label class="form-control-label">До</label>
      <input type="text" placeholder="Зарплата служащего"
             v-model="dto.highSalary"
             :class="{'is-valid': isValidHigh, 'is-invalid': isInvalidHigh}"
             @change="checkIsNumberHigh"
             class="form-control"
             id="inputInvalid">
      <div class="valid-feedback">Success</div>
      <div class="invalid-feedback">It's not a number</div>
    </div>

    <button type="button"
            class="btn btn-primary"
            @click="onShowClick"
            :disabled="!isAllValid()">
      Показать список
    </button>

    <button type="button"
            class="btn btn-primary"
            @click="onResetClick"
            :disabled="!isFilter()">
      Сбросить
    </button>
  </div>
</template>

<script>
    export default {
        name: 'formSelect',
        data() {
            return {
                male: false,
                female: false,

                isValidLow: false,
                isInvalidLow: false,

                isValidHigh: false,
                isInvalidHigh: false,

                isShown: false,

                dto: {
                    role: '',
                    gender: '',
                    lowSalary: '',
                    highSalary: '',
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
            checkIsNumberLow() {
                this.isValidLow = !isNaN(this.dto.lowSalary);
                this.isInvalidLow = isNaN(this.dto.lowSalary);
            },
            checkIsNumberHigh() {
                this.isValidHigh = !isNaN(this.dto.highSalary);
                this.isInvalidHigh = isNaN(this.dto.highSalary);
            },
            onShowClick() {
                this.$emit('filter-employees', this.dto);

                this.dto = {};
                this.isValidLow = false;
                this.isValidHigh = false;
                this.isInvalidLow = false;
                this.isInvalidHigh = false;
                this.male = false;
                this.female = false;

                this.isShown = true;
            },

            isAllValid() {
                const isEmpty = (value) => value && value !== '';
                return (this.isValidLow && isEmpty(this.dto.lowSalary)) || (this.isValidHigh && isEmpty(this.dto.highSalary))
                    || isEmpty(this.dto.role) || isEmpty(this.dto.gender);
            },
            onResetClick() {
                this.isShown = false;
                this.$emit('filter-employees');
            },

            isFilter() {
                return this.isShown;
            }
        },
        components: {}
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    text-align: center;
  }

  .filters {
    height: 600px;
    width: 25%;
    margin-left: 3%;
  }

  .container-item {
    width: 73%;
    margin-left: 5%;
    min-height: 95px;
  }

  .btn {
    width: 80%;
    margin-left: 5%;
    height: 40px;
  }

  .text-control {
    margin-left: 5%;
  }

</style>
