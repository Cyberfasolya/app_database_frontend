<template>
  <div class="filters">
    <div class="form-group">
      <label for="exampleSelect1">Example select</label>
      <select class="form-control" id="exampleSelect1">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
  </div>
</template>
<script>
    export default {
        name: 'roleChoice',
        data() {
            return {}
        },
        methods: {},
        components: {}
    }
</script>

<style scoped>
  h1 {
    text-align: center;
  }

  .filters {
    width: 20%;
    margin: 20px;
  }

  .form-group {
    width: 60%;
    margin-left: 20%;
  }
</style>
