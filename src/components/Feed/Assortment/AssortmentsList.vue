<template>
  <div class=list>
    <h3>Ассортименты поставщиков</h3>
    <div class="breadcrumb"
         v-for="(assortment) of assortments">
      <div class="list-item-content">
        <div class="provider-name">
          Название поставщика: {{assortment.providerName}}
        </div>
        <br>
        <div class="feed-name">
          Названия кормов:
          <div class="feeds"
            v-for="(feed) of assortment.feeds">
            {{feed}}
          </div>
          <br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import moment from "moment";

    export default {
        props: ['assortments'],
        name: 'assortmentsList',
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

  .list {
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 66%;
    margin-left: 1%;
  }

  .list-item-content {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }

  .provider-name {
    color: honeydew;
    font-size: large;
    font-weight: bolder;
  }

  .feed-name {
    color: lightsteelblue;
    font-size: large;
    font-weight: bolder;
  }

  .feeds{
    color: cadetblue;
    font-size: large;
    font-weight: bolder;
  }

</style>
