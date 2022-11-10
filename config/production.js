const envData = process.env || {}

module.exports = {
  FangchaAuth: {
    configVersion: '0.0.0',
    wecomBotKey: envData.wecomBotKey,
    adminBaseURL: envData.adminBaseURL,
    adminPort: 2600,
    adminJwtKey: 'sso_admin_jwt_key',
    adminJwtSecret: envData.adminJwtSecret,
    mysql: {
      ssoDB: {
        host: envData.DB_Host,
        port: envData.DB_Port,
        dialect: 'mysql',
        database: envData.DB_Name,
        username: envData.DB_User,
        password: envData.DB_Password,
      },
    },
    WebAuth: {
      usernameRetained: envData.Auth_User,
      passwordRetained: envData.Auth_Password,
    },
  },
}
