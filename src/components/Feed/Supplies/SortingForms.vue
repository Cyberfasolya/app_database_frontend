<template>
  <div class="breadcrumb column-wrapper">
    <h4>Сортировка</h4>
    <div class="form-row">
      <!--выбор параметра-->
      <div class="container-item">
        <label for="roleSelect"><h5>Параметр сортировки</h5></label>
        <select class="form-control" id="seasonSelect" v-model="selectedAttribute">
          <option disabled value="">Не выбрано</option>
          <option>Название поставщика</option>
          <option>Название корма</option>
          <option>Дата поставки</option>
          <option>Кол-во корма</option>
          <option>Цена</option>
        </select>
      </div>

      <!--выбор типа сортировки-->
      <div class="container-item">
        <label for="roleSelect"><h5>Тип сортировки</h5></label>
        <select class="form-control" id="roleSelect" v-model="selectedSortingType">
          <option disabled value="">Не выбрано</option>
          <option>По убыванию</option>
          <option>По возрастанию</option>
        </select>
      </div>

      <button type="button"
              class="btn btn-primary"
              @click="onSortClick"
              :disabled="!isAllValid()">
        Сортировать
      </button>

    </div>

  </div>
</template>


<script>
    export default {
        name: 'sortingForms',
        props: ['suppliesSortDto'],
        methods: {
            onSortClick() {
                this.suppliesSortDto.sortingAttribute = this.getAttribute(this.selectedAttribute);
                this.suppliesSortDto.sortingType = this.getSortingType(this.selectedSortingType);
                this.$emit('sorting');
                this.selectedAttribute = null;
                this.selectedSortingType = null;
            },
            isAllValid() {
                const isValid = (value) => value && value !== '';
                return isValid(this.selectedAttribute) && isValid(this.selectedSortingType);
            },
            getAttribute(attribute) {
                const attributes = {
                    providerName: "Название поставщика",
                    feedName: "Название корма",
                    supplyDate: "Дата поставки",
                    feedAmount: "Кол-во корма",
                    price: "Цена",
                };
                console.log(attribute);
                return Object.entries(attributes).find(([key, value]) => value === attribute)[0];
            },
            getSortingType(type) {
                const types = {
                    asc: "По возрастанию",
                    desc: "По убыванию",
                };
                return Object.entries(types).find(([key, value]) => value === type)[0];
            },
        },
        data() {
            return {
                selectedAttribute: null,
                selectedSortingType: null,
            }
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
    margin-right: 3%;
    width: 47%;
  }

  .form-row {
    display: flex;
    flex-direction: row;;
  }

  .container-item {
    width: 30%;
    margin-left: 3%;
  }

  .column-wrapper {
    display: flex;
    flex-direction: column;
  }

  .btn {
    height: 40px;
    margin-top: 38px;
    width: 30%;
    margin-left: 3%;
  }
</style>
