<template>
  <div class="breadcrumb form-column-container">
    <h4>Пополнение ассортимента</h4>
    <div class="form-row">
      <!--форма для ввода название корма-->
      <div class="container-item">
        <label class="col-form-label" for="inputDefault">
          <h5>Введите название корма</h5>
        </label>
        <input v-model="dto.feedName"
               type="text"
               class="form-control"
               placeholder="Название корма"
               id="inputDefault">
      </div>

      <div class="container-item">
        <label class="col-form-label" for="inputDefault1">
          <h5>Введите название поставщика</h5>
        </label>
        <input v-model="dto.providerName"
               type="text"
               class="form-control"
               placeholder="Название поставщика"
               id="inputDefault1">
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
        name: 'zooAddForm',
        data() {
            return {
                dto: {
                    feedName: '',
                    providerName: ''
                }
            }
        },
        methods: {
            onAddClick() {
                // RestService.creatFeed(this.dto).then(() => this.$emit('feed-added'));
                this.dto = {};
            },
            isNameNotEmpty() {
                return (this.dto.feedName && this.dto.feedName !== '') && (this.dto.providerName && this.dto.providerName !== '');
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
    margin-left: 5%;
    display: inline-block;
  }

  .container-item {
    width: 27%;
    display: inline-block;
    min-height: 120px;
  }
</style>
