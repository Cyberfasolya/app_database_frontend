<template>
  <div class="container-item">
    <div class="form-group">
      <label class="col-form-label" for="inputDefault">
        <h5>Введите номер клетки</h5>
      </label>
      <input
        v-model="cage"
        type="text"
        :class="{'is-valid': isValid, 'is-invalid': isInvalid}"
        @change="checkIsNumber"
        class="form-control"
        placeholder="Номер клетки"
        id="inputDefault">
      <div class="valid-feedback">Success</div>
      <div class="invalid-feedback">It's not a number</div>
    </div>
  </div>
</template>

<script>

    export default {
        name: 'cageInput',
        data() {
            return {
                cage: '',
                isValid: false,
                isInvalid: false,
            }
        },
        methods: {
            checkIsNumber() {
                this.isValid = !isNaN(this.cage);
                this.isInvalid = isNaN(this.cage);
            }
        },
        components: {}
    }
</script>

<style scoped>
</style>
