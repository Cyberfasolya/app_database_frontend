<template>
  <div class="content">
    <h2> Посмотреть информацию про:</h2>
    <div class="list">
      <div class="breadcrumb">
        <router-link class="nav-link" to="/animals">ЖИВОТНЫЕ</router-link>
      </div>
      <div class="breadcrumb">
        <router-link class="nav-link" to="/employees">СЛУЖАЩИЕ</router-link>
      </div>
      <div class="breadcrumb">
        <router-link class="nav-link" to="/feed">КОРМ</router-link>
      </div>
      <div class="breadcrumb">
        <router-link class="nav-link" to="/exchanges">ОБМЕНЫ С ДРУГИМИ ЗООПАРКАМИ</router-link>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "content"
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
