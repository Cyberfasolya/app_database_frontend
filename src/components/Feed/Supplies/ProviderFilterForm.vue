<template>
  <div class="filters breadcrumb">

    <!--форма для ввода название корма-->
    <div class="container-item">
      <label class="col-form-label" for="inputDefault">
        <h5>Введите название корма</h5>
      </label>
      <input v-model="dto.feedName"
             type="text"
             class="form-control"
             placeholder="Название корма"
             id="inputDefault">
    </div>

    <h5 class="text-control"> Выберите кол-во корма </h5>
    <div class="form-group has-success container-item">
      <label class="form-control-label">От</label>
      <input type="text" placeholder="Количество корма"
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
      <input type="text" placeholder="Количество корма"
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
      <input type="text" placeholder="Цена"
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
      <input type="text" placeholder="Цена"
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
            @click="onShowClick"
            :disabled="!isAllValid()">
      Показать список поставщиков
    </button>

    <button type="button"
            class="btn btn-primary"
            @click="onResetClick"
            :disabled="!isFilter()">
      Сбросить
    </button>
  </div>
</template>

<script>
    export default {
        name: 'providerFilterForm',
        data() {
            return {
                isValidLow: false,
                isInvalidLow: false,

                isValidHigh: false,
                isInvalidHigh: false,

                isShown: false,

                isValidDurationLow: false,
                isInvalidDurationLow: false,

                isValidDurationHigh: false,
                isInvalidDurationHigh: false,

                isValidLowPrice: false,
                isInvalidLowPrice: false,

                isValidHighPrice: false,
                isInvalidHighPrice: false,

                selectedRole: '',

                dto: {
                    feedName: '',
                    lowAmount: null,
                    highAmount: null,
                    lowPeriod: null,
                    highPeriod: null,
                    lowPrice: '',
                    highPrice: '',
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

            onShowClick() {
                this.$emit('filter-providers', this.dto);

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

                this.isShown = true;
            },


            isAllValid() {
                const isEmpty = (value) => value && value !== '';
                return (this.isValidLow && isEmpty(this.dto.lowAmount)) || (this.isValidHigh && isEmpty(this.dto.highAmount))
                    || (this.isValidDurationLow && isEmpty(this.dto.lowPeriod)) ||
                    (this.isValidDurationHigh && isEmpty(this.dto.highPeriod)) ||
                    (this.isValidLowPrice && isEmpty(this.dto.lowPrice)) ||
                    (this.isValidHighPrice && isEmpty(this.dto.highPrice));
            },
            onResetClick() {
                this.isShown = false;
                this.$emit('filter-providers');
            },

            isFilter() {
                return this.isShown;
            }
        },
        components: {}
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    text-align: center;
  }

  .filters {
    height: 1050px;
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
