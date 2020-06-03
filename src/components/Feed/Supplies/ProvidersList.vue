<template>
  <div class=list>
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
        props: ['providers'],
        name: 'providersList',
        data() {
            return {}
        },
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


</style>
