<template>
  <div class="genderChoice">
   <h5> Выберите пол животного </h5>
    <div class="btn-group btn-group-toggle" data-toggle="buttons">
      <label class="btn btn-primary"
             :class="{ active: male }"
             @click="onMaleClick">
        <input type="radio" name="options" id="option1" autocomplete="off" checked=""> М
      </label>
      <label class="btn btn-primary" :class="{ active: female }" @click="onFemaleClick">
        <input type="radio" name="options" id="option2" autocomplete="off"> Ж
      </label>
    </div>
  </div>
</template>

<script>

    export default {
        name: 'genderChoice',
        data() {
            return {
                male: false,
                female: false
            }
        },
        methods: {
            onMaleClick: function () {
                this.male = true;
                this.female = false;
            },
            onFemaleClick: function () {
                this.male = false;
                this.female = true;
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
