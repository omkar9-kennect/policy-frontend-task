<template>
      <v-col cols="3" class="ml-7 mr-7 mb-7">
              <v-select
             
                v-if="selectedKey && policy[selectedKey].accessCtrl.accessLevel"
                label="Access level"
                variant="solo"
                small
                class="mt-5"
                :items="policy[selectedKey].accessCtrl.accessLevel"
                
              ></v-select>
              
            </v-col>
</template>

<script>
export default {

}
</script>

<style>

</style>