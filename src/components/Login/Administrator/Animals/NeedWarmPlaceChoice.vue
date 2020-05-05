<template>
  <div class="genderChoice">
    <h5> Необходимо ли животному новое помещение на зиму?</h5>
    <div class="btn-group btn-group-toggle" data-toggle="buttons">
      <label class="btn btn-primary"
             :class="{ active: yes }"
             @click="onMaleClick">
        <input type="radio" name="options" id="option1" autocomplete="off" checked=""> Да
      </label>
      <label class="btn btn-primary" :class="{ active: no }" @click="onFemaleClick">
        <input type="radio" name="options" id="option2" autocomplete="off"> Нет
      </label>
    </div>
  </div>
</template>

<script>

    export default {
        name: 'genderChoice',
        data() {
            return {
                yes: false,
                no: false
            }
        },
        methods: {
            onMaleClick: function () {
                this.yes = true;
                this.no = false;
            },
            onFemaleClick: function () {
                this.yes = false;
                this.no = true;
            }
        },
        components: {}
    }
</script>

<style scoped>
  .genderChoice {
    margin-left: 19%;
    margin-top: 12%;
  }
</style>
