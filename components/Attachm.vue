<template>
  <div class="text-center">
    <v-menu>
      <template v-slot:activator="{ props: menu }">
        <v-tooltip location="top">
          <template v-slot:activator="{ props: tooltip }">
            <v-btn
  prepend-icon="mdi-plus"
  color="teal-lighten-3"
  size="small"
  v-bind="mergeProps(menu, tooltip)"
  @click="fetchManagers"
>
  Attach Manager
</v-btn>

          </template>
        
        </v-tooltip>
      </template>
      <v-list >
        <v-list-item v-for="(manager, index) in managers" :key="index">
          <v-avatar class="d-flex align-center" color="green">
            {{ manager.name.charAt(0) }}
          </v-avatar>
          <v-list-item-content class="d-flex justify-space-around align-center">
            <v-list-item-title>{{ manager.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import { mergeProps } from 'vue'
export default {
  data() {
    return {
      managers: []
    };
  },
  methods: {
    mergeProps,
    fetchManagers() {
      fetch('https://tempapi.proj.me/api/EZn7.iYtU')
        .then(response => response.json())
        .then(data => {
          this.managers = data.map(manager => {
            return {
              name: manager.name,
            };
          });
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  }
};
</script>

<style>

</style>
