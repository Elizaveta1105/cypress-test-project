const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demo.learnwebdriverio.com",
    defaultCommandTimeout: 10000,
    viewportWidth: 1024,
    viewportHeight: 768,
    videoUploadOnPasses: false,
    numTestsKeptInMemory: 3,
    screenshotOnRunFailure: true
  },
  env: {
    homePageUrl: "https://demo.learnwebdriverio.com/"
  }
});
