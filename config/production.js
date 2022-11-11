const envData = process.env || {}

const retainedUserData = {}
if (envData.Auth_User) {
  retainedUserData[envData.Auth_User] = envData.Auth_Password
}
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
      retainedUserData: retainedUserData,
      accountTableOptions: {
        tableName_Account: envData.DB_Table_Account,
        tableName_AccountCarrier: envData.DB_Table_AccountCarrier,
        tableName_AccountCarrierExtras: envData.DB_Table_AccountCarrierExtras,
      },
    },
  },
}
