<template>
  <div class="form-group">
    <label for="exampleSelect1"><h5>Выберите вид животного</h5></label>
    <select class="form-control" id="exampleSelect1" v-model="selected"
            @change="() => this.$emit('species-change', species.find(item => item.name === selected))">
      <option disabled value="">Не выбрано</option>
      <option v-for="(species) of species"
              :key="species.id">{{species.name}}
      </option>
    </select>
  </div>
</template>

<script>
    import RestService from "../../../../service/RestService";

    export default {
        name: 'speciesChoice',
        data() {
            return {
                species: [],
                selected: ''
            }
        },
        methods: {},
        components: {},
        created: function () {
            RestService.getSpecies().then((response) => this.species = response.data);
        }

    }
</script>

<style scoped>

</style>
