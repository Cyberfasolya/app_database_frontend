<template>
  <div class="breadcrumb  form-row">
    <!--форма для ввода названия корма-->
    <div class="container-item">
      <div class="form-group">
        <label class="col-form-label" for="inputFeed">
          <h5>Введите название корма</h5>
        </label>
        <input
          v-model="feedName"
          type="text"
          class="form-control"
          placeholder="Название корма"
          @change="getSuppliesByFeedNamePart"
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
          v-model="providerName"
          type="text"
          class="form-control"
          placeholder="Название поставщика"
          @change="getSuppliesByProviderNamePart"
          id="inputProvider">
      </div>
    </div>
  </div>

</template>


<script>
    export default {
        name: 'sortingForms',
        data() {
            return {
                feedName: null,
                providerName: null,
            }
        },
        methods: {
            getSuppliesByFeedNamePart(){
                this.$emit('get-supplies-by-feed-name-part', this.feedName);
                this.feedName = null;
            },
            getSuppliesByProviderNamePart(){
                this.$emit('get-supplies-by-provider-name-part', this.providerName);
                this.providerName = null;
            }
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
    margin-right: 3%;
  }

  .form-row {
    display: flex;
    justify-content: space-between;
  }

  .container-item {
    width: 20%;
  }

</style>
