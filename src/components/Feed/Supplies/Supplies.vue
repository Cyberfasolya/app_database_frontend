<template>
  <div>
    <h1>Поставки корма</h1>
    <SuppliesAddForm :providers="providers"
                     @supply-added="loadSupplies"/>
    <ProviderAddForm @provider-added="loadProviders"/>
    <div class="row-wrapper">
      <FilterByNamesPartForms @get-supplies-by-feed-name-part="filterSuppliesByName"
                              @get-supplies-by-provider-name-part="filterSuppliesByName"
                              :suppliesFilterDto="suppliesFilterDto"/>
      <SortingForms :suppliesSortDto="suppliesSortDto"
                    @sorting="sortSupplies"/>
    </div>
    <div class="list-wrapper">
      <ProvidersOrSuppliesFilterForm @filter-providers="filterProviders"
                                     @filter-supplies="filterSupplies"/>
      <ProvidersList :providers="providers"
                     :isProvidersFilter="isProvidersFilter"
                     @reset-providers="resetProviders"/>
      <SuppliesList :supplies="supplies"
                    :isSuppliesFilter="isSuppliesFilter"
                    @reset-supplies="resetSupplies"/>
    </div>
  </div>
</template>
<script>
    import FilterByNamesPartForms from "./FilterByNamesPartForms";
    import SuppliesAddForm from "./SuppliesAddForm";
    import ProviderAddForm from "./ProviderAddForm";
    import ProvidersOrSuppliesFilterForm from "./ProvidersOrSuppliesFilterForm";
    import ProvidersList from "./ProvidersList";
    import RestService from "../../../service/RestService";
    import SuppliesList from "./SuppliesList";
    import SortingForms from "./SortingForms";

    export default {
        name: 'supplies',
        data() {
            return {
                isProvidersFilter: false,
                isSuppliesFilter: false,
                providers: [],
                supplies: [],
                savedDto: {},
                suppliesFilterDto: {
                    feedNamePart: null,
                    providerNamePart: null,
                },
                suppliesSortDto: {
                    sortingType: null,
                    sortingAttribute: null,
                },
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
            filterSuppliesByName() {
                this.filterSupplies(this.suppliesFilterDto);
            },
            sortSupplies() {
                this.filterSupplies(this.suppliesSortDto);
            },
            filterSupplies(dto) {
                //сохр дто для последующих модификаций и добавление в дто новой модификации
                Object.assign(this.savedDto, dto);
                this.isSuppliesFilter = true;
                RestService.getFilterSupplies(this.savedDto).then((response) => this.supplies = response.data);
            },
            loadLists() {
                this.loadProviders();
                this.loadSupplies();
            },
            resetSupplies() {
                //очистить сохраненную дто
                this.savedDto = {};
                this.isSuppliesFilter = false;
                this.suppliesFilterDto.feedNamePart = null;
                this.suppliesFilterDto.providerNamePart = null;
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
            FilterByNamesPartForms,
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

  .row-wrapper {
    display: flex;
    flex-direction: row;
  }
</style>
