<template>
  <div class="filters breadcrumb">

    <!--выбор профессии служащего-->
    <div class="container-item">
      <label for="roleSelect"><h5>Выберите профессию</h5></label>
      <select class="form-control" id="roleSelect" v-model="selectedRole">
        <option disabled value="">Не выбрано</option>
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
        <label class="btn btn-primary control-btn"
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

    <!--форма для ввода продолжительности работы-->
    <h5 class="text-control"> Продолжительность работы </h5>
    <div class="form-group has-success container-item">
      <label class="form-control-label">От</label>
      <input type="text" placeholder="Продолжительность работы"
             v-model="dto.durationOfWorkLow"
             :class="{'is-valid': isValidDurationLow, 'is-invalid': isInvalidDurationLow}"
             @change="checkIsNumberDurationLow"
             class="form-control"
             id="inputValid1">
      <div class="valid-feedback">Success</div>
      <div class="invalid-feedback">It's not a number</div>
    </div>

    <div class="container-item form-group has-danger">
      <label class="form-control-label">До</label>
      <input type="text" placeholder="Продолжительность работы"
             v-model="dto.durationOfWorkHigh"
             :class="{'is-valid': isValidDurationHigh, 'is-invalid': isInvalidDurationHigh}"
             @change="checkIsNumberDurationHigh"
             class="form-control"
             id="inputInvalid1">
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

                isValidDurationLow: false,
                isInvalidDurationLow: false,

                isValidDurationHigh: false,
                isInvalidDurationHigh: false,

                selectedRole: '',

                dto: {
                    role: null,
                    gender: null,
                    lowSalary: null,
                    highSalary: null,
                    durationOfWorkLow: null,
                    durationOfWorkHigh: null,
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
                this.isValidLow = !isNaN(this.dto.lowSalary) && this.dto.lowSalary !== '';
                this.isInvalidLow = isNaN(this.dto.lowSalary);
            },
            checkIsNumberHigh() {
                this.isValidHigh = !isNaN(this.dto.highSalary) && this.dto.highSalary !== '';
                this.isInvalidHigh = isNaN(this.dto.highSalary);
            },

            checkIsNumberDurationLow() {
                this.isValidDurationLow = !isNaN(this.dto.durationOfWorkLow) && this.dto.durationOfWorkLow !== '';
                this.isInvalidDurationLow = isNaN(this.dto.durationOfWorkLow);
            },

            checkIsNumberDurationHigh() {
                this.isValidDurationHigh = !isNaN(this.dto.durationOfWorkHigh) && this.dto.durationOfWorkHigh !== '';
                this.isInvalidDurationHigh = isNaN(this.dto.durationOfWorkHigh);
            },

            onShowClick() {
                if (this.selectedRole !== '') {
                    this.dto.role = this.getRole(this.selectedRole);
                }
                this.$emit('filter-employees', this.dto);

                this.dto = {};
                this.isValidLow = false;
                this.isValidHigh = false;
                this.isInvalidLow = false;
                this.isInvalidHigh = false;
                this.male = false;
                this.female = false;
                this.isValidDurationLow = false;
                this.isInvalidDurationLow = false;
                this.isValidDurationHigh = false;
                this.isInvalidDurationHigh = false;
                this.selectedRole = '';

                this.isShown = true;
            },

            getRole(role) {
                const roles = {
                    cleaner: "уборщик",
                    trainer: "дрессировщик",
                    administrator: "администратор",
                    builderWorker: "строитель",
                    vet: "ветеринар",
                };
                return Object.entries(roles).find(([key, value]) => value === role.toLowerCase())[0];
            },

            isAllValid() {
                const isEmpty = (value) => value && value !== '';
                return (this.isValidLow && isEmpty(this.dto.lowSalary)) || (this.isValidHigh && isEmpty(this.dto.highSalary))
                    || isEmpty(this.selectedRole) || isEmpty(this.dto.gender)
                    || (this.isValidDurationLow && isEmpty(this.dto.durationOfWorkLow)) ||
                    (this.isValidDurationHigh && isEmpty(this.dto.durationOfWorkHigh));
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
    height: 930px;
    width: 25%;
    margin-left: 3%;
  }

  .container-item {
    width: 73%;
    margin-left: 5%;
    min-height: 100px;
  }

  .btn {
    width: 80%;
    margin-left: 5%;
    height: 40px;
  }

  .control-btn {
    margin-right: 5px;
  }

  .text-control {
    margin-left: 5%;
  }

</style>
