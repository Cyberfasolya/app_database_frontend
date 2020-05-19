<template>
  <div class="breadcrumb">

    <div class="form-container">
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

      <button type="button"
              class="btn btn-primary add-btn">
        Показать список зоопарков
      </button>
    </div>
  </div>


</template>

<script>
    export default {
        props: ['species'],//передавать
        name: 'zooListForm',

        data() {
            return {
                selectedSpecies: '',
                dto: {
                    species: '',
                }
            }
        },
        methods: {},
        components: {}
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

  .add-btn {
    width: 45%;
    max-height: 40px;
    margin-left: 5%;
    margin-top: 50px;
    display: inline-block;
  }

  .container-item {
    width: 45%;
    margin-top: 20px;
  }
</style>
