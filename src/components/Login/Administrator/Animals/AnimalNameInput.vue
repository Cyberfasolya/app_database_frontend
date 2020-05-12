<template>
  <div class="container-item">
    <div class="form-group">
      <label class="col-form-label" for="inputDefault">
        <h5>Введите имя животного</h5>
      </label>
      <input v-model="name"
             @input="() => this.$emit('name-change', name)"
             type="text"
             class="form-control"
             placeholder="Имя животного"
             id="inputDefault">
    </div>
  </div>
</template>

<script>

    export default {
        name: 'animalNameInput',
        data() {
            return {
                name:'',
            }
        },
        methods: {},
        components: {}
    }
</script>

<style scoped>

</style>
