<template>
  <div class="filters breadcrumb">

    <!--форма для ввода имени животного-->
    <div class="container-item">
      <div class="form-group">
        <label class="col-form-label" for="inputName">
          <h5>Введите имя животного</h5>
        </label>
        <input v-model="dto.animalName"
               type="text"
               class="form-control"
               placeholder="Имя животного"
               id="inputName">
      </div>
    </div>

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

    <!--форма для ввода возраста животного-->
    <h5 class="text-control"> Выберит сколько продолжительность доступа</h5>
    <div class="form-group has-success container-item">
      <label class="form-control-label">От</label>
      <input type="text" placeholder="Продолжительность доступа"
             v-model="dto.lowAmount"
             :class="{'is-valid': isValidLow, 'is-invalid': isInvalidLow}"
             @change="checkIsNumberLow"
             class="form-control"
             id="inputValid">
      <div class="valid-feedback">Success</div>
      <div class="invalid-feedback">It's not a number</div>
    </div>

    <div class="container-item form-group has-danger">
      <label class="form-control-label">До</label>
      <input type="text" placeholder="Продолжительность доступа"
             v-model="dto.highAmount"
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
      Показать
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
    import RestService from "../../../service/RestService";

    export default {
        name: 'formSelectAccess',
        data() {
            return {
                selectedSpecies: '',
                species: [],

                isShown: false,

                isValidLow: false,
                isInvalidLow: false,

                isValidHigh: false,
                isInvalidHigh: false,

                dto: {
                    lowAmount: '',
                    highAmount: '',
                    animalName: '',
                    species: '',
                }
            }
        },
        methods: {
            checkIsNumberLow() {
                this.isValidLow = !isNaN(this.dto.lowAmount) && this.dto.lowAmount !== '';
                this.isInvalidLow = isNaN(this.dto.lowAmount);
            },
            checkIsNumberHigh() {
                this.isValidHigh = !isNaN(this.dto.highAmount) && this.dto.highAmount !== '';
                this.isInvalidHigh = isNaN(this.dto.highAmount);
            },

            onShowClick() {
                if (this.selectedSpecies && this.selectedSpecies !== '') {
                    this.dto.speciesId = this.species.find(item => item.name === this.selectedSpecies).id;
                }
                //this.$emit('filter-employees', this.dto);

                this.dto = {};
                this.selectedSpecies = '';
                this.isValidLow = false;
                this.isValidHigh = false;
                this.isInvalidLow = false;
                this.isInvalidHigh = false;

                this.isShown = true;
            },

            isAllValid() {
                const isEmpty = (value) => value && value !== '';
                return isEmpty(this.selectedSpecies) || isEmpty(this.dto.animalName)
                    || (this.isValidLow && isEmpty(this.dto.lowAmount))
                    || (this.isValidHigh && isEmpty(this.dto.highAmount));
            },

            onResetClick() {
                this.isShown = false;
                this.$emit('filter-animals');
            },

            isFilter() {
                return this.isShown;
            }
        },
        components: {},
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
    width: 27%;
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
    margin-right: 7%;
    height: 40px;
    margin-bottom: 5px;
  }

  .text-control {
    margin-left: 5%;
  }
</style>
