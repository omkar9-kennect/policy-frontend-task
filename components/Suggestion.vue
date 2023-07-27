<template>
  <v-card
          width="100%"
          height="20%"
          class="mt-8"
          v-if="
            selectedKey &&
            policy[selectedKey].complementryPrivsSuggestions &&
            policy[selectedKey].complementryPrivsSuggestions.length > 0"
        >
          <div class="d-flex justify-space-betwen align-center">
            <v-icon
              icon="mdi-lightbulb-on-outline"
              color="yellow"
              size="40"
            ></v-icon>
            <p>Suggestions</p>
          </div>
          <v-chip-group>
            <template
              v-for="suggestion in policy[selectedKey]
                .complementryPrivsSuggestions"
              :key="suggestion"
            >
              <v-chip
                prepend-icon="mdi-gift-outline"
                size="x-large"
                class="ma-2"
                color="green"
              >
                {{ formatText(suggestion) }}
              </v-chip>
            </template>
          </v-chip-group>
        </v-card>
</template>

<script>
export default {

}
</script>

<style>

</style>