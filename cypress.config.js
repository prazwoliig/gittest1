const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', //for html reports
  e2e: {
    setupNodeEvents(on, config) {
      this.screenshotOnRunFailure=true;
      require('cypress-mochawesome-reporter/plugin')(on); //for html reports
    },
  },
});
