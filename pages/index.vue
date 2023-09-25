<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
    rel="stylesheet"
  />
  <v-app class="poppins-font">
    <v-dialog v-model="dialogpolicy" max-width="800">
      <template v-slot:activator>
        <v-btn
          @click="openpolicyModal"
          width="77rem"
          height="15vh"
          class="mt-7 ml-6 rounded-lg"
          style="margin-bottom: 16px"
          prepend-icon="mdi-plus-circle-outline"
          color="white"
        >
          Create new policy
        </v-btn>
      </template>

      <modal
        :dialogpolicy="dialogpolicy"
        @closepolicyModal="closepolicyModal"
        @draftSaved="handleDraftSaved"
      />
      
    </v-dialog>

    <v-card width="77rem" height="75vh" class="mt-2 ml-6 mb-1 rounded-lg">
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
                <div class="d-flex justify-space-between">
                  <v-responsive max-width="350">
                    <v-text-field
                      label="policy name"
                      prepend-inner-icon="mdi-magnify"
                      variant="outlined"
                      color="grey-lighten-4"
                      v-model="search"
                      class="text-color-red"
                      single-line
                      hide-details
                    ></v-text-field>
                  </v-responsive>
                  <v-icon
                    v-if="showDeleteIcon"
                    color="red"
                    @click="deleteSelectedDrafts"
                    >mdi-delete</v-icon
                  >
                </div>
              </v-card-title>

              <v-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th></th>
          <th>Policy Name</th>
          <th>Created by</th>
          <th>Date and time</th>
          <th>Attached Managers</th>
          <th>View Policy</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(draft, index) in draftsData" :key="index" class="hoverable-row">
          <td>
            <v-checkbox v-model="selectedDraftIds" :value="draft.id"></v-checkbox>
          </td>
          <td>{{ draft.policyName }}</td>
          <td>omkar</td>
          <td>{{ draft.dateTime }}</td>
          <td>
            <span v-for="(manager, managerIndex) in attachedManagers" :key="managerIndex">
              {{ manager.name }}
            </span>
          </td>
          <td>
            <v-dialog v-model="dialogview" max-width="800">
              <template v-slot:activator>
                <v-link @click="openviewModal" text>View policy</v-link>
              </template>

              <Viewp :dialogview="dialogview" @closeviewModal="closeviewModal" />
            </v-dialog>
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

export default {
  data: () => ({
    policystore:useDraftsStore(),
    defaultTab: "published",
    tab: "published",
    search: "",
    dialogpolicy: false,
    dialogview: false,
    selectedDraftIds: [],
    val:{},
    showDeleteIcon: false,
  }),

  computed: {
  
    savedActions() {
      const actionsStore = useDraftsStore();
      return actionsStore.getselectedpolicydata;
    },
    draftsData() {
      
      const savedActions = this.savedActions; // Fetch policy data from the store
    const drafts = savedActions.filter(action => action.type === 'saveDraft'); // Filter drafts
    
    return drafts.map(draft => ({
      id: draft.data._id,
      policyName: draft.data.name,
      dateTime: new Date()
      
    }));
  },
  
    attachedManagers() {
      const attachedManagersStore = useDraftsStore();
      return attachedManagersStore.attachedManagers;
    },
  },
  
  mounted() {
    // Use $nextTick to switch to the defaultTab after the page has been rendered
    this.$nextTick(() => {
      this.tab = this.defaultTab;
    });
    
  },
  methods: {
    deleteSelectedDrafts() {
      const selectedIds = this.selectedDraftIds;

this.policystore.policydata = this.policystore.policydata.filter(action => {
  if (action.type === 'saveDraft' && selectedIds.includes(action.data._id)) {
    return false;
  }
  return true;
});

this.selectedDraftIds = []; // Clear selectedDraftIds after deletion
this.showDeleteIcon = false;
  },




    getColor(index) {
      const colors = ["red", "green", "blue", "yellow"];
      return colors[index % colors.length];
    },
    openpolicyModal() {
      this.dialogpolicy = true;
    },
    openviewModal() {
      this.dialogview = true;
    },
    closepolicyModal() {
      this.dialogpolicy = false;
    },
    closeviewModal() {
      this.dialogview = false;
    },
    handleDraftSaved() {
      this.tab = "drafts";
    },
  },
};
</script>

<style>
.hoverable-row:hover {
  background-color: rgb(
    216,
    247,
    247
  ); /* Change the background color on hover */
}
.poppins-font {
  font-family: "Poppins", sans-serif;
}
</style>
