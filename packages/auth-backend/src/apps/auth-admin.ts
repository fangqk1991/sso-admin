import { AuthConfig } from '../AuthConfig'
import { GlobalAppConfig } from 'fc-config'
import { FangchaApp } from '@fangcha/backend-kit'
import { WebAuthSdkPlugin } from '@fangcha/backend-kit/lib/auth'
import { SsoAdminPlugin } from '@fangcha/sso-server/lib/admin-sdk'
import { MyClientManager } from '../services/MyClientManager'
import { AccountServer } from '@fangcha/account'
import { MyDatabase } from '../services/MyDatabase'

const app = new FangchaApp({
  env: GlobalAppConfig.Env,
  tags: GlobalAppConfig.Tags,
  appName: 'sso-admin',
  wecomBotKey: AuthConfig.wecomBotKey,
  plugins: [
    SsoAdminPlugin({
      backendPort: AuthConfig.adminPort,
      baseURL: AuthConfig.adminBaseURL,
      jwtKey: AuthConfig.adminJwtKey,
      jwtSecret: AuthConfig.adminJwtSecret,
      clientManager: MyClientManager,
    }),
    WebAuthSdkPlugin({
      authMode: 'simple',
      simpleAuth: {
        retainedUserData: AuthConfig.AuthSDK.retainedUserData,
        accountServer: new AccountServer({
          database: MyDatabase.ssoDB,
        }),
      },
    }),
  ],

  appDidLoad: async () => {},
  checkHealth: async () => {},
})
app.launch()
