<template>
  <div class="container-item">
    <div class="form-group">
      <label class="col-form-label" for="inputDefault">
        <h5>Введите количество потомства</h5>
      </label>
      <input v-model="offspring"
             :class="{'is-valid': isValid, 'is-invalid': isInvalid}"
             @change="checkIsNumber"
             @input="() => this.$emit('offspring-change', offspring)"
             type="text"
             class="form-control"
             placeholder="Количество потомства"
             id="inputDefault">
      <div class="valid-feedback">Success</div>
      <div class="invalid-feedback">It's not a number</div>
    </div>
  </div>
</template>

<script>

    export default {
        name: 'offspringInput',
        data() {
            return {
                offspring: '',
                isValid: false,
                isInvalid: false,
            }
        },
        methods: {
            checkIsNumber() {
                this.isValid = !isNaN(this.age);
                this.isInvalid = isNaN(this.age);
            }
        },
        components: {}
    }
</script>

<style scoped>
</style>
