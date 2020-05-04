<template>
  <div class="ageChoice">
    <h5> Выберите возраст животного </h5>
    <div class="form-group has-success">
      <label class="form-control-label" >От</label>
      <input type="text" :value=lowValue
             :class="{isValid: isValidLow, isInvalid: isInvalidLow}"
             @change="checkIsNumberLow"
             class="form-control"
             id="inputValid">
      <div class="valid-feedback">Success</div>
    </div>

    <div class="form-group has-danger">
      <label class="form-control-label">До</label>
      <input type="text" :value=highValue
             :class="{isValid: isValidHigh, isInvalid: isInvalidHigh}"
             @change="checkIsNumberHigh"
             class="form-control"
             id="inputInvalid">
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
                isValidLow:false,
                isInvalidLow: false,

                highValue:"",
                isValidHigh:false,
                isInvalidHigh: false,
            }
        },
        methods: {
            checkIsNumberLow(){

            },
            checkIsNumberHigh(){

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
