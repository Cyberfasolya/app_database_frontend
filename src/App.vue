<template>
    <div id="app">
        <h1> COOKBOOK </h1>
        <hr>

        <button v-on:click="onRecipesSearchClick"> Recipes search</button>
        <button v-on:click="onRecipesClick"> Recipes</button>

        <div v-if="recipesSearchView">
            <recipesSearch/>
        </div>
        <div v-if="recipesView">

            <RecipeList
                    v-bind:recipes = "recipes"
            />
        </div>

    </div>
</template>

<script>

    import RecipesSearch from "@/components/RecipesSearch";
    import RestService from "@/service/RestService";
    import RecipeList from "@/components/RecipeList"

    export default {
        name: 'App',
        data() {
            return {
                recipesSearchView: false,
                recipesView: false,
                recipes: []
            }
        },
        methods: {
            onRecipesSearchClick: function () {
                this.recipesSearchView = true;
                this.recipesView = false;
            },
            onRecipesClick: function () {
                this.recipesView = true;
                this.recipesSearchView = false;
                RestService.getRecipes().then((response) => this.recipes = response.data);
            },
        },
        components: {
            RecipesSearch,
            RecipeList
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
