<template>
  <div class="breadcrumb form-container ">
    <h4>Добавление нового доступа</h4>

    <div class="form-row">
      <!--ввод имени служащего-->
      <div class="container-item">
        <label class="col-form-label" for="inputName">
          <h5>Введите имя служащего</h5>
        </label>
        <input v-model="dto.employeeName"
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
        <input v-model="dto.employeeSurname"
               type="text"
               class="form-control"
               placeholder="Фамилия служащего"
               id="inputSurname">
      </div>

      <!--форма для ввода имени животного-->
      <div class="container-item">
        <div class="form-group">
          <label class="col-form-label" for="inputAnimalName">
            <h5>Введите имя животного</h5>
          </label>
          <input v-model="dto.animalName"
                 type="text"
                 class="form-control"
                 placeholder="Имя животного"
                 id="inputAnimalName">
        </div>
      </div>
    </div>

    <div class="form-row">
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

      <!--форма для ввода даты-->
      <div class="container-item">
        <div class="form-group">
          <label class="col-form-label" for="inputDateOfBirth">
            <h5>Введите дату начала доступа</h5>
          </label>
          <input type="date"
                 v-model="dto.accessStartDate"
                 class="form-control"
                 placeholder="гггг-мм-дд"
                 min="1990-01-01" max="2020-05-13"
                 id="inputDateOfBirth">
        </div>
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
    import RestService from "../../../service/RestService";

    export default {
        name: 'addAccessForm',
        data() {
            return {
                selectedSpecies: '',
                species: [],

                dto: {
                    employeeName: '',
                    employeeSurname: '',
                    animalName: '',
                    species: '',
                    accessStartDate: '',
                }
            }
        },
        methods: {
            onAddClick() {
                this.dto.species = this.species.find(item => item.name === this.selectedSpecies);
                //RestService.createAccess(this.dto).then(() => this.$emit('access-added'));

                this.dto = {};
                this.selectedSpecies = '';
            },
            isAllValid() {
                const isEmpty = (value) => value && value !== '';
                return isEmpty(this.selectedSpecies) && isEmpty(this.dto.employeeName) && isEmpty(this.dto.employeeSurname)
                    && isEmpty(this.dto.accessStartDate) && isEmpty(this.dto.animalName);

            },
        },
        created: function () {
            RestService.getSpecies().then((response) => this.species = response.data);
        },
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

  .form-container {
    display: flex;
    flex-direction: column;
  }

  .btn {
    margin-right: 5px;
  }

  .add-btn {
    width: 27%;
    margin-top: 40px;
    max-height: 40px;
    display: inline-block;
  }

  .container-item {
    width: 27%;
    display: inline-block;
    min-height: 120px;
  }
</style>
