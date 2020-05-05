<template>
  <div class="breadcrumb container ">
    <h5>Добавление нового животного</h5>
    <div class="container-item">
      <div class="form-group">
        <label class="col-form-label" for="inputDefault">Введите имя животного</label>
        <input type="text" class="form-control" placeholder="Имя животного" id="inputDefault">
      </div>
    </div>
    <button type="button" class="btn btn-primary">Добавить</button>
  </div>
</template>

<script>
    import GenderChoice from "./GenderChoice";
    export default {
        name: 'addAnimalForm',
        data() {
            return {}
        },
        methods: {},
        components: {
            GenderChoice
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .breadcrumb {
    width: 94%;
    margin-left: 3%;
  }

  .container {
    display: flex;
    flex-direction: column;
  }

  .container-item {
    display: flex;
    flex-direction: row;
  }
</style>
