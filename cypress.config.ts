import { defineConfig } from "cypress";

export default defineConfig({
  e2e: { 
    'baseUrl': 'https://prod.campustrack.net/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});