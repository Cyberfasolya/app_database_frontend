<template>
    <div class="content">
    <h2>Выберите профессию:</h2>
    <div class="list">
      <div class="breadcrumb">
        <router-link class="nav-link" to="/administrator">АДМИНИСТРАТОР</router-link>
      </div>
      <div class="breadcrumb">
        <router-link class="nav-link" to="/builder">СТРОИТЕЛЬ</router-link>
      </div>
      <div class="breadcrumb">
      <router-link class="nav-link" to="/vet">ВЕТЕРИНАР</router-link>
      </div>
      <div class="breadcrumb">
      <router-link class="nav-link" to="/cleaner">УБОРЩИК</router-link>
      </div>
      <div class="breadcrumb">
      <router-link class="nav-link" to="/trainer">ДРЕССИРОВЩИК</router-link>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped>

  .content {
    margin: 30px;
  }
  .list {
    display: flex;
    flex-direction: column;
    align-content: center;
  }

  .list__item {
    margin-bottom: 10px;
  }
</style>
