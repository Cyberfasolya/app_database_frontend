<template>
  <div class=list>
    <h3>Список меню</h3>
    <div class="breadcrumb"
         v-for="(menuContent) of menu">
      <div class="list-item-content">
        <div class="base-info">
          Вид животного: {{menuContent.speciesDto.name}}
          <br>
          Сезон: {{menuContent.season}}
          <br>
        </div>
        <br>
        <div class="content-info">
          Содержание меню:
          <div class="content"
               v-for="(content) of menuContent.menuContents">
            Название корма: {{content.feedDto.name}},
            количество корма: {{content.feedAmount}} кг
            <br>
          </div>
          <br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import moment from "moment";

    export default {
        props: ['menu'],
        name: 'menuList',
        data() {
            return {}
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    text-align: center;
  }

  .list {
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 68%;
    margin-right: 3%;
  }

  .list-item-content {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }

  .base-info {
    color: honeydew;
    font-size: large;
    font-weight: bolder;
  }

  .content-info {
    color: lightsteelblue;
    font-size: large;
    font-weight: bolder;
  }

  .content {
    color: cadetblue;
    font-size: large;
    font-weight: bold;
  }

</style>
