<template>
  <div class=list>
    <h3>Список кормов</h3>
    <div class="breadcrumb"
         v-for="(feed) of feeds"
         :key="feed.id">
      <div class="list-item-content">
        <div class="feed">
          Название корма: {{feed.name}}
          <br>
          Тип корма: {{feed.type}}
          <br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import moment from "moment";

    export default {
        props: ['feeds'],
        name: 'feedsList',
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
  .breadcrumb{
    margin-bottom: 5px;
  }

  .list {
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 27%;
    margin-left: 3%;
  }

  .list-item-content {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }

  .feed{
    color: lightsteelblue;
    font-size: large;
    font-weight: bolder;
  }


</style>
