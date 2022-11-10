module.exports = {
  Env: 'It will be rewritten by process.env.NODE_CONFIG_ENV or process.env.NODE_ENV',
  Tags: [],
  FangchaAuth: {
    configVersion: '0.0.0',
    onlyStatic: false,
    wecomBotKey: '',
    adminBaseURL: 'http://localhost:2599',
    adminPort: 2600,
    adminJwtKey: 'sso_admin_jwt_key',
    adminJwtSecret: '<TmplDemo Random 32>',
    mysql: {
      ssoDB: {
        host: '127.0.0.1',
        port: 3306,
        dialect: 'mysql',
        database: 'fangcha_sso',
        username: 'root',
        password: '',
      },
    },
    WebAuth: {
      usernameRetained: 'admin@example.com',
      passwordRetained: 'admin',
    },
  },
  FangchaAuthDev: {
    adminFrontendPort: 2599,
    cdnURLBase: 'https://fc-cdn.oss-cn-hangzhou.aliyuncs.com/fangcha-auth/',
  },
}
