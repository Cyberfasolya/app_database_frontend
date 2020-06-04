<template>
  <div class="breadcrumb form-column-container">
    <h4>Добавление нового поставщика</h4>
    <div class="form-row">
      <!--форма для ввода название поставщика-->
      <div class="container-item">
        <label class="col-form-label" for="inputDefault">
          <h5>Введите название поставщика</h5>
        </label>
        <input v-model="dto.name"
               type="text"
               class="form-control"
               placeholder="Название поставщика"
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
    import RestService from "../../../service/RestService";

    export default {
        name: 'providerAddForm',
        data() {
            return {
                dto: {
                    name: ''
                }
            }
        },
        methods: {
            onAddClick() {
               // RestService.createProvider(this.dto).then(() => this.$emit('provider-added'));

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
    margin-left: 3%;
    margin-right: 3%;
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
    width: 27%;
    margin-top: 45px;
    max-height: 35px;
    margin-right: 37%;
    display: inline-block;
  }

  .container-item {
    width: 27%;
    display: inline-block;
    min-height: 120px;
  }
</style>
