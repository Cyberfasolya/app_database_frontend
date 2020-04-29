<template>
    <form @submit.prevent = "onSubmit">
        <input type="text" v-model="title">
        <button type="submit">
            add ingredient
        </button>
    </form>
</template>

<script>
    export default{
        data(){
            return{
                title: ' '
            }
        },
        methods:{
            onSubmit(){
                //console.log('submit', this.title)
                if(this.title.trim()){
                    const newIngredient = {
                        id: Date.now(),
                        title: this.title
                    }
                    this.$emit('add-ingredient', newIngredient)
                    this.title = ''
                }
            }
        }
    }
</script>

<style scoped>
    form{
        display: flex;
    }
    input{
        width: 400px;
    }
</style>