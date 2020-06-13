<template>
  <div class="breadcrumb form-container ">
    <h4>Добавление нового обмена</h4>

    <div class="form-row">
      <!--форма для ввода имени животного-->
      <div class="container-item">
        <label class="col-form-label" for="inputName">
          <h5>Введите имя животного</h5>
        </label>
        <input v-model="dto.animal.name"
               type="text"
               class="form-control"
               placeholder="Имя животного"
               id="inputName">
      </div>

      <!--форма для выбора вида животного-->
      <div class="container-item">
        <label for="exampleSelect1"><h5>Выберите вид животного</h5></label>
        <select class="form-control" id="exampleSelect1" v-model="selectedSpecies">
          <option disabled value="">Не выбрано</option>
          <option v-for="(spec) of species"
                  :key="spec.id">{{spec.name}}
          </option>
        </select>
      </div>

      <!--форма для ввода вида название зоопарка-->
      <div class="container-item">
        <label for="zooSelect"><h5>Выберите зоопарк</h5></label>
        <select class="form-control" id="zooSelect" v-model="selectedZoo">
          <option disabled value="">Не выбрано</option>
          <option v-for="(zoo) of zoos"
                  :key="zoo.id">{{zoo.name}}
          </option>
        </select>
      </div>
    </div>

    <div class="form-row">
      <div class="container-item">
        <label for="exampleSelect"><h5>Выберете тип обмена</h5></label>
        <select class="form-control" id="exampleSelect" v-model="selectedSide">
          <option disabled>Не выбрано</option>
          <option>Отдача</option>
          <option>Получение</option>
        </select>
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
    import RestService from "../../service/RestService";

    export default {
        props: ['zoos'],
        name: 'exchangeAddForm',
        data() {
            return {
                selectedSpecies: '',
                selectedZoo: '',
                species: [],
                selectedSide: '',
                dto: {
                    animal: {
                        name: '',
                        species: '',
                    },
                    zoo: '',
                    side: '',
                }
            }
        },
        methods: {
            onAddClick() {
                this.dto.animal.species = this.species.find(item => item.name === this.selectedSpecies);
                this.dto.zoo = this.zoos.find(item => item.name === this.selectedZoo);
                this.dto.side = this.selectedSide !== "Отдача";

                RestService.createExchange(this.dto)
                    .then(() => {
                        this.dto = {};
                        this.selectedSpecies = '';
                        this.selectedZoo = '';
                        this.selectedSide = '';
                        this.$emit('exchange-added')
                        this.dto = {
                            animal: {
                                name: '',
                                species: '',
                            },
                            zoo: '',
                            side: '',
                        }
                    });
            },

            isAllValid() {
                const isEmpty = (value) => value && value !== '';
                return isEmpty(this.selectedSpecies) && isEmpty(this.selectedZoo) && isEmpty(this.selectedSide)
                    && isEmpty(this.dto.animal.name);

            },
        },

        mounted: function () {
            RestService.getSpecies().then((response) => this.species = response.data);
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

  .form-container {
    display: flex;
    flex-direction: column;
  }

  .form-row {
    margin: 5px 70px;

    display: flex;
    justify-content: space-between;
  }

  .add-btn {
    width: 27%;
    margin-top: 38px;
    max-height: 40px;
    margin-right: 37%;
    display: inline-block;
  }

  .container-item {
    width: 27%;
    display: inline-block;
    min-height: 120px;
  }

</style>
