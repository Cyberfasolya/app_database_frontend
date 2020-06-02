<template>
  <div>
    <h1>Ассортимент</h1>
    <FeedAddForm/>
    <AssortmentAddForm/>
    <div class="list-container">
      <FeedsList :feeds="this.feeds"/>
      <AssortmentsList :assortments="this.assortments"/>
    </div>
  </div>
</template>
<script>
    import FeedAddForm from "./FeedAddForm";
    import AssortmentAddForm from "./AssortmentAddForm";
    import AssortmentsList from "./AssortmentsList";
    import RestService from "../../../service/RestService";
    import FeedsList from "./FeedsList";

    export default {
        name: 'assortment',
        data() {
            return {
                assortments: [],
                feeds: [],
            }
        },
        methods: {
            loadAssortments() {
                RestService.getAssortments().then((response) => this.assortments = response.data)
            },
            loadFeeds() {
                RestService.getFeeds().then((response) => this.feeds = response.data)
            },
        },
        mounted: function () {
            this.loadAssortments();
            this.loadFeeds();
        },
        components: {
            FeedAddForm,
            AssortmentAddForm,
            AssortmentsList,
            FeedsList
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    text-align: center;
    margin-bottom: 30px;
    margin-top: 10px;
  }

  .list-container {
    display: flex;
    flex-direction: row;
  }
</style>
