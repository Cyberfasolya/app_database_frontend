<template>
  <div class="breadcrumb form-column-container">
    <h4>Добавление нового зоопарка</h4>
    <div class="form-row">
      <!--форма для ввода название зоопарка-->
      <div class="container-item">
        <label class="col-form-label" for="inputDefault">
          <h5>Введите название зоопарка</h5>
        </label>
        <input v-model="dto.name"
               type="text"
               class="form-control"
               placeholder="Название зоопарка"
               id="inputDefault">
      </div>

      <button type="button"
              class="btn btn-primary add-btn"
              @click="onAddClick"
              :disabled="!isNameNotEmpty()">
        Добавить
      </button>
    </div>
  </div>

</template>

<script>
    import RestService from "../../../../service/RestService";

    export default {
        name: 'zooAddForm',
        data() {
            return {
                dto: {
                    name: ''
                }
            }
        },
        methods: {
            onAddClick() {
                RestService.createZoo(this.dto).then(() => this.$emit('zoo-added'));

                this.dto = {};
            },
            isNameNotEmpty() {
                return this.dto.name && this.dto.name !== '';
            },
        },
        components: {}
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h4 {
    text-align: center;
    margin-bottom: 10px;
  }

  .breadcrumb {
    flex-wrap: nowrap;
    width: 47%;
    margin-left: 3%;
    margin-right: 1%;
  }

  .form-row {
    margin: 5px 70px;

    display: flex;
    justify-content: space-between;
  }

  .form-column-container {
    display: flex;
    flex-direction: column;
  }

  .add-btn {
    width: 45%;
    margin-top: 45px;
    max-height: 35px;
    margin-left: 5%;
    display: inline-block;
  }

  .container-item {
    width: 50%;
    display: inline-block;
    min-height: 120px;
  }
</style>
