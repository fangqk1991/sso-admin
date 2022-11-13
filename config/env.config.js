const envData = process.env || {}

const retainedUserData = {}
if (envData.Auth_User) {
  retainedUserData[envData.Auth_User] = envData.Auth_Password
}
module.exports = {
  FangchaAuth: {
    configVersion: envData.configVersion,
    wecomBotKey: envData.wecomBotKey,
    adminBaseURL: envData.adminBaseURL,
    adminJwtKey: envData.adminJwtKey,
    adminJwtSecret: envData.adminJwtSecret,
    mysql: {
      ssoDB: {
        host: envData.DB_Host,
        port: envData.DB_Port,
        database: envData.DB_Name,
        username: envData.DB_User,
        password: envData.DB_Password,
      },
    },
    ssoTableOptions: {
      tableName_SsoClient: envData.DB_Table_SsoClient,
      tableName_UserAuth: envData.DB_Table_UserAuth,
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
