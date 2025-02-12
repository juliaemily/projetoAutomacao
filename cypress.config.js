const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', // Certifique-se de usar uma URL válida
    setupNodeEvents(on, config) {
      // implementar node event listeners aqui
    },
  },
})
