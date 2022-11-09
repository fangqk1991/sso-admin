const { WebpackBuilder } = require('@fangcha/webpack')

const config = require('fc-config').GlobalAppConfig

module.exports = new WebpackBuilder()
  .setDevMode(true)
  .setPort(config.FangchaAuthDev.adminFrontendPort)
  .setExtras({
    devServer: {
      proxy: {
        '/api': `http://localhost:${config.FangchaAuth.adminPort}`,
      },
    },
  })
  .build()
