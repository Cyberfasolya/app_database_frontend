<template>
  <div class="breadcrumb column-wrapper">
    <h4>Фильтрация по подстроке</h4>
    <!--форма для ввода названия корма-->
    <div class="form-row">
      <div class="container-item">
        <div class="form-group">
          <label class="col-form-label" for="inputFeed">
            <h5>Введите название корма</h5>
          </label>
          <input
            v-model="suppliesFilterDto.feedNamePart"
            type="text"
            class="form-control"
            placeholder="Название корма"
            @input="getSuppliesByFeedNamePart"
            id="inputFeed">
        </div>
      </div>

      <!--форма для ввода названия поставщика-->
      <div class="container-item">
        <div class="form-group">
          <label class="col-form-label" for="inputProvider">
            <h5>Введите название поставщика</h5>
          </label>
          <input
            v-model="suppliesFilterDto.providerNamePart"
            type="text"
            class="form-control"
            placeholder="Название поставщика"
            @input="getSuppliesByProviderNamePart"
            id="inputProvider">
        </div>
      </div>
    </div>
  </div>
</template>


<script>
    export default {
        name: 'filterByNamePartForms',
        props: ['suppliesFilterDto'],
        methods: {
            getSuppliesByFeedNamePart() {
                this.$emit('get-supplies-by-feed-name-part');
            },
            getSuppliesByProviderNamePart() {
                this.$emit('get-supplies-by-provider-name-part');
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
    margin-left: 3%;
    margin-right: 1%;
    width: 46%;
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
