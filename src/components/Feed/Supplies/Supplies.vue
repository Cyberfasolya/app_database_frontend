<template>
  <div>
    <h1>Поставки корма</h1>
    <SuppliesAddForm/>
    <ProviderAddForm/>
    <div class="form-row">
      <ProviderFilterForm/>
      <ProvidersList :providers="this.providers"/>
      <SuppliesList :supplies="this.supplies"/>
    </div>
  </div>
</template>
<script>
    import SuppliesAddForm from "./SuppliesAddForm";
    import ProviderAddForm from "./ProviderAddForm";
    import ProviderFilterForm from "./ProviderFilterForm";
    import ProvidersList from "./ProvidersList";
    import RestService from "../../../service/RestService";
    import SuppliesList from "./SuppliesList";

    export default {
        name: 'supplies',
        data() {
            return {
                providers: [],
                supplies: [],
            }
        },
        methods: {
            loadProviders() {
                RestService.getProviders().then((response) => this.providers = response.data)//dto with filters
            },
            loadSupplies() {
                RestService.getSupplies().then((response) => this.supplies = response.data)//dto with filters
            },
        },
        mounted: function () {
            this.loadProviders();
            this.loadSupplies();
        },
        components: {
            SuppliesAddForm,
            ProviderAddForm,
            ProviderFilterForm,
            ProvidersList,
            SuppliesList
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

  .form-row {
    display: flex;
    flex-direction: row;
  }
</style>
