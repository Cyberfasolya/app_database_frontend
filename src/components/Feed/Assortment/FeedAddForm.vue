<template>
  <div class="breadcrumb form-column-container">
    <h4>Добавление нового корма</h4>
    <div class="form-row">
      <!--форма для ввода название корма-->
      <div class="container-item">
        <label class="col-form-label" for="inputDefault">
          <h5>Введите название корма</h5>
        </label>
        <input v-model="dto.name"
               type="text"
               class="form-control"
               placeholder="Название корма"
               id="inputDefault">
      </div>

      <!--выбор типа корма-->
      <div class="container-item">
        <label for="roleSelect"><h5>Выберите тип корма</h5></label>
        <select class="form-control" id="roleSelect" v-model="dto.type">
          <option disabled value="">Не выбрано</option>
          <option>мясо</option>
          <option>живой</option>
          <option>растительный</option>
          <option>комбикорм</option>
        </select>
      </div>

      <button type="button"
              class="btn btn-primary add-btn"
              @click="onAddClick"
              :disabled="!isInputsNotEmpty()">
        Добавить
      </button>
    </div>
  </div>


</template>

<script>
    import RestService from "../../../service/RestService";;

    export default {
        name: 'feedAddForm',
        data() {
            return {
                dto: {
                    name: '',
                    type: ''
                }
            }
        },
        methods: {
            onAddClick() {
                 RestService.createFeed(this.dto).then(() => this.$emit('feed-added'));
                this.dto = {};
            },
            isInputsNotEmpty() {
                return (this.dto.name && this.dto.name !== '') && (this.dto.type && this.dto.type !== '');
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
    margin-top: 40px;
    max-height: 35px;
    margin-left: 5%;
    display: inline-block;
  }

  .container-item {
    width: 27%;
    display: inline-block;
    min-height: 120px;
  }
</style>
