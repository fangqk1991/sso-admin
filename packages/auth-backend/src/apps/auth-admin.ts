import { AuthConfig } from '../AuthConfig'
import { GlobalAppConfig } from 'fc-config'
import { FangchaApp } from '@fangcha/backend-kit'
import { WebAuthSdkPlugin } from '@fangcha/backend-kit/lib/auth'
import { RouterSdkPlugin } from '@fangcha/backend-kit/lib/router'
import { RouterApp } from '@fangcha/router'

const app = new FangchaApp({
  env: GlobalAppConfig.Env,
  tags: GlobalAppConfig.Tags,
  appName: 'auth-admin',
  wecomBotKey: AuthConfig.wecomBotKey,
  plugins: [
    RouterSdkPlugin({
      baseURL: AuthConfig.adminBaseURL,
      backendPort: AuthConfig.adminPort,
      routerApp: new RouterApp({
        docItems: [],
      }),
      jwtProtocol: {
        jwtKey: 'sso_admin_jwt',
        jwtSecret: AuthConfig.adminJwtSecret,
      },
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
