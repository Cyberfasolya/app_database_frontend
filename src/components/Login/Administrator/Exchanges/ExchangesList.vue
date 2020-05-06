<template>
  <div class=list>
    <div class="breadcrumb"
         v-for="(exchange) of exchanges"
         :key="exchange.id">
      <div class="list-item-content">
        <div class="main-information">

          <br>

        </div>
        <div class="basic-information">

        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import RestService from "@/service/RestService";

    export default {
        name: 'exchangesList',
        data() {
            return {
                exchanges: []
            }
        },
        methods: {
        },
        created: function () {
            RestService.getExchanges().then((response) => this.exchanges = response.data);
        }
    }
</script>


<style scoped>
  h1 {
    text-align: center;
  }

  .list {
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 68%;
    margin-left: 1%;
  }

  .list-item-content {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }

  .main-information {
    color: honeydew;
    font-size: large;
    font-weight: bolder;
  }

  .basic-information {
    color: cadetblue;
    font-size: large;
    font-weight: bolder;
  }
</style>
