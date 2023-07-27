<template>
    <div class="d-flex justify-space-betwen align-center"> <v-icon icon="mdi-lightbulb-on-outline" color="yellow" size="40"></v-icon>
  <p>suggestion:</p>
</div>
  <v-chip  prepend-icon="mdi-gift-outline" size="x-large"  class="ma-2" color="green"
      text-color="white" v-for="i in 10" :key="i">
        brand incentive
</v-chip>


 
</template>

<script>
export default {

}
</script>

<style>

</style>