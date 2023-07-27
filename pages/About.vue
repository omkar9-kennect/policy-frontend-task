<template>
  <v-app >
    <v-container fluid>
      <v-row class="d-flex  align-center ">
        
        <v-col class="d-flex justify-start align-center">
          <h5>create new policy</h5>
          <v-btn color="teal-lighten-3" size="small" >save as draft</v-btn>
        </v-col>
        <v-divider></v-divider>
      </v-row>
      
      <v-row>
        
          <h5 class="d-flex align-center">policy name</h5>
          <v-col class="d-flex justify-space-between align-center">  
      <v-responsive
  
    max-width="400"
  >
  <v-text-field label="Enter policy name" variant="outlined" hide-details  ></v-text-field>
  </v-responsive>
          <Attachm/>
        </v-col>
      </v-row>
  </v-container>
   
     
    <v-layout>
     
     
     <v-navigation-drawer permanent >
           
           <v-list class="overflow-hidden">
           <v-list-item v-for="i in itemList" :key="i">
             {{ i.title }}
               <v-expansion-panels >
               
                  <v-expansion-panel ></v-expansion-panel>
               
                </v-expansion-panels>
                
                
                
           </v-list-item>
          
   
          </v-list>
      
     
   
   
         
       </v-navigation-drawer>
        <Layout/>
    </v-layout>
   
  </v-app>
  
</template>

<script>
export default {
  data() {
    return {
      itemList: [
      { id: 1, title: "manage position list" },
        { id: 2, title: "Journey" },
        { id: 3, title: "Journey Log Access" },
        { id: 4, title: "Journey Queue Management" },
        { id: 5, title: "Master Data" },
        { id: 6, title: "Core Data" },
        { id: 7, title: "Transaction Data" },
        { id: 8, title: "Special Data" },
      ],
    };
  },
}
</script>

<style>

 ::-webkit-scrollbar {
    display:none;
} 
</style>
