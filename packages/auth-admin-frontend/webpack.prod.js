const { WebpackBuilder } = require('@fangcha/webpack')

const config = require('fc-config').GlobalAppConfig

module.exports = new WebpackBuilder()
  .setDevMode(false)
  .setPublicPath(config.FangchaAuthDev.cdnURLBase)
  // .setExtras({
  //   optimization: {
  //     minimize: false,
  //   },
  // })
  .build()
