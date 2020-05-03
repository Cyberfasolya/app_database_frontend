<template>
  <div class="content">
    <h2> See information about:</h2>
    <div class="list">
      <div class="breadcrumb">
        <router-link class="nav-link" to="/administrator/animals">ЖИВОТНЫЕ</router-link>
      </div>
      <div class="breadcrumb">
        <router-link class="nav-link" to="/administrator/employees">СЛУЖАЩИЕ</router-link>
      </div>
      <div class="breadcrumb">
        <router-link class="nav-link" to="/administrator/supplies">ПОСТАВКИ КОРМА</router-link>
      </div>
      <div class="breadcrumb">
        <router-link class="nav-link" to="/administrator/exchanges">ОБМЕНЫ С ДРУГИМИ ЗООПАРКАМИ</router-link>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "administrator"
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
