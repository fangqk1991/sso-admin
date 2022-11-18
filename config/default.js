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
    ssoTableOptions: {
      tableName_SsoClient: 'fc_sso_client',
      tableName_UserAuth: 'fc_user_auth',
    },
    accountTableOptions: {
      tableName_Account: 'fc_account',
      tableName_AccountCarrier: 'fc_account_carrier',
      tableName_AccountCarrierExtras: 'fc_account_carrier_extras',
    },
    WebAuth: {
      retainedUserData: {
        // 'admin@example.com': 'admin',
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
