<template>
  <div>
    <h1>Меню</h1>
    <MenuAddForm/>
    <div class="row-wrapper">
      <AnimalFilterByMenu @filter-animals="showAnimals"
                          @reset-animals="resetAnimals"/>
      <MenuList :menu="menu"/>
      <AnimalsList v-if="isAnimalsFilter"
                     :animals="animals"/>
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
               // RestService.getAnimalsByMenu(dto).then((response) => this.animals = response.data);
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
</style>
