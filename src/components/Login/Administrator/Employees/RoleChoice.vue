<template>
  <div>
    <div class="form-group">
      <label for="exampleSelect1"><h5>Выберите профессию</h5></label>
      <select class="form-control" id="exampleSelect1">
        <option>Не выбрано</option>
        <option>Администратор</option>
        <option>Ветеринар</option>
        <option>Дрессировщик</option>
        <option>Уборщик</option>
        <option>Строитель</option>
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
</style>
