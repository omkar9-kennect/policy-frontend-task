<template>
  <v-app>
    <v-container fluid>
      <v-row class="d-flex align-center">
        <v-col class="d-flex justify-start align-center">
          <h5>create new policy</h5>
          <v-btn
            color="teal-lighten-3"
            size="small"
            class="ml-2"
            @click="saveDraft"
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
              @input="updatePolicyName"
            ></v-text-field>
          </v-responsive>
          <Attachm />
        </v-col>
      </v-row>
    </v-container>

    <v-layout >
      <v-navigation-drawer permanent>
        <v-expansion-panels>
          <v-expansion-panel
            v-for="(value, key) in policy"
            :key="key"
            @click="togglePanel(key)"
            v-model="accessStore.selectedKey"
            class="overflow-hidden"
          >
            <v-list>
              {{ formatText(key) }}
              <v-icon>
                {{
                  accessStore.selectedKey === key ? "mdi-chevron-down" : "mdi-chevron-right"
                }}
              </v-icon>
            </v-list>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-navigation-drawer>

      <v-main>
        
        <v-card class="bg-blue-grey-lighten-5 overflow-auto" height="100vh"  
    >
          <v-row align="center" justify="space-between">
            <v-col cols="auto">
              <h5 class="ml-7">{{ formatText(accessStore.selectedKey) }}</h5>
            </v-col>
            <v-col cols="3" class="ml-7 mr-7 mb-7">
              <v-select
             
                v-if="accessStore.selectedKey && policy[accessStore.selectedKey].accessCtrl.accessLevel"
                label="Access level"
                variant="solo"
                small
                class="mt-5"
                :items="policy[accessStore.selectedKey].accessCtrl.accessLevel"
                @change="showAccessLevelSelect"
                v-model="accessStore.selectedAccessLevel"
              ></v-select>
            </v-col>
          </v-row>
          <!-- ASK QUESTIONS -->
         
          <v-card
             height="35vh"
            class="ml-7 mr-7 mb-7"
            v-if="accessStore.selectedKey && policy[accessStore.selectedKey].askQuestions"
          >
            <v-table density="compact">
              <tbody>
                <template
                  v-for="(question, key) in policy[accessStore.selectedKey].askQuestions"
                  :key="key"
                >
                <v-hover>
                  <template v-slot:default="{ hover }">
                  <tr :color="hover ? 'green' : ''">
                    <td>{{ formatText(question) }}</td>
                    <v-switch
                      color="success"
                      value="success"
                      hide-details
                    ></v-switch>
                  </tr>
                  </template>
                </v-hover>
                </template>
              </tbody>
            </v-table>
          </v-card>
          <v-card
          height="15vh"
            class="mt-5 ml-7 mr-7 mb-7 d-flex align-center"
            v-if="
              accessStore.selectedKey &&
              policy[accessStore.selectedKey].complementryPrivsSuggestions &&
              policy[accessStore.selectedKey].complementryPrivsSuggestions.length > 0
            "
          >
            <div class="d-flex justify-start align-center">
              <v-icon
                icon="mdi-lightbulb-on-10"
                color="amber-lighten-3"
                size="35"
                class="mr-5"
              ></v-icon>
              <span class="mr-5">Suggestions</span>

              <v-chip-group>
                <template
                  v-for="suggestion in policy[accessStore.selectedKey]
                    .complementryPrivsSuggestions"
                  :key="suggestion"
                >
                  <v-chip
                    prepend-icon="mdi-gift-outline"
                    size="large"
                    class="bg-green ma-2"
                  >
                    {{ formatText(suggestion) }}
                  </v-chip>
                </template>
              </v-chip-group>
            </div>
          </v-card>
          <!--********** RESOURCES RENDER********** -->

          <h5
            class="ml-6"
            v-if="
              accessStore.selectedKey &&
              filteredNames.length === 0 &&
              policy[accessStore.selectedKey].itemsList
            "
          >
            Resources
          </h5>
          <v-card
            class="mt-5 ml-7 mr-7 mb-7"
            v-if="accessStore.selectedKey && policy[accessStore.selectedKey].itemsList"
          >
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

            <v-card
              v-if="
                accessStore.selectedKey &&
                filteredNames.length === 0 &&
                policy[accessStore.selectedKey].itemsList
              "
            >
              <div v-if="loading" class="text-center my-5">
                <v-progress-circular
                  indeterminate
                  color="primary"
                ></v-progress-circular>
              </div>
              <div v-else>
                <h3 class="d-flex justify-center align-center">
                  Resource Not Found⛔
                </h3>
                <div class="image-container">
                  <v-img
                    src="../assets/detective-man-with-magnifying-glass_1308-73920.jpg"
                    alt="Smart Detective"
                    aspect-ratio="9/16"
                    style="max-height: 320px; max-width: 330px"
                  ></v-img>
                </div>
              </div>
            </v-card>
          </v-card>
        </v-card>
 
      </v-main>
    </v-layout>
  
  </v-app>
</template>
<script>
import axios from "axios";
import policy from "../data/policy";
// import { mapActions } from 'pinia';
// import { mapGetters } from 'pinia';
import { useDraftsStore } from "../composables/store/policyStore";
import { useAttachedManagersStore } from "../composables/store/policyStore";

export default {
  data() {
    return {
      accessStore: useDraftsStore(),
      selectedAccessLevel: '',
      policy: policy,
      apiData: ref([]),
      loading: false,
      policyName: "",
      
      accessLevel: ''
    };
  },

  mounted() {
    // console.log(this.draftData);
    this.fetchData();
  },
  computed: {
    filteredNames() {
      if (!this.accessStore.selectedKey) return []; // Return an empty array if no selected key
      return this.apiData.filter((item) => item.resType === this.accessStore.selectedKey);
    },
   
  },
  methods: {
    updatePolicyName() {
      const policyStore = useDraftsStore();
      policyStore.setPolicyName(this.policyName);
    },
    selectedKey() {
      const policyStore = useDraftsStore();
      policyStore.setPolicyName(this.accessStore.selectedKey);
      },
    saveDraft() {
      // console.log(this.policyName);

      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleDateString();
      const formattedTime = currentDate.toLocaleTimeString();
      const attachedManagersStore = useAttachedManagersStore();

      const draftData = {
        policyName: this.policyName,
        dateTime: `${formattedDate} ${formattedTime}`,
      };
      const attachedManagers = attachedManagersStore.attachedManagers;
      const draftsStore = useDraftsStore();

      draftsStore.addDraft(draftData);
      attachedManagersStore.addAttachedManager(attachedManagers);

      // Clear the form or perform any other necessary actions
      this.$nuxt.$router.push({ name: "index", query: { tab: "drafts" } });
    },
    showAccessLevelSelect(level) {
      this.accessStore.setSelectedAccessLevel(level);
    },
    togglePanel(panelKey) {
      this.accessStore.selectedKey = this.accessStore.accessStore.selectedKey === panelKey ? null : panelKey;
    },
    togglePanel(panelKey) {
      this.accessStore.selectedKey = panelKey;
    },
    formatText(text) {
      if (!text) return ""; // Return an empty string if the text is null or undefined
      const formattedText = text.replaceAll("_", " ");
      return formattedText.charAt(0).toUpperCase() + formattedText.slice(1);
    },

    fetchData() {
      this.loading = true;
      const apiUrl = "https://tempapi.proj.me/api/ZQR9vD9Rs";

      axios
        .get(apiUrl)
        .then((response) => {
          this.apiData = response.data;
          this.loading = false;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          this.loading = false;
        });
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
