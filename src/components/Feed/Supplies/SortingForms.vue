<template>
  <div class="breadcrumb column-wrapper">
    <h4>Сортировка</h4>


  </div>
</template>


<script>
    export default {
        name: 'sortingForms',
        props: ['suppliesSortDto'],
        methods: {
            onSortClick() {
                this.$emit('sorting');
            },
        },
        components: {}
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h4 {
    text-align: center;
    margin-bottom: 10px;
  }

  .breadcrumb {
    flex-wrap: nowrap;
    margin-right: 3%;
    width: 47%;
  }

  .form-row {
    display: flex;
    flex-direction: row;;
  }

  .container-item {
    width: 45%;
    margin-left: 3%;
  }

  .column-wrapper {
    display: flex;
    flex-direction: column;
  }

</style>
