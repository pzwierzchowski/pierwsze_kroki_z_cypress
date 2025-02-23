const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'hrekfd',
  
  viewportHeight: 800,
  viewportWidth: 1200,

  e2e: {
    baseUrl: 'https://tapsshop.pl/',
  }   
});
