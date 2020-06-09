<template>
  <div class=list>
    <h3>Список животных</h3>
    <div class="breadcrumb"
         v-for="(animal) of animals">
      <div class="list-item-content">
        <div class="base-info">
          Имя животного: {{animal.name}}
          <br>
          Вид: {{animal.species.name}}
          <br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import moment from "moment";

    export default {
        props: ['animals'],
        name: 'animalsList',
        data() {
            return {}
        },
        methods: {
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    text-align: center;
  }

  .breadcrumb {
    margin-bottom: 5px;
  }

  .list {
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 22%;
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

</style>
