//importing different packages and adding them into setupNodeEvents() function
const { defineConfig } = require("cypress");
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');

module.exports = defineConfig({
  e2e: {
    //The specPattern attribute tells Cypress that we want to be looking for .feature files
    // in our e2e folder. This means that it will ignore all other formats and only use .feature files
    // as our test.
    specPattern: "**/*.feature",
    
    
    async setupNodeEvents(on, config) {
      // Implement node event listeners here
      //function takes care of digesting these .feature files and convert them into Javascript.
      // Since Cypress runs in browser, we need to make sure that everything 
      //we run (whether it is .ts files .jsx or other formats) will eventually get compiled into 
      //plain Javascript. This is what preprocessors do.
      await addCucumberPreprocessorPlugin(on, config);
      
      //The on("file:preprocessor") part takes care of combining the esbuild plugin with the cucumber
      // plugin so they play nicely together.
      on("file:preprocessor", createBundler({ plugins: [createEsbuildPlugin(config)] }));
      
      // The final return config statement makes sure that everything we have set up will actually be set into our config.
      return config;
    },
  },
});
