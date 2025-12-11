const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  e2e: {
    supportFile: "cypress/support/e2e.js",
    specPattern: "**/*.feature",
    blockHosts: ["*.backtrace.io"],
    async setupNodeEvents(on, config) {
      // conect Cucumber to Cypress
      await addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      //relatorio visual
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });

      return config;
    },
  },
});