<template>
  <div class="container-item">
    <div class="form-group">
      <label class="col-form-label" for="inputDefault">
        <h5>Введите дату получения животного</h5>
      </label>
      <input v-model="message"
             @input="() => this.$emit('receipt-date-change', message)"
             type="text"
             class="form-control"
             placeholder="гггг-мм-дд"
             id="inputDefault">
    </div>
  </div>
</template>

<script>

    export default {
        name: 'receiptDateInput',
        data() {
            return {
                message:''
            }
        },
        methods: {},
        components: {}
    }
</script>

<style scoped>
</style>
