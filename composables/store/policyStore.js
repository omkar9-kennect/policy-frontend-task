// store/drafts.js

import { defineStore } from 'pinia';

export const useDraftsStore = defineStore('drafts', {
  state: () => ({
    draftsData: [],
  policyName:'',
  selectedAccessLevel: '',
  selectedKey: '',
  }),
  getters: {
    getAllDrafts: (state) => state.draftsData,
    getSelectedKey() {return this.selectedKey},
    getAccessLevel() {return this.accessLevel},
    getPolicyName() {
      return this.policyName;
    },
  },
  actions: {
    addDraft(draftData) {
      this.draftsData.push(draftData);
      },
      setPolicyName(newPolicyName) {
        this.policyName = newPolicyName;
      },
      setSelectedKey(key) {
        this.selectedKey = key;
      },
      setSelectedAccessLevel(level) {
        this.selectedAccessLevel = level;
      },
  },
})



export const useAttachedManagersStore = defineStore('attachedManagers', {
  state: () => ({
    attachedManagers: [],
  }),
  actions: {
    addAttachedManager(manager) {
      this.attachedManagers.push(manager);
    },
     
  },
});

