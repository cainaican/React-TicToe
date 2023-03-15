const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  projectId: "pnetiu",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
