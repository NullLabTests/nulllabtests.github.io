const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',  // Ensures relative paths for assets
  outputDir: 'dist',  // This is fine as long as you move files after building
});

