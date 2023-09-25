<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
    rel="stylesheet"
  />
  <v-app class="poppins-font">
    <v-container fluid>
      <v-row class="d-flex align-center bg-white">
        <v-col class="d-flex justify-start align-center">
          create new policy
          <v-btn
            color="rgb(150, 238, 238)"
            size="small"
            class="ml-2"
            @click="saveDraft"
            >save as draft
          </v-btn>
        </v-col>
        <v-btn class="bg-red mr-2" size="small" @click="closemodal">
          <v-icon color="red-lighten-3">mdi-close</v-icon>
        </v-btn>
        <v-divider></v-divider>
      </v-row>

      <v-row class="bg-white" >
        <v-col class="bg-white d-flex justify-start align-center">
          policyname
          <v-responsive max-width="50vh" max-height="10vh">
            <v-text-field
            v-for="(draft, key) in draftsData" :key="key"
              :value="draft.data.name"
              variant="outlined"
              hide-details
              density="compact"
              class="bg-white ml-4"
              readonly
            ></v-text-field>
          </v-responsive>
        </v-col>
  
      </v-row>
    </v-container>

    <v-layout>
      <v-navigation-drawer permanent width="280">
        <v-expansion-panels>
          <v-expansion-panel
            v-for="(draft, key) in draftsData"
            :key="key"
            @click="togglePanel(key)"
            class="overflow-hidden hoverable-row"
            v-model="selectedKey"
          >
            <v-list
              v-for="(statementObj, statementKey) in draft.data.statement"
              :key="statementKey"
            >
              <span class="ml-4">{{statementKey }}</span>
            </v-list>
            <v-icon>
              {{
                selectedKey === key ? "mdi-chevron-down" : "mdi-chevron-right"
              }}
            </v-icon>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-navigation-drawer>

      <v-main class="overflow-auto">
        <v-card class="bg-blue-grey-lighten-5" height="100vh">
          <v-row
            align="center"
            justify="space-between"
            v-for="(draft, key) in draftsData"
            :key="key"
            
          >
            <v-col
              cols="auto"
              v-for="(statementObj, statementKey) in draft.data.statement"
              :key="statementKey"
            >
              <span class="ml-7">{{ statementKey}}</span>
            </v-col>
            <v-col cols="3" class="ml-7 mr-7 mb-7" v-for="(statementObj, statementKey) in draft.data.statement"
              :key="statementKey">
              <v-select
               
                label="Access level"
                variant="solo"
                small
                class="mt-5"
              ></v-select>
            </v-col>
          </v-row>
          <!-- ASK QUESTIONS -->

          <v-card
            height="35vh"
            class="ml-7 mr-7 mb-7"
            v-if="selectedKey && policy[selectedKey].askQuestions"
          >
            <v-table density="compact">
              <tbody>
                <template
                  v-for="(question, key) in policy[selectedKey].askQuestions"
                  :key="key"
                >
                  <tr class="hoverable-row">
                    <td>{{ question }}</td>
                    <v-switch
                      color="success"
                      value="success"
                      hide-details
                      inset
                    ></v-switch>
                  </tr>
                </template>
              </tbody>
            </v-table>
          </v-card>
          <v-card
            height="15vh"
            class="mt-5 ml-7 mr-7 mb-7 d-flex align-center"
            v-if="
              selectedKey &&
              policy[selectedKey].complementryPrivsSuggestions &&
              policy[selectedKey].complementryPrivsSuggestions.length > 0
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
                  v-for="suggestion in policy[selectedKey]
                    .complementryPrivsSuggestions"
                  :key="suggestion"
                >
                  <v-chip
                    prepend-icon="mdi-gift-outline"
                    size="large"
                    class="bg-green ma-2"
                  >
                    {{ suggestion }}
                  </v-chip>
                </template>
              </v-chip-group>
            </div>
          </v-card>
          <!--********** RESOURCES RENDER********** -->

          <span
            class="ml-7"
            v-if="selectedKey && policy[selectedKey].itemsList"
          >
            Resources
          </span>
          <v-card
            class="mt-5 ml-7 mr-7 mb-7"
            v-if="selectedKey && policy[selectedKey].itemsList"
          >
            <v-table>
              <tbody>
                <tr
                  v-for="(e, index) in filteredNames"
                  :key="index"
                  class="hoverable-row"
                >
                  <td>{{ e.name }}</td>
                  <v-switch
                    color="success"
                    value="success"
                    hide-details
                    class="ml-n12"
                    inset
                  ></v-switch>
                </tr>
              </tbody>
            </v-table>

            <v-card
              v-if="
                selectedKey &&
                filteredNames.length === 0 &&
                policy[selectedKey].itemsList
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
import { useDraftsStore } from "../composables/store/policyStore";
export default {
  props: ["closeviewModal", "defaultTab","policyds"],
  data() {
    return {
      selectedKey: "",
      policystore: useDraftsStore(),
    };
  },
  computed: {
    draftsData() {
      
      return this.policystore.getselectedpolicydata;
    },
  },

  methods: {
    closemodal() {
      this.$emit("closeviewModal");
      
    },

    togglePanel(panelKey) {
      this.selectedKey = panelKey;
    },
  },
};
</script>

<style>
::-webkit-scrollbar {
  display: none;
}
.v-text-field-height {
  height: fit-content;
}
.poppins-font {
  font-family: "Poppins", sans-serif;
}
.image-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.hoverable-row:hover {
  background-color: rgb(
    150,
    238,
    238
  ); /* Change the background color on hover */
}
</style>
