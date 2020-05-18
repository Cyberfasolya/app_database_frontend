<template>
  <div class="breadcrumb form-container ">
    <h4>Добавление нового вида животного</h4>

    <!--форма для ввода имени животного-->
    <div class="form-row">
      <div class="container-item">
        <label class="col-form-label" for="inputNameSpecies">
          <h5>Введите название нового вида животного</h5>
        </label>
        <input v-model="dto.name"
               type="text"
               class="form-control"
               placeholder="Название вида животного"
               id="inputNameSpecies">
      </div>

      <!--форма для выбора типа вида животного-->

      <div class="container-item">
        <label for="exampleSelect1"><h5>Выберите тип животного</h5></label>
        <select class="form-control" id="exampleSelect1" v-model="dto.type">
          <option disabled value="">Не выбрано</option>
          <option>Хищник</option>
          <option>Травоядное</option>
        </select>
      </div>

      <!--форма для ввода возраста для рождения животного проверка валидности-->

      <div class="container-item">
        <div class="form-group">
          <label class="col-form-label" for="inputCage">
            <h5>Введите приемлимый возраст для родов</h5>
          </label>
          <input
            v-model="dto.ageForChildbirth"
            type="text"
            :class="{'is-valid': isValidAge, 'is-invalid': isInvalidAge}"
            @change="checkIsNumberAge"
            class="form-control"
            placeholder="Приемлимый возраст для родов"
            id="inputCage">
          <div class="valid-feedback">Success</div>
          <div class="invalid-feedback">It's not a number</div>
        </div>
      </div>
    </div>

    <div class="form-row form-bottom">
      <!--    Необходимо ли животному новое помещение на зиму-->
      <div class="container-item ">
        <h5> Необходимо ли животному новое помещение на зиму?</h5>
        <div class="btn-group btn-group-toggle" data-toggle="buttons">
          <label class="btn btn-primary"
                 :class="{ active: yes }"
                 @click="onYesClick">
            <input type="radio" name="options" id="option1" autocomplete="off" checked=""> Да
          </label>
          <label class="btn btn-primary"
                 :class="{ active: no }"
                 @click="onNoClick">
            <input type="radio" name="options" id="option2" autocomplete="off"> Нет
          </label>
        </div>
      </div>

      <!--   Совместимые виды-->
      <div class="container-item ">
        <label class="typo__label"><h5>Выберите своместимые виды животных</h5></label>
        <multiselect v-model="selectedSpecies"
                     :options="species"
                     :multiple="true"
                     :close-on-select="false"
                     :clear-on-select="false"
                     :preserve-search="true"
                     placeholder="Выберите несколько"
                     label="name"
                     track-by="name"
                     :class="multiselectClass"
                     @open="onMultiselectOpened"
                     @close="onMultiselectClosed"
                     :preselect-first="true">
          <template slot="selection" slot-scope="{ values, search, isOpen }">
          <span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">
            {{ values.length }} options selected
          </span>
          </template>
        </multiselect>
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
    import RestService from "../../../../service/RestService";
    import Multiselect from 'vue-multiselect'


    export default {
        name: 'addSpeciesForm',
        components: {
            Multiselect
        },

        data() {
            return {
                isValidAge: false,
                isInvalidAge: false,

                selectedSpecies: [],
                species: [],

                yes: false,
                no: false,

                multiselectOpened: false,

                dto: {
                    name: '',
                    type: '',
                    ageForChildbirth: '',
                    needWarmPlace: '',
                    speciesList: []
                }
            }
        },
        computed: {
            multiselectClass() {
                return {
                    'multiselect': true,
                    'multiselect-closed': !this.multiselectOpened,
                    'multiselect-opened': this.multiselectOpened
                }
            }
        },
        methods: {
            checkIsNumberAge() {
                this.isValidAge = !isNaN(this.dto.ageForChildbirth);
                this.isInvalidAge = isNaN(this.dto.ageForChildbirth);
            },

            onYesClick: function () {
                this.yes = true;
                this.no = false;
                this.dto.needWarmPlace = true
            },
            onNoClick: function () {
                this.yes = false;
                this.no = true;
                this.dto.needWarmPlace = false
            },

            onAddClick() {
                this.dto.speciesList = this.selectedSpecies;
                RestService.createSpecies(this.dto)
                    .then((result) => this.$emit('species-added'));

                this.dto = {};
                this.selectedSpecies = [];
                this.isInvalidAge = false;
                this.isValidAge = false;
                this.yes = false;
                this.no = false;
            },

            isAllValid() {//boolean
                const isEmpty = (value) => value && value !== '';
                return this.isValidAge && isEmpty(this.dto.name) && isEmpty(this.dto.type)
                    && isEmpty(this.dto.ageForChildbirth);
            },
            onMultiselectOpened() {
                this.multiselectOpened = true;
            },

            onMultiselectClosed() {
                this.multiselectOpened = false;
            },
        },
        created: function () {
            RestService.getSpecies().then((response) => this.species = response.data);
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h4 {
    text-align: center;
  }

  h5{
    min-height: 40px;
  }

  .breadcrumb {
    flex-wrap: nowrap;
    width: 94%;
    margin-left: 3%;
  }

  .form-container {
    display: flex;
    flex-direction: column;
  }

  .form-row {
    margin: 20px 70px;

    display: flex;
    justify-content: space-between;
  }

  .multiselect {
    max-width: 5000px;
  }

  .multiselect-closed {
    position: relative;
  }

  .multiselect-opened {
    position: absolute;
  }

  .add-btn{
    width: 27%;
    margin-top: 30px;
    max-height: 40px;
    display: inline-block;
  }

  .container-item {
    width: 27%;
    display: inline-block;
    min-height: 105px;
  }

  .form-bottom{
    margin-bottom: 40px;
  }

</style>
