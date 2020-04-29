<template>
    <div>
        <div class="list">
            <div class="list-item"
                 v-for="(recipe) of recipes"
                 :key="recipe.id">
                <div class="list-item-content">
                    <div class="item-title">
                        {{recipe.name}}
                    </div>
                    <div class="item-description">
                        {{recipe.categories.map(category => category.name).join('/')}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


    export default {
        name: 'RecipeList',
        props: ['recipes'],
        data() {
            return {}
        },
        methods: {},
        components: {}
    }
</script>

<style scoped>
    .list {
        text-align: left;
        display: flex;
        flex-direction: column;
        padding: 20px;
        width: 94%;
    }

    .list-item {
        margin-left: 10px;
        margin-right: 10px;
        border: 1px solid black;
        margin-bottom: 20px;
        width: 100%;

    }

    .list-item-content {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
    }

    .item-title {
        font-size: 20px;
        line-height: 26px;
    }

    .item-description {
        font-size: 14px;
        color: darkgray;
    }
</style>