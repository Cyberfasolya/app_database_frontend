<template>
  <div class=list>
    <div class="breadcrumb"
         v-for="(assortment) of assortments">
      <div class="list-item-content">
        <div class="provider-name">
          Название провайдера: {{assortment.providerName}}
        </div>
        <br>
        <div class="feed-name">
          Название корма: {{assortment.feedName}}
        </div>
        <br>
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
    width: 67%;
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

</style>
