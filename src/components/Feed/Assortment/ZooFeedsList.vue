<template>
  <div class=list>
    <h4>Список и объем кормов, которые зоопарк производит сам</h4>
    <div class="breadcrumb">
      <div class="info list-item-content">
        Количество поставок зоопарка: {{dto.numberOfZooSupplies}}
        <br>
      </div>
      <div v-for="(feed) of dto.feeds"
           :key="feed.id">
        <div class="list-item-content">
          <div class="feed">
            Название корма: {{feed.name}}
            <br>
            Суммарный объем корма: {{feed.amount}} кг
            <br>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import RestService from "../../../service/RestService";

    export default {
        name: 'zooFeedsList',
        data() {
            return {
                dto: {}
            }
        },
        methods: {
            loadFeeds() {
                RestService.getZooFeeds().then((response) => this.dto = response.data)
            },
        },
        mounted: function () {
            this.loadFeeds();
        },
    }
</script>

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
  }

  .list-item-content {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }

  .feed {
    color: lightsteelblue;
    font-size: large;
    font-weight: bolder;
  }

  .info {
    color: cadetblue;
    font-size: large;
    font-weight: bolder;
  }


</style>
