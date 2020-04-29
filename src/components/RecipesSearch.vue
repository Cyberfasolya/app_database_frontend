<template>
    <div>
        <AddIngredient
                @add-ingredient="addIngredient"
        />
        <IngredientList
                v-bind:ingredients = "ingredients"
                @remove-ingredient = "removeIngredient"
        />
    </div>
</template>

<script>
    import IngredientList from "@/components/IngredientList"
    import AddIngredient from "@/components/AddIngredient"
    export default {
        name: 'RecipesSearch',
        data() {
            return{
                ingredients: [
                    {id:1, title: 'хлеб'},
                ]
            }
        },
        methods:{
            removeIngredient(id){
                this.ingredients = this.ingredients.filter(t => t.id !==id)
            },
            addIngredient(ingredient){
                this.ingredients.push(ingredient)
            }
        },
        components: {
            IngredientList,
            AddIngredient
        }
    }
</script>