<template>
  <div class="breadcrumb form-column-container">
    <h4>Добавление поставки</h4>
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

      <!--форма для ввода даты поставки-->
      <div class="container-item">
        <div class="form-group">
          <label class="col-form-label" for="inputDefault2">
            <h5>Введите дату поставки</h5>
          </label>
          <input v-model="dto.supplyDate"
                 type="date"
                 min="1990-01-01" max="2020-05-13"
                 class="form-control"
                 placeholder="гггг-мм-дд"
                 id="inputDefault2">
        </div>
      </div>
    </div>

    <div class="form-row">
      <!--форма для ввода количества корма-->
      <div class="container-item">
        <div class="form-group">
          <label class="col-form-label" for="inputCage">
            <h5>Введите кол-во корма</h5>
          </label>
          <input
            v-model="dto.feedAmount"
            type="text"
            :class="{'is-valid': isValidAmount, 'is-invalid': isInvalidAmount}"
            @change="checkIsNumberAmount"
            class="form-control"
            placeholder="Количество корма"
            id="inputCage">
          <div class="valid-feedback">Success</div>
          <div class="invalid-feedback">It's not a number</div>
        </div>
      </div>

      <!--форма для ввода цены-->
      <div class="container-item">
        <div class="form-group">
          <label class="col-form-label" for="inputOffspring">
            <h5>Введите цену</h5>
          </label>
          <input v-model="dto.price"
                 :class="{'is-valid': isValidPrice, 'is-invalid': isInvalidPrice}"
                 @change="checkIsNumberPrice"
                 type="text"
                 class="form-control"
                 placeholder="Цена"
                 id="inputOffspring">
          <div class="valid-feedback">Success</div>
          <div class="invalid-feedback">It's not a number</div>
        </div>
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
        name: 'suppliesAddForm',
        props: ['providers'],
        data() {
            return {
                selectedProvider: '',
                selectedFeed: '',

                isValidAmount: false,
                isInvalidAmount: false,

                isValidPrice: false,
                isInvalidPrice: false,

                feeds: [],
                assortments: [],

                dto: {
                    providerName: '',
                    feedName: '',
                    supplyDate: '',
                    feedAmount: '',
                    price: '',
                }
            }
        },
        computed: {
            getFeeds() {
                this.feeds = this.assortments.find(item => item.providerName === this.selectedProvider).feeds;
                return this.feeds;
            },
        },
        methods: {
            checkIsNumberAmount() {
                this.isValidAmount = !isNaN(this.dto.feedAmount) && this.dto.feedAmount !== '';
                this.isInvalidAmount = isNaN(this.dto.feedAmount);
            },

            checkIsNumberPrice() {
                this.isValidPrice = !isNaN(this.dto.price) && this.dto.price !== '';
                this.isInvalidPrice = isNaN(this.dto.price);
            },

            onAddClick() {
                this.dto.providerName = this.providers.find(item => item.name === this.selectedProvider).name;
                this.dto.feedName = this.feeds.find(item => item === this.selectedFeed);
                RestService.createSupply(this.dto).then(() => this.$emit('supply-added'));
                this.dto = {};
                this.selectedFeed = '';
                this.selectedProvider = '';
                this.isValidAmount = false;
                this.isInvalidAmount = false;
                this.isValidPrice = false;
                this.isInvalidPrice = false;
            },

            isInputsNotEmpty() {
                const isEmpty = (value) => value && value !== '';
                return this.isValidAmount && this.isValidPrice && isEmpty(this.dto.price)
                    && isEmpty(this.selectedProvider) && isEmpty(this.selectedFeed)
                    && isEmpty(this.dto.supplyDate) && isEmpty(this.dto.feedAmount);
            },

            isProviderChosen() {
                return this.selectedProvider !== '' && this.selectedProvider;
            },

            loadAssortments() {
                RestService.getAssortments().then((response) => this.assortments = response.data)
            },
        },
        mounted: function () {
            this.loadAssortments();
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
    margin-top: 45px;
    max-height: 35px;
    display: inline-block;
  }

  .container-item {
    width: 27%;
    display: inline-block;
    min-height: 120px;
  }
</style>
