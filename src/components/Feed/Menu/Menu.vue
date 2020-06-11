<template>
  <div>
    <h1>Меню</h1>
    <MenuAddForm @menu-added="loadMenu"/>
    <div class="row-wrapper">
      <div class="column-wrapper">
        <AnimalFilterByMenu @filter-animals="showAnimals"
                            @reset-animals="resetAnimals"/>
        <AnimalsList v-if="isAnimalsFilter"
                     :animals="animals"/>
      </div>
      <MenuList :menu="menu"/>
    </div>
  </div>

</template>

<script>
    import MenuAddForm from "./MenuAddForm";
    import MenuList from "./MenuList";
    import AnimalFilterByMenu from "./AnimalFilterByMenu";
    import RestService from "../../../service/RestService";
    import AnimalsList from "./AnimalsList";

    export default {
        name: "menuComponent",
        data() {
            return {
                isAnimalsFilter: false,
                menu: [],
                animals: [],
            }
        },
        methods: {
            showAnimals(dto) {
                this.isAnimalsFilter = true;
                RestService.getAnimalsByMenu(dto).then((response) => this.animals = response.data);
            },
            resetAnimals() {
                this.isAnimalsFilter = false;
            },
            loadMenu() {
                RestService.getMenu().then((response) => this.menu = response.data)
            },
        },
        mounted: function () {
            this.loadMenu();
        },
        components: {
            MenuAddForm,
            MenuList,
            AnimalFilterByMenu,
            AnimalsList
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

  .column-wrapper{
    display: flex;
    flex-direction: column;
    margin-left: 3%;
    margin-right: 1%;
    width: 25%;
  }
</style>
