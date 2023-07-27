<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" width="800">
      <template v-slot:activator="{ props }">
       
    <v-btn  width="1900" style="margin-bottom: 16px;" prepend-icon="mdi-plus" color="white" v-bind="props">Create new policy

  </v-btn>
      </template>
      <v-layout>
       <Layout/>
      </v-layout>
    </v-dialog>
  </v-row>
</template>
<script>
  import axios from 'axios'
  import policy from '../data/policy'
  export default {
    data() {
      return {
        policy: policy,
        expandedPanel: null,
        dataLoaded: false,
        selectedKey: null,
        apiData: ref([]),
        policyData: {},
        dialog: false,
      }
    },
    mounted() {
      this.fetchData()
    },

    computed: {
      filteredNames() {
        if (!this.selectedKey) return [] // Return an empty array if no selected key
        return this.apiData.filter(item => item.resType === this.selectedKey)
      },
    },
    methods: {
      togglePanel(panelKey) {
        this.expandedPanel = this.expandedPanel === panelKey ? null : panelKey
      },
      togglePanel(panelKey) {
        this.selectedKey = panelKey
      },
      formatText(text) {
        if (!text) return '' // Return an empty string if the text is null or undefined
        const formattedText = text.replaceAll('_', ' ')
        return formattedText.charAt(0).toUpperCase() + formattedText.slice(1)
      },
      fetchData() {
        const apiUrl = 'https://tempapi.proj.me/api/ZQR9vD9Rs'

        axios
          .get(apiUrl)
          .then(response => {
            this.apiData = response.data
            this.dataLoaded = true
          })
          .catch(error => {
            console.error('Error fetching data:', error)
          })
      },
    },
  }
</script>

<style></style>
