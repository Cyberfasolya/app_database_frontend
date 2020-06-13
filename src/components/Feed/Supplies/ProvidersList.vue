<template>
  <div class=list>
    <button type="button"
            class="btn btn-primary"
            @click="onResetClick"
            :disabled="!isFilter()">
      Сбросить изменения списка поставщиков
    </button>
    <h3>Список поставщиков</h3>
    <div class="breadcrumb"
         v-for="(provider) of providers"
         :key="provider.id">
      <div class="list-item-content">
        <div class="name">
          Название поставщика: {{provider.name}}
          <br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import moment from "moment";

    export default {
        props: ['providers', 'isProvidersFilter'],
        name: 'providersList',
        data() {
            return {}
        },
        methods: {
            onResetClick() {
                this.$emit('reset-providers');
            },
            isFilter() {
                return this.isProvidersFilter;
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
    width: 27%;
    margin-left: 1%;
  }

  .list-item-content {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }

  .name {
    color: lightsteelblue;
    font-size: large;
    font-weight: bolder;
  }

  .btn {
    width: 90%;
    height: 40px;
    margin-bottom: 5px;
  }

</style>
