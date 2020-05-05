<template>
  <div class="ageChoice">
    <h5> Выберите возраст животного </h5>
    <div class="form-group has-success">
      <label class="form-control-label">От</label>
      <input type="text" v-model="lowValue"
             :class="{'is-valid': isValidLow, 'is-invalid': isInvalidLow}"
             @change="checkIsNumberLow"
             class="form-control"
             id="inputValid">
      <div class="valid-feedback">Success</div>
      <div class="invalid-feedback">It's not a number</div>
    </div>

    <div class="form-group has-danger">
      <label class="form-control-label">До</label>
      <input type="text" v-model="highValue"
             :class="{'is-valid': isValidHigh, 'is-invalid': isInvalidHigh}"
             @change="checkIsNumberHigh"
             class="form-control"
             id="inputInvalid">
      <div class="valid-feedback">Success</div>
      <div class="invalid-feedback">It's not a number</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'ageChoice',
        data() {
            return {
                lowValue: "",
                isValidLow: false,
                isInvalidLow: false,

                highValue: "",
                isValidHigh: false,
                isInvalidHigh: false,
            }
        },
        methods: {
            checkIsNumberLow() {
                this.isValidLow = !isNaN(this.lowValue);
                this.isInvalidLow = isNaN(this.lowValue);
            },
            checkIsNumberHigh() {
                this.isValidHigh = !isNaN(this.highValue);
                this.isInvalidHigh = isNaN(this.highValue);
            }
        },
        components: {}
    }
</script>

<style scoped>
  .ageChoice {
    margin-left: 19%;
    margin-top: 12%;
  }
</style>
