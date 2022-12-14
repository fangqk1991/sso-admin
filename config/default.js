module.exports = {
  Env: 'It will be rewritten by process.env.NODE_CONFIG_ENV or process.env.NODE_ENV',
  Tags: [],
  FangchaAuth: {
    configVersion: '0.0.0',
    wecomBotKey: '',
    adminBaseURL: 'http://localhost:2599',
    adminPort_frontend: 2599,
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
    sqlTablePrefix: '',
    WebAuth: {
      authMode: 'simple',
      retainedUserData: {
        // 'admin@example.com': 'admin',
      },
      oauthConfig: {
        baseURL: 'https://sso.example.com',
        clientId: '<clientId>',
        clientSecret: '<clientSecret>',
        authorizePath: '/api/v1/oauth/authorize',
        tokenPath: '/api/v1/oauth/token',
        logoutPath: '/api/v1/logout',
        scope: 'basic',
        callbackUri: 'http://localhost:2599/api/v1/handleSSO',
        userInfoURL: 'https://sso.example.com/api/v1/oauth/user-info',
      },
    },
    frontendConfig: {
      appName: 'Fangcha SSO Admin',
      background: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)',
      logoCss: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)',
      navBackground: '#EA3323',
    },
  },
}
