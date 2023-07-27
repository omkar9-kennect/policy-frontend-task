
    <template>
      
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
        <v-main >
    
          <v-card height="100%" class="bg-blue-grey-lighten-5 overflow-auto" >
            <h5 class="pt-6">Manage position list</h5>
             <v-card width="100%" height="50%">
                   <MangerList/>
             </v-card>
             <h5 class="pt-6">Journey</h5>
             <v-card width="100%" height="30%">
              <Journey/>
             </v-card>
             <h5 class="pt-6">Resources</h5>
             <v-card width="100%" height="50%">
              <Resource/>
             </v-card>
            
          </v-card>
        </v-main> 
    </v-layout>
  
    </template>
    
    <script>
    export default {
    
    }
    </script>
    
    <style>
    
    </style>