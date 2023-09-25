<template>
  <div class="my-5">
    <p class="mb-2">Resources:</p>
    <v-card flat class="py-3 rounded-12">
      <div v-if="resources">
        <v-table
          v-if="resources.filter((item) => item.resType === title).length > 0"
        >
          <tbody>
            <tr
              v-for="(item, i) in resources.filter(
                (item) => item.resType === title
              )"
              :key="i"
              class="px-3"
            >
              <td
                class="d-flex justify-space-between align-center overflow-hidden"
              >
                <div>
                  <p class="text-custom-1">{{ item.displayName }}</p>
                  <p class="text-custom-2">What this does</p>
                </div>
                <div>
                  <label class="switch">
                    <input
                      type="checkbox"
                      :id="item.displayName"
                      :name="item.displayName"
                      @change="(e) => handleSwitch(e, item)"
                      :checked="isSwitchOn(item.name)"
                    />
                    <span class="slider round"></span>
                  </label>
                </div>
              </td>
            </tr>
          </tbody>
        </v-table>
        <div class="no-data-error" v-else>
          <img src="../assets/image/no_result_found.svg" />
          <p>No Resources found !!!</p>
        </div>
      </div>
      <Loader v-else />
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    statementName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      resources: null,
      store: useStore(),
    }
  },
  created() {
    this.getResources()
  },
  methods: {
    async getResources() {
      this.resources = null
      const { data: resources } = await useFetch(
        'https://5hp7ld-3005.csb.app/api/resources'
      )
      setTimeout(() => {
        this.resources = resources
      }, 2000)
    },
    isSwitchOn(item) {
      const resourcesObject =
        this.store.newPolicy.statement[this.statementName]?.resources
      return resourcesObject && resourcesObject.hasOwnProperty(item)
    },
    handleSwitch(e, item) {
      if (this.store.newPolicy.statement[this.statementName] === undefined) {
        console.log('empty')
        this.store.newPolicy = {
          ...this.store.newPolicy,
          statement: {
            ...this.store.newPolicy.statement,
            [this.statementName]: {
              resources: { [item.name]: e.target.value },
            },
          },
        }
      } else {
        console.log('not empty')
        const existingResources =
          this.store.newPolicy.statement[this.statementName].resources
        const toggleValue = e.target.value
        if (
          existingResources.hasOwnProperty(item.name) &&
          existingResources[item.name] === toggleValue
        ) {
          // Remove the value if it already exists
          delete existingResources[item.name]
        } else {
          // Add the value if it doesn't exist or is different
          existingResources[item.name] = toggleValue
        }

        // Update the statement with the modified access object
        this.store.newPolicy = {
          ...this.store.newPolicy,
          statement: {
            ...this.store.newPolicy.statement,
            [this.statementName]: {
              ...this.store.newPolicy.statement[this.statementName],
              resources: existingResources,
            },
          },
        }
      }

      console.log(this.store.newPolicy)
    },
  },
}
</script>