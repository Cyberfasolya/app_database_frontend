<template>
  <div>
    <h1>Доступ</h1>
    <div class="page-container">
      <AddAccessForm/>
      <div class="app-container">
        <FormSelectAccess/>
        <AccessesList :accesses="accesses"/>
      </div>
    </div>
  </div>
</template>

<script>
    import AddAccessForm from "./AddAccessForm";
    import FormSelectAccess from "./FormSelectAccess";
    import AccessesList from "./AccessesList";
    import RestService from "../../../service/RestService";

    export default {
        name: 'access',
        data() {
            return {
                accesses: [],
            }
        },
        methods: {
            loadAccesses() {
                RestService.getAccesses().then((response) => this.accesses = response.data);
            },
        },
        mounted: function () {
            this.loadAccesses();
        },
        components: {
            AddAccessForm,
            FormSelectAccess,
            AccessesList,
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

  .app-container {
    display: flex;
    flex-direction: row;
  }
</style>
