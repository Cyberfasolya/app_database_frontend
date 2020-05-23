<template>
  <div class="breadcrumb form-container ">
    <h4>Добавление нового служащего</h4>

    <div class="form-row">
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
    </div>

    <div class="form-row form-row_with-optional-item">
      <!--ввод начала даты работы служащего-->
      <div class="container-item">
        <div class="form-group">
          <label class="col-form-label" for="inputDateOfBirth">
            <h5>Введите дату начала работы</h5>
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
      <div class="container-item">
        <label for="roleSelect"><h5>Выберите профессию</h5></label>
        <select class="form-control" id="roleSelect" v-model="selectedRole">
          <option>Не выбрано</option>
          <option>Администратор</option>
          <option>Ветеринар</option>
          <option>Дрессировщик</option>
          <option>Уборщик</option>
          <option>Строитель</option>
        </select>
      </div>

      <!--атрибут служащего-->
      <div class="container-item" v-if="isRoleChosen()">
        <div class="form-group">
          <label class="col-form-label" for="inputAttribute">
            <h5>Введите номер {{getSpecialAttributeName()}}</h5>
          </label>
          <input
            v-model="dto.roleAttribute"
            type="text"
            :class="{'is-valid': isValidAttribute, 'is-invalid': isInvalidAttribute}"
            @change="checkIsNumberAttribute"
            class="form-control"
            placeholder="Введите номер"
            id="inputAttribute">
          <div class="valid-feedback">Success</div>
          <div class="invalid-feedback">It's not a number</div>
        </div>
      </div>
    </div>

    <div class="form-row">
      <!--ввод месячной зарплаты служащего-->
      <div class="container-item">
        <label class="col-form-label" for="inputDefault">
          <h5>Введите зарплату служащего</h5>
        </label>
        <input v-model="dto.monthlySalary"
               type="text"
               :class="{'is-valid': isValidSalary, 'is-invalid': isInvalidSalary}"
               @change="checkIsNumberSalary"
               class="form-control"
               placeholder="Зарплата служащего"
               id="inputDefault">
        <div class="valid-feedback">Success</div>
        <div class="invalid-feedback">It's not a number</div>
      </div>

      <button type="button"
              class="btn btn-primary add-btn"
              @click="onAddClick"
              :disabled="!isAllValid()">
        Добавить
      </button>
    </div>
  </div>

</template>

<script>

    export default {
        name: 'addEmployeeForm',
        data() {
            return {
                selectedRole: '',

                male: false,
                female: false,

                isValidSalary: false,
                isInvalidSalary: false,

                isValidAttribute: false,
                isInvalidAttribute: false,

                dto: {
                    name: '',
                    surname: '',
                    gender: '',
                    workStartDate: '',
                    role: '',
                    monthlySalary: '',
                    roleAttribute: '',
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
            checkIsNumberSalary() {
                this.isValidSalary = !isNaN(this.dto.monthlySalary) && this.dto.monthlySalary !== '';
                this.isInvalidSalary = isNaN(this.dto.monthlySalary);
            },
            checkIsNumberAttribute() {
                this.isValidAttribute = !isNaN(this.dto.roleAttribute) && this.dto.roleAttribute !== '';
                this.isInvalidAttribute = isNaN(this.dto.roleAttribute);
            },
            isRoleChosen() {
                return this.selectedRole && this.selectedRole !== '';
            },

            getSpecialAttributeName() {
                const attributes = {
                    cleaner: "кладовки",
                    trainer: "зала",
                    administrator: "кабинета",
                    builderWorker: "здания",
                    vet: "лаборатории",
                };
                return attributes[this.getRole(this.selectedRole)];
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
            onAddClick() {
                this.dto.role = this.getRole(this.selectedRole);
                //RestService.createEmployee(this.dto).then(() => this.$emit('employee-added'));

                this.dto = {};
                this.selectedRole = '';

                this.isInvalidAttribute = false;
                this.isValidAttribute = false;
                this.isValidSalary = false;
                this.isInvalidSalary = false;
                this.male = false;
                this.female = false;
            },

            isAllValid() {
                const isEmpty = (value) => value && value !== '';
                return this.isValidAttribute && this.isValidSalary && isEmpty(this.selectedRole)
                    && isEmpty(this.dto.name) && isEmpty(this.dto.gender) && isEmpty(this.dto.surname)
                    && isEmpty(this.dto.workStartDate) && isEmpty(this.dto.roleAttribute)
                    && isEmpty(this.dto.monthlySalary);

            },
        },
        components: {}
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h4 {
    text-align: center;
  }

  h5 {
    min-height: 20px;
  }

  .breadcrumb {
    flex-wrap: nowrap;
    width: 94%;
    margin-left: 3%;
  }

  .form-row {
    margin: 5px 70px;

    display: flex;
    justify-content: space-between;
  }

  .form-row_with-optional-item {
    justify-content: flex-start;
  }

  .form-container {
    display: flex;
    flex-direction: column;
  }

  .add-btn {
    width: 27%;
    margin-top: 40px;
    max-height: 40px;
    margin-right: 36%;
    display: inline-block;
  }

  .container-item {
    width: 27%;
    display: inline-block;
    min-height: 120px;
  }

  div.form-row_with-optional-item .container-item {
    margin-right: 9.5%;
  }

  div.form-row_with-optional-item .container-item:last-child {
    margin-right: 0;
  }

</style>
