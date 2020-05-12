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
                this.$emit('gender-change', "м")
            },
            onFemaleClick: function () {
                this.male = false;
                this.female = true;
                this.$emit('gender-change', "ж")
            }
        },
        components: {}
    }
</script>

<style scoped>
</style>
