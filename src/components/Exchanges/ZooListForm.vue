<template>
  <div class="breadcrumb">

    <div class="form-container">
      <!--форма для выбора вида животного-->
      <div class="container-item">
        <label for="exampleSelect1"><h5>Выберите вид животного</h5></label>
        <select class="form-control" id="exampleSelect1" v-model="selectedSpecies">
          <option disabled value="">Не выбрано</option>
          <option v-for="(spec) of speciesList"
                  :key="spec.id">{{spec.name}}
          </option>
        </select>
      </div>

      <div class="form-btn">
        <button type="button"
                class="btn btn-primary control-btn"
                @click="onShowClick"
                :disabled="!isSpeciesEmpty()">
          Показать
        </button>

        <button type="button"
                class="btn btn-primary control-btn"
                @click="onResetClick"
                :disabled="!isFilter()">
          Сбросить
        </button>
      </div>
    </div>
  </div>


</template>

<script>
    import RestService from "../../service/RestService";

    export default {
        name: 'zooListForm',
        data() {
            return {
                selectedSpecies: '',
                speciesList: [],

                isShown: false,

                dto: {
                    species: '',
                }
            }
        },
        methods: {
            onShowClick() {
                if (this.selectedSpecies && this.selectedSpecies !== '') {
                    this.dto.species = this.speciesList.find(item => item.name === this.selectedSpecies);
                }
                this.$emit('filter-zoos', this.dto);

                this.dto = {};
                this.selectedSpecies = '';
                this.isShown = true;
            },

            isSpeciesEmpty() {
                return this.selectedSpecies && this.selectedSpecies !== '';
            },

            onResetClick() {
                this.isShown = false;
                this.$emit('filter-zoo');
            },

            isFilter() {
                return this.isShown;
            }
        },
        components: {},
        mounted: function () {
            RestService.getSpecies().then((response) => this.speciesList = response.data);
        },
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h4 {
    margin-left: 5%;
  }

  .breadcrumb {
    flex-wrap: nowrap;
    width: 46%;
    margin-right: 3%;
  }

  .form-container {
    display: flex;
    flex-direction: row;
    width: 100%;

    display: flex;
    justify-content: space-between;
  }

  .form-btn {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  .control-btn {
    max-height: 40px;
    margin-left: 5%;
    margin-top: 10px;
    display: inline-block;
  }

  .container-item {
    width: 45%;
    margin-top: 20px;
  }
</style>
