<template>
  <div class="breadcrumb form-container ">
    <h4>Добавление нового животного</h4>

    <!--форма для выбора вида животного-->

    <div class="form-group container-item">
      <label for="exampleSelect1"><h5>Выберите вид животного</h5></label>
      <select class="form-control" id="exampleSelect1" v-model="selectedSpecies">
        <option disabled value="">Не выбрано</option>
        <option v-for="(species) of species"
                :key="species.id">{{species.name}}
        </option>
      </select>
    </div>

    <!--форма для ввода имени животного-->

    <div class="container-item">
      <div class="form-group">
        <label class="col-form-label" for="inputName">
          <h5>Введите имя животного</h5>
        </label>
        <input v-model="dto.name"
               type="text"
               class="form-control"
               placeholder="Имя животного"
               id="inputName">
      </div>
    </div>

    <!--форма для ввода клетки животного проверка валидности-->

    <div class="container-item">
      <div class="form-group">
        <label class="col-form-label" for="inputCage">
          <h5>Введите номер клетки</h5>
        </label>
        <input
          v-model="dto.cage"
          type="text"
          :class="{'is-valid': isValidCage, 'is-invalid': isInvalidCage}"
          @change="checkIsNumberCage"
          class="form-control"
          placeholder="Номер клетки"
          id="inputCage">
        <div class="valid-feedback">Success</div>
        <div class="invalid-feedback">It's not a number</div>
      </div>
    </div>

    <!--форма для выбора пола животного-->

    <div class="genderChoice container-item">
    <h5> Выберите пол животного </h5>
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

    <!--форма для ввода количества потомства животного-->

    <div class="container-item">
      <div class="form-group">
        <label class="col-form-label" for="inputOffspring">
          <h5>Введите количество потомства</h5>
        </label>
        <input v-model="dto.numberOfOffspring"
               :class="{'is-valid': isValidOffspring, 'is-invalid': isInvalidOffspring}"
               @change="checkIsNumberOffspring"
               type="text"
               class="form-control"
               placeholder="Количество потомства"
               id="inputOffspring">
        <div class="valid-feedback">Success</div>
        <div class="invalid-feedback">It's not a number</div>
      </div>
    </div>

    <!--форма для ввода даты рождения животного-->

    <div class="container-item">
      <div class="form-group">
        <label class="col-form-label" for="inputDateOfBirth">
          <h5>Введите дату рождения животного</h5>
        </label>
        <input type="date"
               v-model="dto.dateOfBirth"
               class="form-control"
               placeholder="гггг-мм-дд"
               min="1990-01-01" max="2020-05-13"
               id="inputDateOfBirth">
      </div>
    </div>


    <!--форма для ввода даты получения животного-->

    <div class="container-item">
      <div class="form-group">
        <label class="col-form-label" for="inputDefault">
          <h5>Введите дату получения животного</h5>
        </label>
        <input v-model="dto.receiptDate"
               type="date"
               min="1990-01-01" max="2020-05-13"
               class="form-control"
               placeholder="гггг-мм-дд"
               id="inputDefault">
      </div>
    </div>

    <button type="button"
            class="btn btn-primary"
            @click="onAddClick"
            :disabled="!isAllValid()">
      Добавить
    </button>
  </div>


</template>

<script>
    import RestService from "../../../../service/RestService";

    export default {
        name: 'addAnimalForm',

        data() {
            return {
                species: [],
                selectedSpecies: '',

                isValidCage: false,
                isInvalidCage: false,

                male: false,
                female: false,

                isValidOffspring: false,
                isInvalidOffspring: false,

                dto: {
                    name: '',
                    cage: '',
                    dateOfBirth: '',
                    numberOfOffspring: '',
                    species: '',
                    receiptDate: '',
                    gender: ''
                }
            }
        },
        methods: {
            checkIsNumberCage() {
                this.isValidCage = !isNaN(this.dto.cage);
                this.isInvalidCage = isNaN(this.dto.cage);
            },

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

            checkIsNumberOffspring() {
                this.isValidOffspring = !isNaN(this.dto.numberOfOffspring);
                this.isInvalidOffspring = isNaN(this.dto.numberOfOffspring);
            },

            onAddClick() {
                this.dto.species = this.species.find(item => item.name === this.selectedSpecies);
                // RestService.createAnimal(this.dto);
                this.dto = {};
                this.selectedSpecies = '';
                this.$emit('animal-added');
            },

            isAllValid() {
                const isEmpty = (value) => value && value !== '';
                return this.isValidCage && this.isValidOffspring && isEmpty(this.selectedSpecies)
                    && isEmpty(this.dto.name) && isEmpty(this.dto.gender) && isEmpty(this.dto.receiptDate)
                    && isEmpty(this.dto.dateOfBirth) && isEmpty(this.dto.numberOfOffspring)
                    && isEmpty(this.dto.cage);

            }
        },
        created: function () {
            RestService.getSpecies().then((response) => this.species = response.data);
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
    height: 340px;
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
