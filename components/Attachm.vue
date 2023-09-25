<template>
   <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
  <div class="text-center">
    <v-menu v-model="menuOpen" :close-on-content-click="false">
      <template v-slot:activator="{ props: menu, on }">
        <v-btn
          v-on="on"
          prepend-icon="mdi-plus"
          color="rgb(150, 238, 238)"
          size="x-small"
          @click="fetchManagers"
          v-bind="mergeProps(menu)"
          class="poppins-font"
        >Attach Managers
        </v-btn>
      </template>
      <v-list v-if="menuOpen" width="450" height="400">
  <v-responsive max-width="420" class="mt-3 ml-3 mr-3">
    <v-text-field
      label="search manager name"
      prepend-inner-icon="mdi-magnify"
      variant="outlined"
      color="grey-lighten-4"
      v-model="search"
      class="text-color-red poppins-font"
    ></v-text-field>
  </v-responsive>
  <v-divider></v-divider>
  <v-row class="d-flex justify-end">
    <v-btn
      color="teal-lighten-3"
      size="x-small"
      outlined
      @click="cancelAttach"
      class="mt-8 mr-3 poppins-font"
    >Cancel</v-btn>
    <v-btn
      prepend-icon="mdi-plus"
      color="teal-lighten-3"
      size="x-small"
      outlined
      class="mt-8 mr-4 poppins-font"
      @click="attachManagers"
    >Attach</v-btn>
  </v-row>
        <v-list-item v-for="(manager, index) in filteredManagers" :key="index">
  <div class="d-flex align-center justify-row" style="margin-bottom: -31px;">
    <div class="d-flex align-center">
      <v-checkbox
        v-model="selectedManagers"
        :value="manager"
        size="small"
        class="mt-4"
      ></v-checkbox>
      <v-avatar :color="getColor(index)" class="ml-3 mr-3" size="small">
        {{ manager.name.charAt(0) }}
      </v-avatar>
      {{ manager.name }}
    </div>
  </div>
</v-list-item>

      </v-list>
    </v-menu>
  </div>
  
</template>

<script>

import { mergeProps } from "vue";

export default {
  
  data() {
    return {
      managers: [],
      search: "",
      menuOpen: false,
      selectedManagers: [],
    };
  },
  computed:{
    filteredManagers() {
      
      return this.managers.filter(manager =>
        manager.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  // watch: {
  //   search(newValue, oldValue) {
  //     // Trigger search whenever the search input changes
  //     this.searchManagers();
  //   },
  // },
  methods: {
    mergeProps,
    fetchManagers() {
      fetch("https://tempapi.proj.me/api/EZn7.iYtU")
        .then((response) => response.json())
        .then((data) => {
          this.managers = data.map((manager) => {
            return {
              name: manager.name,
            };
          });
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      
    },
    getColor(index) {
      const colors = ["red", "green", "blue", "yellow"];
      return colors[index % colors.length];
    },
    attachManagers() {
      // Access the store instance and dispatch the 'addAttachedManager' action to save the selected managers
      const attachedManagersStore = useDraftsStore();
      this.selectedManagers.forEach((manager) => {
      attachedManagersStore.addAttachedManager(manager);
        
      });
      
      // Close the menu after attaching managers
      this.menuOpen = false;
     
  }
}
};
</script>

<style>
.d-flex {
  display: flex;
}

.align-center {
  align-items: center;
}

.justify-space-between {
  justify-content: space-between;
}
.poppins-font {
  font-family: 'Poppins', sans-serif;
}
.ml-2 {
  margin-left: 0.5rem;
}

.mr-2 {
  margin-right: 0.5rem;
}
.small-text-field {
  height: 40px;
}
</style>
