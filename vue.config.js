const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  
  devServer: {
    host: '0.0.0.0',
    port: 80,
    open: true,
    proxy:{
      '/api':{
        target:'http://localhost:8089/',
        changeOrigin: true,
        pathRewrite:{'^/api':'/api'}
      }
    }
  },
  configureWebpack: {
    name: 'name',
    resolve: {
      alias: {
        '@': path.resolve('src')
      }
    },
  }
})
