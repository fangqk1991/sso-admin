import { AuthConfig } from '../AuthConfig'
import { GlobalAppConfig } from 'fc-config'
import { FangchaApp } from '@fangcha/backend-kit'
import { WebAuthSdkPlugin } from '@fangcha/backend-kit/lib/auth'
import { SsoAdminPlugin } from '@fangcha/sso-server/lib/admin-sdk'
import { MySsoServer } from '../services/MySsoServer'

const app = new FangchaApp({
  env: GlobalAppConfig.Env,
  tags: GlobalAppConfig.Tags,
  appName: 'auth-admin',
  wecomBotKey: AuthConfig.wecomBotKey,
  plugins: [
    SsoAdminPlugin({
      backendPort: AuthConfig.adminPort,
      baseURL: AuthConfig.adminBaseURL,
      jwtSecret: AuthConfig.adminJwtSecret,
      ssoServer: MySsoServer,
    }),
    WebAuthSdkPlugin({
      usernameRetained: 'admin@example.com',
      passwordRetained: 'admin',
    }),
  ],

  appDidLoad: async () => {},
  checkHealth: async () => {},
})
app.launch()
