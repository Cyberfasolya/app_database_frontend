<template>
  <div class=list>
    <button type="button"
            class="btn btn-primary"
            @click="onResetClick"
            :disabled="!isFilter()">
      Сбросить изменения списка поставок
    </button>
    <h3>Список поставок</h3>
    <div class="breadcrumb"
         v-for="(supply) of suppliesData.supplies">
      <div class="list-item-content">
        <div class="base-info">
          Название поставщика: {{supply.providerName}}
          <br>
          Название корма: {{supply.feedName}}
          <br>
        </div>
        <div class="info">
          Дата поставки: {{getSupplyDate(supply)}}
          <br>
          Кол-во корма: {{supply.feedAmount}} кг
          <br>
          Цена: {{supply.price}} тыс. рублей
          <br>
        </div>
      </div>
    </div>
    <div class="pagination-wrapper">
      <ul class="pagination">
        <li class="page-item" v-for="(page) of pages" @click="() => openPage(page)">
          <a class="page-link">{{page}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    import moment from "moment";

    export default {
        props: ['suppliesData', 'isSuppliesFilter', 'pageNumberDto'],
        name: 'suppliesList',
        data() {
            return {}
        },
        methods: {
            getSupplyDate(supply) {
                return moment(supply.supplyDate).calendar();
            },
            onResetClick() {
                this.$emit('reset-supplies');
            },
            isFilter() {
                return this.isSuppliesFilter;
            },
            openPage(page){
                this.pageNumberDto.page = page;
                this.$emit('select-new-page');
            }
        },
        computed: {
            pages() {
                const pages = [];
                const numberOfPages = Math.ceil(this.suppliesData.numberOfSupplies / 10);
                for (let i = 0; i < numberOfPages; i++) {
                    pages.push(i + 1);
                }
                return pages;
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    text-align: center;
  }

  .breadcrumb {
    margin-bottom: 5px;
  }

  .list {
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 42%;
    margin-left: 1%;
    margin-right: 3%;
  }

  .list-item-content {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }

  .info {
    color: lightsteelblue;
    font-size: large;
    font-weight: bolder;
  }

  .base-info {
    color: honeydew;
    font-size: large;
    font-weight: bolder;
  }

  .btn {
    width: 55%;
    height: 40px;
    margin-bottom: 5px;
  }

  .pagination-wrapper {
    display: flex;
    flex-direction: column;
  }

  .pagination {
    justify-content: center;
  }

</style>
