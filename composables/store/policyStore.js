// Updated useDraftsStore
import { defineStore } from 'pinia';

export const useDraftsStore = defineStore({
  id: 'actions', // Unique ID for the store
  state: () => ({
    policydata:[],
  }),
  actions: {
    addPolicy(policyds) {
      // Include the selected key and access level in the data object before pushing to policydata
    this.policydata.push(policyds);
      // console.log("this is policy data from store",this.policydata);
      
    },
   },
  getters:{
    getselectedpolicydata(state){
      return state.policydata;
    },
    
  }
});
