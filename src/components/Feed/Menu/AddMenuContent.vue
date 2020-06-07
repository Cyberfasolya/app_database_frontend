<template>
  <div class="add-ingredient">
    <div class="form-row">

      <!--форма для выбора корма-->
      <div class="container-item">
        <label for="select"><h5>Выберите корм</h5></label>
        <select class="form-control" id="select" v-model="selectedFeed">
          <option disabled value="">Не выбрано</option>
          <option v-for="(feed) of feeds">{{feed.name}}
          </option>
        </select>
      </div>

      <!--форма для ввода количества -->
      <div class="container-item">
        <label for="inputAmount">
          <h5>Введите количество в кг</h5>
        </label>
        <input v-model="menuContent.amount"
               type="text"
               :class="{'is-valid': isValidAmount, 'is-invalid': isInvalidAmount}"
               @change="checkIsNumberAmount"
               class="form-control"
               placeholder="Количество"
               id="inputAmount">
        <div class="valid-feedback">Success</div>
        <div class="invalid-feedback">It's not a number</div>
      </div>

      <button type="button"
              class="form-control btn btn-primary"
              @click="onAddClick"
              :disabled="!isAllValid()">
        Добавить корм в меню
      </button>
    </div>
  </div>

</template>

<script>
    import RestService from "../../../service/RestService";

    export default {
        name: 'addMenuContent',
        data() {
            return {
                selectedFeed: '',
                feeds: '',
                isValidAmount: false,
                isInvalidAmount: false,

                menuContent: {
                    feed: '',
                    amount: ''
                }
            }
        },
        methods: {
            onAddClick() {
                this.menuContent.feed = this.feeds.find(item => item.name === this.selectedFeed);
                this.$emit('menu-content-added', {...this.menuContent});

                this.menuContent = {};
                this.selectedFeed = '';
                this.isValidAmount = false;
                this.isInvalidAmount = false;
            },

            isAllValid() {
                const isEmpty = (value) => value && value !== '';
                return this.isValidAmount && isEmpty(this.selectedFeed) && isEmpty(this.menuContent.amount);

            },

            checkIsNumberAmount() {
                this.isValidAmount = !isNaN(this.menuContent.amount) && this.menuContent.amount !== '';
                this.isInvalidAmount = isNaN(this.menuContent.amount);
            },

        },
        components: {},
        mounted: function () {
            RestService.getFeeds().then((response) => this.feeds = response.data);
        },

    }
</script>

<style scoped>
  .container-item {
    display: flex;
    flex-direction: column;
    width: 27%;
    min-width: 180px;
    min-height: 105px;
  }

  .btn {
    width: 27%;
    margin-top: 45px;
    min-width: 180px;
  }

  .form-row {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .add-ingredient {
    margin-right: 5%;
    margin-left: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input, select {
    height: 43px;
  }
</style>
