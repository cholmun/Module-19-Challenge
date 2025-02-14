import { defineConfig } from 'cypress';

module.exports = defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
  },
  e2e: {
    setupNodeEvents(on, config) {

        on('task', {
            log(message) {
            console.log(message);
            return null;
            },
        });
        },
    baseUrl: 'http://localhost:3000',
  },
});