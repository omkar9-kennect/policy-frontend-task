<template>
  <v-table>
              <tbody>
                <tr v-for="(e, index) in filteredNames" :key="index">
                  <td>{{ formatText(e.name) }}</td>
                  <v-switch
                    color="success"
                    value="success"
                    hide-details
                    class="ml-n12"
                  ></v-switch>
                </tr>
              </tbody>
            </v-table>

</template>

<script>
export default {

}
</script>

<style>

</style>