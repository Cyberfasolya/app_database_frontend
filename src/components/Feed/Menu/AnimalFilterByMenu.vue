<template>
  <div class="filters breadcrumb">

    <!--выбор сезон-->
    <div class="container-item">
      <label for="roleSelect"><h5>Выберите сезон</h5></label>
      <select class="form-control" id="seasonSelect" v-model="dto.season">
        <option disabled value="">Не выбрано</option>
        <option>лето</option>
        <option>осень</option>
        <option>зима</option>
        <option>весна</option>
      </select>
    </div>

    <!--выбор типа корма-->
    <div class="container-item">
      <label for="roleSelect"><h5>Выберите тип корма</h5></label>
      <select class="form-control" id="roleSelect" v-model="dto.feedType">
        <option disabled value="">Не выбрано</option>
        <option>мясо</option>
        <option>живой</option>
        <option>растительный</option>
        <option>комбикорм</option>
      </select>
    </div>

    <button type="button"
            class="btn btn-primary"
            @click="onShowClick"
            :disabled="!isAllValid()">
      Показать список животных
    </button>

    <button type="button"
            class="btn btn-primary"
            @click="onResetClick"
            :disabled="!isFilter()">
      Сбросить
    </button>
  </div>
</template>

<script>
    import RestService from "../../../service/RestService";

    export default {
        name: 'animalFilterByMenu',
        data() {
            return {
                dto: {
                    season: null,
                    feedType: null
                }
            }
        },
        methods: {
            onShowClick() {
                this.$emit('filter-animals', this.dto);

                this.dto.season = null;
                this.dto.feedType = null;
                this.isShown = true;
            },

            isAllValid() {
                const isEmpty = (value) => value && value !== '';
                return isEmpty(this.dto.season) || isEmpty(this.dto.feedType);
            },
            onResetClick() {
                this.isShown = false;
                this.$emit('reset-animals');
            },

            isFilter() {
                return this.isShown;
            }
        },
        components: {},
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    text-align: center;
  }

  .filters {
    height: 400px;
    width: 23%;
    margin-left: 3%;
  }

  .container-item {
    width: 83%;
    margin-left: 5%;
    min-height: 100px;
  }

  .btn {
    width: 80%;
    margin-left: 5%;
    height: 40px;
  }

  .control-btn {
    margin-right: 5px;
  }

  .text-control {
    margin-left: 5%;
  }

</style>
