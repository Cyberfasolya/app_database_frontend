<template>
  <div class="filters breadcrumb">

    <!--форма для выбора вида животного-->

    <div class="form-group container-item"> <!--не забыть добавить в дто правильно-->
      <label for="exampleSelect1"><h5>Выберите вид животного</h5></label>
      <select class="form-control" id="exampleSelect1" v-model="selectedSpecies">
        <option disabled value="">Не выбрано</option>
        <option v-for="(species) of species"
                :key="species.id">{{species.name}}
        </option>
      </select>
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

    <!--форма для ввода возраста животного-->
    <div class="container-item">
      <h5> Выберите возраст животного </h5>
      <div class="form-group has-success">
        <label class="form-control-label">От</label>
        <input type="text" placeholder="Возраст животного"
               v-model="dto.lowAge"
               :class="{'is-valid': isValidLow, 'is-invalid': isInvalidLow}"
               @change="checkIsNumberLow"
               class="form-control"
               id="inputValid">
        <div class="valid-feedback">Success</div>
        <div class="invalid-feedback">It's not a number</div>
      </div>

      <div class="form-group has-danger">
        <label class="form-control-label">До</label>
        <input type="text" placeholder="Возраст животного"
               v-model="dto.highAge"
               :class="{'is-valid': isValidHigh, 'is-invalid': isInvalidHigh}"
               @change="checkIsNumberHigh"
               class="form-control"
               id="inputInvalid">
        <div class="valid-feedback">Success</div>
        <div class="invalid-feedback">It's not a number</div>
      </div>
    </div>

    <button type="button"
            class="btn btn-primary"
            @click="onShowClick"
            :disabled="!isAllValid()">
      Показать
    </button>
  </div>
</template>

<script>
    import RestService from "../../../../service/RestService";

    export default {
        name: 'firstForm',
        data() {
            return {
                selectedSpecies: '',

                species:[],

                male: false,
                female: false,

                isValidLow: false,
                isInvalidLow: false,

                isValidHigh: false,
                isInvalidHigh: false,

                dto: {
                    lowAge:'',
                    highAge:'',
                    species: '',
                    gender: ''
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
                this.isValidLow = !isNaN(this.dto.lowAge);
                this.isInvalidLow = isNaN(this.dto.lowAge);
            },
            checkIsNumberHigh() {
                this.isValidHigh = !isNaN(this.dto.highAge);
                this.isInvalidHigh = isNaN(this.dto.highAge);
            },

            onShowClick() {
                this.dto.species = this.species.find(item => item.name === this.selectedSpecies);
                // RestService
                this.dto = {};
                this.selectedSpecies = '';
                //this.$emit('show-list1');
            },

            isAllValid() {
                const isEmpty = (value) => value && value !== '';
                return this.isValidLow && this.isValidHigh && isEmpty(this.selectedSpecies) && isEmpty(this.dto.gender)
                    && isEmpty(this.dto.lowAge) && isEmpty(this.dto.highAge);

            }

        },
        components: {
        },
        created: function () {
            RestService.getSpecies().then((response) => this.species = response.data);
        },
    }
</script>

<style scoped>
  h1 {
    text-align: center;
  }

  .filters {
    height: 540px;
    width: 87%;
    margin-left: 10%;
  }

  .container-item {
    width: 73%;
    margin-left: 5%;
  }

  .btn{
    width: 80%;
    margin-left: 5%;
    height: 40px;
  }

</style>
