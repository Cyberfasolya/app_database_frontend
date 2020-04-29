<template>
  <div>
    <h1>ZOO INFORMATION SYSTEM</h1>
    <hr color="white">
    <h1>Login as:</h1>
  <router-link class="nav-link" to="/administrator">ADMINISTRATOR</router-link>
  <router-link class="nav-link" to="/builder">BUILDER</router-link>
  <router-link class="nav-link" to="/vet">VET</router-link>
  <router-link class="nav-link" to="/cleaner">CLEANER</router-link>
    <router-link class="nav-link" to="/trainer">TRAINER</router-link>
  </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped>
  h1 {
    text-align: center;
  }
</style>
