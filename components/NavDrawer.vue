<template>
     
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
</template>

<script>
export default {

}
</script>

<style>

</style>