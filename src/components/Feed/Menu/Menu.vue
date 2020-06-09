<template>
  <div>
    <h1>Меню</h1>
    <MenuAddForm/>
    <div class="row-wrapper">
      <MenuList :menu="menu"/>
    </div>
  </div>

</template>

<script>
    import MenuAddForm from "./MenuAddForm";
    import MenuList from "./MenuList";
    import RestService from "../../../service/RestService";

    export default {
        name: "menuComponent",
        data() {
            return {
                menu: [],
            }
        },
        methods: {
            loadMenu() {
                RestService.getMenu().then((response) => this.menu = response.data)
            },
        },
        mounted: function () {
            this.loadMenu();
        },
        components: {
            MenuAddForm,
            MenuList
        }
    }

</script>

<style scoped>
  h1 {
    text-align: center;
    margin-bottom: 30px;
    margin-top: 10px;
  }

  .row-wrapper {
    display: flex;
    flex-direction: row;
  }
</style>
