<template>
  <div>
    <h1>Ассортимент</h1>
    <FeedAddForm/>
    <AssortmentAddForm/>
  </div>
</template>
<script>
    import FeedAddForm from "./FeedAddForm";
    import AssortmentAddForm from "./AssortmentAddForm";

    export default {
        name: 'assortment',
        data() {
            return {}
        },
        components: {
            FeedAddForm,
            AssortmentAddForm
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
</style>
