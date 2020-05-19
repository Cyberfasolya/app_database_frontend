<template>
  <div class="content">
    <h1> Посмотреть информацию про:</h1>
    <div class="list">
      <div class="breadcrumb">
        <router-link class="nav-link" to="/feed/assortment">АССОРТИМЕНТ</router-link>
      </div>
      <div class="breadcrumb">
        <router-link class="nav-link" to="/feed/supplies">ПОСТАВКИ КОРМА</router-link>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "feed"
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
