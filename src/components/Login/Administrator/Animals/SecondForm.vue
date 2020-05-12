<template>
  <div class="filters breadcrumb">

    <!--форма для выбора вида животного-->
    <div class="form-group container-item">
      <label for="exampleSelect1"><h5>Выберите вид, с которым должно быть совместимо животное</h5></label>
      <select class="form-control" id="exampleSelect1" v-model="selectedSpecies">
        <option disabled value="">Не выбрано</option>
        <option v-for="(species) of species"
                :key="species.id">{{species.name}}
        </option>
      </select>
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
        name: 'secondForm',
        data() {
            return {
                selectedSpecies: '',

                species: [],

                yes: false,
                no: false,

                dto: {
                    species: '',
                    needWarmPlace:'',
                }
            }
        },
        methods: {
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
            onShowClick() {
                this.dto.species = this.species.find(item => item.name === this.selectedSpecies);
                // RestService
                this.dto = {};
                this.selectedSpecies = '';
                //this.$emit('show-list2');
            },

            isAllValid() {
                const isEmpty = (value) => value && value !== '';
                return isEmpty(this.dto.needWarmPlace) && isEmpty(this.selectedSpecies);

            }
        },
        created: function () {
            RestService.getSpecies().then((response) => this.species = response.data);
        },
        components: {
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    text-align: center;
  }

  .filters {
    height: 370px;
    width: 87%;
    margin-left: 10%;
  }

  .container-item {
    width: 73%;
    margin-left: 5%;
  }

  .btn {
    width: 80%;
    margin-left: 5%;
    height: 40px;
    margin-right: 7%;
  }

</style>
