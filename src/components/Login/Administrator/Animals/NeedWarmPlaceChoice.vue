<template>
  <div class="genderChoice">
    <h5> Необходимо ли животному новое помещение на зиму?</h5>
    <div class="btn-group btn-group-toggle" data-toggle="buttons">
      <label class="btn btn-primary"
             :class="{ active: yes }"
             @click="onYesClick">
        <input type="radio" name="options" id="option1" autocomplete="off" checked=""> Да
      </label>
      <label class="btn btn-primary"
             :class="{ active: no }"
             @click="onNoClick">
        <input type="radio" name="options" id="option2" autocomplete="off"> Нет
      </label>
    </div>
  </div>
</template>

<script>

    export default {
        name: 'needWarmPlaceChoice',
        data() {
            return {
                yes: false,
                no: false
            }
        },
        methods: {
            onYesClick: function () {
                this.yes = true;
                this.no = false;
                this.$emit('need-place-change', "yes")
            },
            onNoClick: function () {
                this.yes = false;
                this.no = true;
                this.$emit('need-place-change', "no")
            }
        },
        components: {}
    }
</script>

<style scoped>

</style>
