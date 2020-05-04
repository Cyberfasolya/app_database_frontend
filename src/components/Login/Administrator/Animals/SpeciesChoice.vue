<template>
    <div class="form-group">
      <label for="exampleSelect1"><h5>Выберите вид животного</h5></label>
      <select class="form-control" id="exampleSelect1">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
</template>

<script>

    export default {
        name: 'speciesChoice',
        data() {
            return {}
        },
        methods: {},
        components: {}
    }
</script>

<style scoped>
  .form-group {
    width: 60%;
    margin-left: 20%;
  }

</style>
