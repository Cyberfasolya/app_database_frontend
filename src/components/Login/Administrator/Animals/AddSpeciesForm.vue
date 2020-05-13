<template>
  <div class="breadcrumb form-container ">
    <h4>Добавление нового вида животного</h4>

    <!--форма для ввода имени животного-->

    <div class="container-item">
      <div class="form-group">
        <label class="col-form-label" for="inputName">
          <h5>Введите название нового вида животного</h5>
        </label>
        <input v-model="dto.name"
               type="text"
               class="form-control"
               placeholder="Имя животного"
               id="inputName">
      </div>
    </div>

    <!--форма для выбора типа вида животного-->

    <div class="form-group container-item">
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

    <div class="form-group">
      <label for="exampleSelect3">Выберите своместимые с новым виды животных</label>
      <select multiple="" class="form-control" id="exampleSelect3">
        <option disabled value="">Не выбрано</option>
        <option v-for="(species) of species"
                :key="species.id">{{species.name}}
        </option>
      </select>
    </div>

    <button type="button"
            class="btn btn-primary add-btn"
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
                isValidAge: false,
                isInvalidAge: false,

                yes: false,
                no: false,

                dto: {
                    name: '',
                    type: '',
                    ageForChildbirth: '',
                    needWarmPlace:''
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
                this.dto.needWarmPlace = 'yes'
            },
            onNoClick: function () {
                this.yes = false;
                this.no = true;
                this.dto.needWarmPlace = 'no'
            },

            onAddClick() {
                this.dto.species = this.species.find(item => item.name === this.selectedSpecies);
                // RestService.createSpecies(this.dto);

                this.dto = {};
                this.isInvalidAge = false;
                this.isValidAge = false;
                this.yes = false;
                this.no = false;
                // this.$emit('species-added');
            },

            isAllValid() {
                const isEmpty = (value) => value && value !== '';
                return this.isValidAge && isEmpty(this.dto.name) && isEmpty(this.dto.type)
                    && isEmpty(this.dto.ageForChildbirth) && isEmpty(this.dto.needWarmPlace);
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
    height: 240px;
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

  .add-btn {
    margin-top: 5%;
  }

  .container-item {
    width: 20%;
    margin-left: 5%;
  }
</style>
