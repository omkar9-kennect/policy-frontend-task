<template>
  <v-app>
    <v-btn
      to="/About"
      width="76rem"
      height="15vh"
      class="mt-7 ml-6 rounded-lg"
      style="margin-bottom: 16px"
      prepend-icon="mdi-plus-circle-outline"
      color="white"
      >Create new policy
    </v-btn>

    <v-card width="76rem" height="75vh" class="mt-7 ml-6 mb-1 rounded-lg">
      <v-tabs v-model="tab" bg-color="white" color="green">
        <v-tab value="published">published</v-tab>
        <v-tab value="drafts">drafts</v-tab>
      </v-tabs>
      <v-divider :thickness="2"></v-divider>
      <v-card-text>
        <v-window v-model="tab">
          <v-window-item value="published"> </v-window-item>

          <v-window-item value="drafts">
            <v-card>
              <v-card-title>
                <v-spacer></v-spacer>
                <v-responsive max-width="350">
                  <v-text-field
                    label="policy name"
                    prepend-inner-icon="mdi-magnify"
                    variant="outlined"
                    color="grey-lighten-4"
                    v-model="search"
                    class="text-color-red"
                  ></v-text-field>
                </v-responsive>
              </v-card-title>
             
              <v-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th>Policy Name</th>
                      <th>Created by</th>
                      <th>Date and time</th>
                      <th>Attached Managers</th>
                      <th>View Policy</th>
                    </tr>
                  </thead>
                  <tbody>
                  
                        <tr
                          v-for="(draft, index) in drafts"
                          :key="index"
                         
                        >
                          <td>{{ draft.policyName }}</td>
                          <td>omkar</td>
                          <td>{{ draft.dateTime }}</td>
                          <td>
                            <span
                              v-for="(
                                manager, managerIndex
                              ) in attachedManagers"
                              :key="managerIndex"
                            >
                              {{ manager.name }}</span
                            >
                          </td>
                          <td>
                            <span>
                              <v-btn
                                to="/View"
                                text
                                color="white"
                                class="rounded-0"
                              >
                                view policy
                              </v-btn>
                            </span>
                          </td>
                        </tr>
                   
                  </tbody>
                </template>
              </v-table>
            </v-card>
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
import { useDraftsStore } from "../composables/store/policyStore";
import { useAttachedManagersStore } from "../composables/store/policyStore";

export default {
  data: () => ({
    defaultTab: "published",
    tab: "published",
    search: "",
    dialog: false,
  }),
  mounted() {
    // Check if there is a query parameter "tab" and set the defaultTab accordingly
    if (this.$route.query.tab === "drafts") {
      this.defaultTab = "drafts";
    }

    // Use $nextTick to switch to the defaultTab after the page has been rendered
    this.$nextTick(() => {
      this.tab = this.defaultTab;
    });
  },
  computed: {
    drafts() {
      // Access the store instance and get the drafts data

      const draftsStore = useDraftsStore();
      return draftsStore.getAllDrafts;
    },
    attachedManagers() {
      const attachedManagersStore = useAttachedManagersStore();
      return attachedManagersStore.attachedManagers;
    },
  },
  methods: {
    getColor(index) {
      const colors = ["red", "green", "blue", "yellow"];
      return colors[index % colors.length];
    },
  },
};
</script>

<style>
.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.table th {
  background-color: #f2f2f2;
}
</style>
