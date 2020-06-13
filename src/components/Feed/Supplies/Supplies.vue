<template>
  <div>
    <h1>Поставки корма</h1>
    <SuppliesAddForm :providers="this.providers"
                     @supply-added="loadSupplies"/>
    <ProviderAddForm @provider-added="loadProviders"/>
    <SortingForms @get-supplies-by-feed-name-part="loadSupplies"
                  @get-supplies-by-provider-name-part="loadSupplies"/>
    <div class="list-wrapper">
      <ProvidersOrSuppliesFilterForm @filter-providers="filterProviders"
                                     @filter-supplies="filterSupplies"/>
      <ProvidersList :providers="this.providers"
                     :isProvidersFilter="this.isProvidersFilter"
                     @reset-providers="resetProviders"/>
      <SuppliesList :supplies="this.supplies"
                    :isSuppliesFilter="this.isSuppliesFilter"
                    @reset-supplies="resetSupplies"/>
    </div>
  </div>
</template>
<script>
    import SortingForms from "./SortingForms";
    import SuppliesAddForm from "./SuppliesAddForm";
    import ProviderAddForm from "./ProviderAddForm";
    import ProvidersOrSuppliesFilterForm from "./ProvidersOrSuppliesFilterForm";
    import ProvidersList from "./ProvidersList";
    import RestService from "../../../service/RestService";
    import SuppliesList from "./SuppliesList";

    export default {
        name: 'supplies',
        data() {
            return {
                isProvidersFilter: false,
                isSuppliesFilter: false,
                providers: [],
                supplies: [],
            }
        },
        methods: {
            loadProviders() {
                RestService.getProviders().then((response) => this.providers = response.data)
            },
            loadSupplies() {
                RestService.getSupplies().then((response) => this.supplies = response.data)
            },
            filterProviders(dto) {
                this.isProvidersFilter = true;
                RestService.getFilterProviders(dto).then((response) => this.providers = response.data);
            },
            filterSupplies(dto) {
                //сохр дто для последующих модификаций
                this.isSuppliesFilter = true;
                RestService.getFilterSupplies(dto).then((response) => this.supplies = response.data);
            },
            loadLists() {
                this.loadProviders();
                this.loadSupplies();
            },
            resetSupplies() {
                //очистить сохраненную дто
                this.isSuppliesFilter = false;
                this.loadSupplies();
            },
            resetProviders() {
                this.isProvidersFilter = false;
                this.loadProviders();
            }
        },
        mounted: function () {
            this.loadLists();
        },
        components: {
            SuppliesAddForm,
            ProviderAddForm,
            ProvidersOrSuppliesFilterForm,
            ProvidersList,
            SuppliesList,
            SortingForms
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

  .list-wrapper {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
</style>
