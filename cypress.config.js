const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', // Certifique-se de usar uma URL válida
    setupNodeEvents(on, config) {     
      
    },
  },
})
