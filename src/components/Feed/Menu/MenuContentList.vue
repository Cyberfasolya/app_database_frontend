<template>
  <div class="ingredient-list">
    <table v-if="menuContent && menuContent.length > 0" class="table table-hover">
      <thead>
      <tr class="table-active">
        <th scope="col">Корм</th>
        <th scope="col">Количество в кг</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr class="table-active"
          v-for="(content, i) of menuContent">
        <td>{{content.feedDto.name}}</td>
        <td>{{content.feedAmount}}</td>
        <td class="td-control">
          <button class="rm"
                  v-on:click="$emit('remove-menu-content', i)">
            &times;
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>


<script>

    export default {
        props: ['menuContent'],
        components: {},
        methods: {}
    }
</script>

<style scoped>
  .rm {
    background: cornflowerblue;
    color: #fff;
    border: none;
  }

  .ingredient-list {
    margin-top: 20px;
    margin-left: 5%;
    margin-right: 5%;
  }

  .td-control {
    display: flex;
    flex-direction: row-reverse;
  }
</style>
