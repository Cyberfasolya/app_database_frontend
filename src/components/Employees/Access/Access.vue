<template>
  <div>
    <h1>Доступ</h1>
    <div class="page-container">
      <AddAccessForm/>
    </div>
  </div>
</template>
<script>
  import AddAccessForm from "./AddAccessForm";
    export default {
        name: 'access',
        data() {
            return {}
        },
        components:{
            AddAccessForm
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    text-align: center;
    margin-bottom: 30px;
    margin-top: 10px;
  }

  .page-container {
    display: flex;
    flex-direction: column;
  }
</style>
