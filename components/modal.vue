<!-- PolicyModal.vue -->
<template>
  <v-dialog v-model="dialog" max-width="500px">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" dark v-on="on">View Policy</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Policy</span>
      </v-card-title>
      <v-card-text>
        <!-- Add your policy content here -->
        <!-- Replace this with your actual policy text -->
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="closeModal">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    closeModal() {
      this.dialog = false;
    },
  },
};
</script>
