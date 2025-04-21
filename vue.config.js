const path = require("path");
module.exports = {
  runtimeCompiler: true,
  worker: {
    format: 'es',
    plugins: [],
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
         @import '@/application/assets/styles/global.scss';
        `
      }
    }
  },

  configureWebpack: {
    resolve: {
      alias: {
        "@/*": path.resolve(__dirname, "./src")
      },
      extensions: ['.js', '.vue', '.json', '.ts']
    }
  }
}