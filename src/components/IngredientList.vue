<template>
    <div>
        <ul>
            <li> ingredients:</li>
            <Ingredient
                    v-for="(ingredient,i) of ingredients"
                    :ingredient="ingredient"
                    :key="ingredient.id"

                    v-bind:index="i"
                    v-on:remove-ingredient="removeIngredient"
            />
        </ul>
    </div>
</template>


<script>
    import Ingredient from "@/components/Ingredient"
    export default {
        props: ['ingredients'],
        components:{
            Ingredient
        },
        methods:{
            removeIngredient(id){
               this.$emit('remove-ingredient', id)
            }
        }
    }
</script>

<style scoped>
    ul{
        list-style: none;
        margin:0;
        padding:0;
    }
</style>