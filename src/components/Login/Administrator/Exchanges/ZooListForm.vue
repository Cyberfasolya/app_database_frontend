<template>
  <div class="breadcrumb form-container ">

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

    <button type="button" class="btn btn-primary">Показать список зоопарков</button>
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
    height: 230px;
  }

  .form-container {
    display: flex;
    flex-direction: column;
  }

  .btn {
    margin-right: 7%;
    margin-left: 5%;
    width: 50%;
  }

  .container-item {
    width: 50%;
    margin-left: 5%;
  }
</style>
