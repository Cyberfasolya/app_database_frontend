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
                                     @filter-supplies="filterSuppliesByBasicInfo"/>
      <ProvidersList :providers="providers"
                     :isProvidersFilter="isProvidersFilter"
                     @reset-providers="resetProviders"/>
      <SuppliesList :suppliesData="suppliesData"
                    :isSuppliesFilter="isSuppliesFilter"
                    :pageNumberDto="pageNumberDto"
                    @reset-supplies="resetSupplies"
                    @select-new-page="filterSupplies"/>
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
                suppliesData: {},
                savedDto: {},
                suppliesFilterDto: {
                    feedNamePart: null,
                    providerNamePart: null,
                },
                suppliesSortDto: {
                    sortingType: null,
                    sortingAttribute: null,
                },
                pageNumberDto: {
                    page: 1,
                }
            }
        },
        methods: {
            loadProviders() {
                RestService.getProviders().then((response) => this.providers = response.data)
            },
            loadSupplies() {
                RestService.getFilterSupplies(this.pageNumberDto).then((response) => this.suppliesData = response.data)
            },
            filterProviders(dto) {
                this.isProvidersFilter = true;
                RestService.getFilterProviders(dto).then((response) => this.providers = response.data);
            },
            filterSuppliesByName() {
                this.filterSupplies(this.suppliesFilterDto);
                this.isSuppliesFilter = true;
            },
            sortSupplies() {
                this.filterSupplies(this.suppliesSortDto);
                this.isSuppliesFilter = true;
            },
            filterSuppliesByBasicInfo(dto){
                this.filterSupplies(dto);
                this.isSuppliesFilter = true;
            },
            filterSupplies(dto) {
                //сохр дто для последующих модификаций и добавление в дто новой модификации
                Object.assign(this.savedDto, this.pageNumberDto);
                Object.assign(this.savedDto, dto);
                RestService.getFilterSupplies(this.savedDto).then((response) => this.suppliesData = response.data);
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
