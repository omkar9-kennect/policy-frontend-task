import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VDataTable } from 'vuetify/lib/labs/components.mjs';
import { VAvatar } from 'vuetify/components';
// import { md1 } from 'vuetify/blueprints'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    name: "my-component",
    ssr: true,
    components:{
      VAvatar,
      VDataTable
    },
    // blueprint: md1,
    directives,
    // theme: {
    //   themes: {
    //     light: {
    //       colors: {
    //         background: '#ececec',
    //         globalPrimary: '#00696C',
    //         globalSecondary: '#CCE8E8',
    //         globalTertiary: '#D3E3FF',
    //         errorPrimary: '#BA1B1B',
    //         errorSecondary: '#FFDAD4',
    //         successPrimary: '#158858',
    //         successSecondary: '#D4FFE5',
    //         tooltip: '#051C36',
    //       },
    //     },
    //   },
    // },
  });

  nuxtApp.vueApp.use(vuetify);
}); 
