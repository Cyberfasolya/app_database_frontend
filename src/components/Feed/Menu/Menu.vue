<template>
  <div>
    <h1>Меню</h1>
    <MenuAddForm/>
  </div>

</template>

<script>
    import MenuAddForm from "./MenuAddForm";

    export default {
        name: "menuComponent",
        components: {
            MenuAddForm
        }
    }

</script>

<style scoped>
  h1 {
    text-align: center;
    margin-bottom: 30px;
    margin-top: 10px;
  }

</style>
