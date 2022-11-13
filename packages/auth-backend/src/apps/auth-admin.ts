import { AuthConfig } from '../AuthConfig'
import { GlobalAppConfig } from 'fc-config'
import { FangchaApp } from '@fangcha/backend-kit'
import { WebAuthSdkPlugin } from '@fangcha/backend-kit/lib/auth'
import { AccountServer } from '@fangcha/account'
import { MyDatabase } from '../services/MyDatabase'
import { AdminRouterPlugin } from './AdminRouterPlugin'

const app = new FangchaApp({
  env: GlobalAppConfig.Env,
  tags: GlobalAppConfig.Tags,
  appName: 'sso-admin',
  wecomBotKey: AuthConfig.wecomBotKey,
  plugins: [
    AdminRouterPlugin,
    WebAuthSdkPlugin({
      authMode: 'simple',
      simpleAuth: {
        retainedUserData: AuthConfig.WebAuth.retainedUserData,
        accountServer: new AccountServer({
          database: MyDatabase.ssoDB,
          ...AuthConfig.WebAuth.accountTableOptions,
        }),
      },
    }),
  ],

  appDidLoad: async () => {},
  checkHealth: async () => {},
})
app.launch()
