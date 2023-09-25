// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from "path"
import vuetify from 'vite-plugin-vuetify';
export default defineNuxtConfig({
  modules: [
   
    '@pinia/nuxt',
  ],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  devtools: { enabled: true },
  alias:{
    "@":resolve(__dirname,'/'),
  },
  css:['@mdi/font/css/materialdesignicons.min.css','vuetify/lib/styles/main.sass'],

  build: {
    transpile: ['vuetify'],
  },
  hooks: {
    'vite:extendConfig': (config) => {
      config.plugins?.push(vuetify());
    },
  },
  ssr: true,
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
});
