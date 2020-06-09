<template>
  <div class="breadcrumb form-container">
    <h4>Добавление меню</h4>
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

      <!--выбор сезон-->
      <div class="container-item">
        <label for="roleSelect"><h5>Выберите сезон</h5></label>
        <select class="form-control" id="roleSelect" v-model="dto.season">
          <option disabled value="">Не выбрано</option>
          <option>лето</option>
          <option>осень</option>
          <option>зима</option>
          <option>весна</option>
        </select>
      </div>

    </div>

    <hr size="10"/>

    <AddMenuContent @menu-content-added="onMenuContentAdded"/>

    <MenuContentList :menuContent="dto.menuContents"
                     @remove-menu-content="onMenuContentRemove"/>

    <div class="form-footer">
      <button type="button"
              class="btn btn-primary"
              @click="onAddClick"
              :disabled="!isAllValid()">
        Добавить меню
      </button>
    </div>
  </div>

</template>

<script>
    import RestService from "../../../service/RestService";
    import MenuContentList from "./MenuContentList";
    import AddMenuContent from "./AddMenuContent";

    export default {
        name: 'menuAddForm',

        data() {
            return {
                species: [],
                selectedSpecies: '',
                dto: {
                    speciesDto: '',
                    season: '',
                    menuContents: [],
                }
            }
        },
        methods: {

            onAddClick() {
                this.dto.speciesDto = this.species.find(item => item.name === this.selectedSpecies);
                const clearForm = () => {
                    this.$emit('menu-added');
                    this.dto = {
                        speciesDto: '',
                        season: '',
                        menuContents: [],
                    };
                    this.species = [];
                    this.selectedSpecies = '';
                };

                 RestService.createMenu(this.dto).then(clearForm, clearForm);
            },

            isAllValid() {
                const isEmpty = (value) => value && value !== '' && value.length > 0;
                return isEmpty(this.dto.season) && isEmpty(this.selectedSpecies)
                    && isEmpty(this.dto.menuContents);

            },

            onMenuContentAdded(menuContent) {
                this.dto.menuContents.push(menuContent)
            },

            onMenuContentRemove(index) {
                this.dto.menuContents.splice(index, 1);
            },

        },
        mounted: function () {
            RestService.getSpecies().then((response) => this.species = response.data);
        },
        components: {
            MenuContentList,
            AddMenuContent
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h4 {
    text-align: center;
  }

  .breadcrumb {
    flex-wrap: nowrap;
    margin-right: 3%;
    margin-left: 3%;
  }

  .form-container {
    display: flex;
    flex-direction: column;
  }

  .btn {
    width: 40%;
    min-width: 180px;
  }

  .container-item {
    height: auto;
    display: inline-block;
    flex-direction: column;
    width: 27%;
  }

  hr {
    width: 90%;
    margin-top: 30px;
    margin-bottom: 30px;
    border-top: 3px solid;
    color: #222;
  }

  .form-row {
    margin-top: 10px;
    margin-left: 10%;
    margin-right: 10%;

    display: flex;
    justify-content: space-between;
  }

  .form-footer {
    margin-left: 5%;
    margin-right: 5%;
    justify-content: center;
    display: flex;
    margin-bottom: 20px;
  }


  textarea {
    height: 60px;
  }

  input {
    height: 43px;
  }

</style>
