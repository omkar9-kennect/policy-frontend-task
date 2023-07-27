<template>
  <v-app>
    <v-container fluid>
      <v-row class="d-flex align-center">
        <v-col class="d-flex justify-start align-center">
          <h5>create new policy</h5>
          <v-btn color="teal-lighten-3" size="small" class="ml-2"
            >save as draft
          </v-btn>
        </v-col>
        <v-btn to="/" class="bg-red" size="small">
          <v-icon to="/" color="red-lighten-3">mdi-close</v-icon>
        </v-btn>
        <v-divider></v-divider>
      </v-row>

      <v-row>
        <h5 class="d-flex align-center">policy name</h5>
        <v-col class="d-flex justify-space-between align-center">
          <v-responsive max-width="250">
            <v-text-field
              v-model="policyName"
              label="Enter policy name"
              variant="outlined"
              hide-details
              class="bg-grey-lighten-4"
              readonly=""
            ></v-text-field>
          </v-responsive>
          <Attachm />
        </v-col>
      </v-row>
    </v-container>

    <v-layout>
      <v-navigation-drawer permanent>
        <v-expansion-panels v-if="showKeyInfo">
          <v-expansion-panel
            v-if="showKeyInfo"  
            @click="togglePanel(accessStore.selectedKey)"
            v-model="accessStore.selectedKey"
            class="overflow-hidden"
          >
            <v-list>
              {{ formatText(accessStore.selectedKey) }}
              <v-icon>
                {{
                  accessStore.selectedKey === key
                    ? "mdi-chevron-down"
                    : "mdi-chevron-right"
                }}
              </v-icon>
            </v-list>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-navigation-drawer>

      <v-main>
        <v-card class="bg-blue-grey-lighten-5 overflow-auto">
          <v-row align="center" justify="space-between">
            <v-col cols="auto">
             
            </v-col>
            <v-col cols="3" class="ml-7 mr-7 mb-7">
              <v-select
                :value="accessStore.selectedAccessLevel"
                :items="getAccessLevels()"
                label="Access level"
                variant="solo"
                small
                class="mt-5"
                @input="updateAccessLevel"
                readonly
              ></v-select>
            </v-col>
          </v-row>
          <!-- ASK QUESTIONS -->
          <v-card
            rounded="12"
            class="ml-7 mr-7 mb-7"
            v-if="
              accessStore.selectedKey &&
              policy[accessStore.selectedKey].askQuestions
            "
          >
            <v-table density="compact">
              <tbody>
                <template
                  v-for="(question, key) in policy[accessStore.selectedKey]
                    .askQuestions"
                  :key="key"
                >
                  <tr>
                    <td>{{ formatText(question) }}</td>
                    <v-switch
                      color="success"
                      value="success"
                      hide-details
                    ></v-switch>
                  </tr>
                </template>
              </tbody>
            </v-table>
          </v-card>
        </v-card>
      </v-main>
    </v-layout>
  </v-app>
</template>
<script>
import policy from "../data/policy";
// import { mapActions } from 'pinia';
// import { mapGetters } from 'pinia';

import { useDraftsStore } from "../composables/store/policyStore";
export default {
  data() {
    return {
      policy: policy,
      accessStore: useDraftsStore(),
      // Local data to store the policy name
    };
  },
  computed: {
    filteredNames() {
      if (!this.selectedKey) return []; // Return an empty array if no selected key
      return this.apiData.filter((item) => item.resType === this.selectedKey);
    },
    policyName() {
      const policyStore = useDraftsStore();
      return policyStore.getPolicyName;
    },
    selectedKey() {
      const policyStore = useDraftsStore();
      return policyStore.getSelectedKey;
    },
    showKeyInfo() {
      const selectedKey = this.accessStore.selectedKey;
      return selectedKey && this.policy[selectedKey]?.accessCtrl?.accessLevel;
    },
    accessLevel: {
      get() {
        return this.accessStore.selectedAccessLevel;
      },
      set(level) {
        this.accessStore.setSelectedAccessLevel(level);
      },
    },

    // accessLevelOptions() {
    //   const draftsStore = useDraftsStore();
    //   const selectedKey = draftsStore.getSelectedKey;
    //   const policy = this.policy;

    //   if (!selectedKey || !policy[selectedKey]?.accessCtrl?.accessLevel) {
    //     return [];
    //   }

    //   return policy[selectedKey].accessCtrl.accessLevel;
    // },
  },

  methods: {
    togglePanel(panelKey) {
      this.accessStore.selectedKey = this.accessStore.accessStore.selectedKey === panelKey ? null : panelKey;
    },
    togglePanel(panelKey) {
      this.accessStore.selectedKey = panelKey;
    },
    getAccessLevels() {
      const selectedKey = this.accessStore.selectedKey;
      if (selectedKey && this.policy[selectedKey]?.accessCtrl?.accessLevel) {
        return [this.accessStore.selectedAccessLevel];
      } else {
        return [];
      }
    },
    updateAccessLevel(level) {
      this.accessLevel = level;
    },
    formatText(text) {
      if (!text) return ""; // Return an empty string if the text is null or undefined
      const formattedText = text.replaceAll("_", " ");
      return formattedText.charAt(0).toUpperCase() + formattedText.slice(1);
    },
  },
};
</script>

<style>
::-webkit-scrollbar {
  display: none;
}
.image-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
