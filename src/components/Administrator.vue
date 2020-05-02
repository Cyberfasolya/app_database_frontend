<template>
  <div class="content">
    <h2> See information about:</h2>
    <div class="list">
      <div class="breadcrumb">
        <router-link class="nav-link" to="/administrator/animals">ANIMALS</router-link>
      </div>
      <div class="breadcrumb">
        <router-link class="nav-link" to="/administrator/employees">EMPLOYEES</router-link>
      </div>
      <div class="breadcrumb">
        <router-link class="nav-link" to="/administrator/supplies">SUPPLIES</router-link>
      </div>
      <div class="breadcrumb">
        <router-link class="nav-link" to="/administrator/exchanges">EXCHANGES</router-link>
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
