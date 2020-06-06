<template>
  <div class="breadcrumb form-column-container">
    <h4>Пополнение ассортимента</h4>
    <div class="form-row">

      <!--форма для выбора поставщика-->
      <div class="container-item">
        <label for="exampleSelect1"><h5>Выберите название поставщика</h5></label>
        <select class="form-control" id="exampleSelect1" v-model="selectedProvider">
          <option disabled value="">Не выбрано</option>
          <option v-for="(provider) of providers"
                  :key="provider.id">{{provider.name}}
          </option>
        </select>
      </div>

      <!--форма для ввода название корма-->
      <div class="container-item" v-if="isProviderChosen()">
        <label for="exampleSelect"><h5>Выберите название корма</h5></label>
        <select class="form-control" id="exampleSelect" v-model="selectedFeed">
          <option disabled value="">Не выбрано</option>
          <option v-for="(feed) of getFeeds">
            {{feed}}
          </option>
        </select>
      </div>

      <button type="button"
              class="btn btn-primary add-btn"
              @click="onAddClick"
              :disabled="!isInputsNotEmpty()">
        Добавить
      </button>
    </div>
  </div>
</template>

<script>
    import RestService from "../../../service/RestService";

    export default {
        name: 'assortmentAddForm',
        props: ['feeds', 'assortments'],
        data() {
            return {
                selectedProvider: '',
                selectedFeed: '',
                providerFeeds: [],

                providers: [],
                dto: {
                    feeds: [],
                    providerName: ''
                }
            }
        },
        computed: {
            getFeeds() {
                this.providerFeeds = this.assortments.find(item => item.providerName === this.selectedProvider).feeds;
                return this.feeds.filter(item => !this.providerFeeds.find(feed => item.name === feed)).map(item => item.name);
            },
        },
        methods: {
            onAddClick() {
                this.dto.providerName = this.providers.find(item => item.name === this.selectedProvider).name;
                this.dto.feeds.push(this.feeds.find(item => item.name === this.selectedFeed).name);

                RestService.createAssortment(this.dto).then(() => this.$emit('assortment-added'));
                this.dto = {};
                this.selectedFeed = '';
                this.selectedProvider = '';
            },
            isInputsNotEmpty() {
                return (this.selectedFeed && this.selectedFeed !== '')
                    && (this.selectedProvider && this.selectedFeed !== '');
            },

            isProviderChosen() {
                return this.selectedProvider !== '' && this.selectedProvider;
            },

            loadProviders() {
                RestService.getProviders().then((response) => this.providers = response.data)
            }
        },

        mounted: function () {
            this.loadProviders();
        },

        components: {}
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h4 {
    text-align: center;
    margin-bottom: 10px;
  }

  .breadcrumb {
    flex-wrap: nowrap;
    margin-left: 3%;
    margin-right: 3%;
  }

  .form-row {
    margin: 5px 70px;

    display: flex;
    justify-content: space-between;
  }

  .form-column-container {
    display: flex;
    flex-direction: column;
  }

  .add-btn {
    width: 27%;
    margin-top: 40px;
    max-height: 35px;
    margin-left: 5%;
    display: inline-block;
  }

  .container-item {
    width: 27%;
    display: inline-block;
    min-height: 120px;
  }
</style>
