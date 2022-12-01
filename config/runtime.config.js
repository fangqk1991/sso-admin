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
    sqlTablePrefix: envData.DB_tableNamePrefix,
    WebAuth: {
      authMode: envData.authMode,
      retainedUserData: retainedUserData,
      oauthConfig: {
        baseURL: envData.adminSSO_baseURL,
        clientId: envData.adminSSO_clientId,
        clientSecret: envData.adminSSO_clientSecret,
        authorizePath: envData.adminSSO_authorizePath,
        tokenPath: envData.adminSSO_tokenPath,
        logoutPath: envData.adminSSO_logoutPath,
        scope: envData.adminSSO_scope,
        callbackUri: envData.adminSSO_callbackUri,
        userInfoURL: envData.adminSSO_userInfoURL,
      },
    },
    frontendConfig: {
      appName: envData.FE_appName,
      background: envData.FE_background,
      logoCss: envData.FE_logoCss,
      navBackground: envData.FE_navBackground,
    },
  },
}
