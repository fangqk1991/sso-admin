module.exports = {
  Env: 'It will be rewritten by process.env.NODE_CONFIG_ENV or process.env.NODE_ENV',
  Tags: [],
  FangchaAuth: {
    configVersion: '0.0.0',
    onlyStatic: false,
    wecomBotKey: '',
    adminBaseURL: 'http://localhost:2599',
    adminPort: 2600,
    adminJwtSecret: '<TmplDemo Random 32>',
  },
  FangchaAuthDev: {
    adminFrontendPort: 2599,
    cdnURLBase: 'https://fc-cdn.oss-cn-hangzhou.aliyuncs.com/fangcha-auth/',
  },
}
