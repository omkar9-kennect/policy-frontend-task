<template>
  <v-app>
  
    <v-btn  to="/About" width="1900" style="margin-bottom: 16px;" prepend-icon="mdi-plus" color="white">Create new policy

  </v-btn>

  <v-card style="padding: 16px;" height="450">
    <v-tabs v-model="tab" bg-color="white" color="green">
      <v-tab value="published">published</v-tab>
      <v-tab value="drafts">drafts</v-tab>
    </v-tabs>
    <v-divider :thickness="2"></v-divider>
    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="published">
          <v-card>
            <v-card-title>
              Nutrition
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              :headers="headers"
              :items="desserts"
              :search="search"
            ></v-data-table>
          </v-card>
        </v-window-item>

        <v-window-item value="drafts"></v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</v-app>
</template>

<script>
import axios from 'axios';

export default {
  
  data: () => ({
       
        search: '',
       
        headers: [
          {
            align: 'start',
            key: 'name',
            sortable: false,
            title: 'Dessert (100g serving)',
          },
          { key: 'calories', title: 'Calories' },
          { key: 'fat', title: 'Fat (g)' },
          { key: 'carbs', title: 'Carbs (g)' },
          { key: 'protein', title: 'Protein (g)' },
          { key: 'iron', title: 'Iron (%)' },
        ],
        
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('https://tempapi.proj.me/api/HOMCDHKua'); // Replace with your API endpoint
        this.desserts = response.data; // Assuming the response data is an array of desserts
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    
  },
  tab: null,
}),
};
</script>

