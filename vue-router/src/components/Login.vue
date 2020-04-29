<template>
    <div class="content">
    <h2>Login as:</h2>
    <div class="list">
      <div class="breadcrumb">
        <router-link class="nav-link" to="/administrator">ADMINISTRATOR</router-link>
      </div>
      <div class="breadcrumb">
        <router-link class="nav-link" to="/builder">BUILDER</router-link>
      </div>
      <div class="breadcrumb">
      <router-link class="nav-link" to="/vet">VET</router-link>
      </div>
      <div class="breadcrumb">
      <router-link class="nav-link" to="/cleaner">CLEANER</router-link>
      </div>
      <div class="breadcrumb">
      <router-link class="nav-link" to="/trainer">TRAINER</router-link>
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
