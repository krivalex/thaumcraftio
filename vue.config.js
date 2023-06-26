const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  chainWebpack: (config) => {
    config.resolve.extensions.add('.ts').add('.tsx')
  },
  transpileDependencies: ['vue'],
})
