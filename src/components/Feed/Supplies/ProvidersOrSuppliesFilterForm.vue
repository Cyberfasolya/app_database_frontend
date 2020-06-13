<template>
  <div class="filters breadcrumb">

    <!--форма для ввода название корма-->
    <div class="container-item">
      <label for="exampleSelect1"><h5>Выберите название корма</h5></label>
      <select class="form-control" id="exampleSelect1" v-model="selectedFeed">
        <option disabled value="">Не выбрано</option>
        <option v-for="(feed) of feeds"
                :key="feed.id">{{feed.name}}
        </option>
      </select>
    </div>

    <h5 class="text-control"> Выберите кол-во корма </h5>
    <div class="form-group has-success container-item">
      <label class="form-control-label">От</label>
      <input type="text" placeholder="Количество корма в кг"
             v-model="dto.lowAmount"
             :class="{'is-valid': isValidLow, 'is-invalid': isInvalidLow}"
             @change="checkIsNumberLow"
             class="form-control"
             id="inputValid">
      <div class="valid-feedback">Success</div>
      <div class="invalid-feedback">It's not a number</div>
    </div>

    <div class="form-group has-danger container-item">
      <label class="form-control-label">До</label>
      <input type="text" placeholder="Количество корма в кг"
             v-model="dto.highAmount"
             :class="{'is-valid': isValidHigh, 'is-invalid': isInvalidHigh}"
             @change="checkIsNumberHigh"
             class="form-control"
             id="inputInvalid">
      <div class="valid-feedback">Success</div>
      <div class="invalid-feedback">It's not a number</div>
    </div>

    <!--форма для ввода периода поставки-->
    <h5 class="text-control"> Введите период поставки </h5>
    <div class="form-group has-success container-item">
      <label class="form-control-label">С</label>
      <input type="text" placeholder="Год"
             v-model="dto.lowPeriod"
             :class="{'is-valid': isValidDurationLow, 'is-invalid': isInvalidDurationLow}"
             @change="checkIsNumberDurationLow"
             class="form-control"
             id="inputValid1">
      <div class="valid-feedback">Success</div>
      <div class="invalid-feedback">It's not a number</div>
    </div>

    <div class="container-item form-group has-danger">
      <label class="form-control-label">По</label>
      <input type="text" placeholder="Год"
             v-model="dto.highPeriod"
             :class="{'is-valid': isValidDurationHigh, 'is-invalid': isInvalidDurationHigh}"
             @change="checkIsNumberDurationHigh"
             class="form-control"
             id="inputInvalid1">
      <div class="valid-feedback">Success</div>
      <div class="invalid-feedback">It's not a number</div>
    </div>

    <!--форма для ввода цены поставки-->
    <h5 class="text-control"> Введите цену поставки </h5>
    <div class="form-group has-success container-item">
      <label class="form-control-label">От</label>
      <input type="text" placeholder="Цена в тыс руб"
             v-model="dto.lowPrice"
             :class="{'is-valid': isValidLowPrice, 'is-invalid': isInvalidLowPrice}"
             @change="checkIsNumberLowPrice"
             class="form-control"
             id="inputValid2">
      <div class="valid-feedback">Success</div>
      <div class="invalid-feedback">It's not a number</div>
    </div>

    <div class="container-item form-group has-danger">
      <label class="form-control-label">До</label>
      <input type="text" placeholder="Цена в тыс руб"
             v-model="dto.highPrice"
             :class="{'is-valid': isValidHighPrice, 'is-invalid': isInvalidHighPrice}"
             @change="checkIsNumberHighPrice"
             class="form-control"
             id="inputInvalid2">
      <div class="valid-feedback">Success</div>
      <div class="invalid-feedback">It's not a number</div>
    </div>

    <button type="button"
            class="btn btn-primary"
            @click="onShowSuppliesClick"
            :disabled="!isAllValid()">
      Показать список поставок
    </button>

    <button type="button"
            class="btn btn-primary"
            @click="onShowProvidersClick"
            :disabled="!isAllValid()">
      Показать список поставщиков
    </button>

  </div>
</template>

