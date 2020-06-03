<template>
  <div>
    <h1>Поставки корма</h1>
    <SuppliesAddForm/>
    <ProviderAddForm/>
  </div>
</template>
<script>
  import SuppliesAddForm from "./SuppliesAddForm";
  import ProviderAddForm from "./ProviderAddForm";
    export default {
        name: 'supplies',
        data() {
            return {
            }
        },
        components:{
            SuppliesAddForm,
            ProviderAddForm
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
