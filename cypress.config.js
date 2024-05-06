const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1300,

  e2e: {
    experimentalStudio: true,
    baseUrl: 'https://automationpratice.com.br',
    setupNodeEvents(on, config) {

    },
  },
});