<script>
    import RestService from "../../../service/RestService";

    export default {
        name: 'providersOrSuppliesFilterForm',
        data() {
            return {
                isValidLow: false,
                isInvalidLow: false,

                isValidHigh: false,
                isInvalidHigh: false,

                isValidDurationLow: false,
                isInvalidDurationLow: false,

                isValidDurationHigh: false,
                isInvalidDurationHigh: false,

                isValidLowPrice: false,
                isInvalidLowPrice: false,

                isValidHighPrice: false,
                isInvalidHighPrice: false,

                feeds: [],
                selectedFeed: '',

                dto: {
                    feedName: null,
                    lowAmount: null,
                    highAmount: null,
                    lowPeriod: null,
                    highPeriod: null,
                    lowPrice: null,
                    highPrice: null,
                }
            }
        },
        methods: {
            checkIsNumberLow() {
                this.isValidLow = !isNaN(this.dto.lowAmount) && this.dto.lowAmount !== '';
                this.isInvalidLow = isNaN(this.dto.lowAmount);
            },
            checkIsNumberHigh() {
                this.isValidHigh = !isNaN(this.dto.highAmount) && this.dto.highAmount !== '';
                this.isInvalidHigh = isNaN(this.dto.highAmount);
            },

            checkIsNumberLowPrice() {
                this.isValidLowPrice = !isNaN(this.dto.lowPrice) && this.dto.lowPrice !== '';
                this.isInvalidLowPrice = isNaN(this.dto.lowPrice);
            },
            checkIsNumberHighPrice() {
                this.isValidHighPrice = !isNaN(this.dto.highPrice) && this.dto.highPrice !== '';
                this.isInvalidHighPrice = isNaN(this.dto.highPrice);
            },

            checkIsNumberDurationLow() {
                this.isValidDurationLow = !isNaN(this.dto.lowPeriod) && this.dto.lowPeriod !== '';
                this.isInvalidDurationLow = isNaN(this.dto.lowPeriod);
            },

            checkIsNumberDurationHigh() {
                this.isValidDurationHigh = !isNaN(this.dto.highPeriod) && this.dto.highPeriod !== '';
                this.isInvalidDurationHigh = isNaN(this.dto.highPeriod);
            },

            SetParameters() {
                if (this.selectedFeed !== '' && this.selectedFeed) {
                    this.dto.feedName = this.feeds.find(item => item.name === this.selectedFeed).name;
                }
                if (this.dto.lowPeriod !== '' && this.dto.lowPeriod) {
                    this.dto.lowPeriod = 2020 - this.dto.lowPeriod;
                }
                if (this.dto.highPeriod !== '' && this.dto.highPeriod) {
                    this.dto.highPeriod = 2020 - this.dto.highPeriod;
                }
            },

            InitValues() {
                this.dto = {};
                this.isValidLow = false;
                this.isValidHigh = false;
                this.isInvalidLow = false;
                this.isInvalidHigh = false;

                this.isValidDurationLow = false;
                this.isInvalidDurationLow = false;
                this.isValidDurationHigh = false;
                this.isInvalidDurationHigh = false;

                this.isInvalidHighPrice = false;
                this.isValidHighPrice = false;
                this.isInvalidLowPrice = false;
                this.isValidLowPrice = false;

                this.selectedFeed = '';
            },

            onShowProvidersClick() {
                this.SetParameters();
                this.$emit('filter-providers', this.dto);
                this.InitValues();
            },

            onShowSuppliesClick() {
                this.SetParameters();
                this.$emit('filter-supplies', this.dto);
                this.InitValues();
            },

            isAllValid() {
                const isEmpty = (value) => value && value !== '';
                return (this.isValidLow && isEmpty(this.dto.lowAmount)) || (this.isValidHigh && isEmpty(this.dto.highAmount))
                    || (this.isValidDurationLow && isEmpty(this.dto.lowPeriod)) ||
                    (this.isValidDurationHigh && isEmpty(this.dto.highPeriod)) ||
                    (this.isValidLowPrice && isEmpty(this.dto.lowPrice)) ||
                    (this.isValidHighPrice && isEmpty(this.dto.highPrice))
                    || isEmpty(this.selectedFeed);
            },
        },
        components: {},
        mounted: function () {
            RestService.getFeeds().then((response) => this.feeds = response.data);
        },
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    text-align: center;
  }

  .filters {
    height: 1100px;
    width: 23%;
    margin-left: 3%;
  }

  .container-item {
    width: 83%;
    margin-left: 5%;
    min-height: 100px;
  }

  .btn {
    width: 80%;
    margin-left: 5%;
    height: 40px;
  }

  .control-btn {
    margin-right: 5px;
  }

  .text-control {
    margin-left: 5%;
  }

</style>
