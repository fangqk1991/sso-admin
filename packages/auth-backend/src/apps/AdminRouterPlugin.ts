import { AuthConfig } from '../AuthConfig'
import { MyClientManager } from '../services/MyClientManager'
import { RouterApp } from '@fangcha/router'
import { KitProfileSpecDocItem } from '@fangcha/backend-kit/lib/profile'
import { RouterSdkPlugin } from '@fangcha/backend-kit/lib/router'
import { SsoClientDocItem } from '@fangcha/sso-server/lib/admin-specs'
import { AccountSpecDocItems } from '@fangcha/account/lib/admin-specs'
import { MyAccountServer } from '../services/MyAccountServer'

const routerApp = new RouterApp({
  useHealthSpecs: true,
  docItems: [KitProfileSpecDocItem, SsoClientDocItem, ...AccountSpecDocItems],
})
routerApp.addMiddlewareBeforeInit(async (ctx, next) => {
  ctx.accountServer = MyAccountServer
  ctx.clientManager = MyClientManager
  await next()
})
export const AdminRouterPlugin = RouterSdkPlugin({
  baseURL: AuthConfig.adminBaseURL,
  backendPort: AuthConfig.adminPort,
  routerApp: routerApp,
  jwtProtocol: {
    jwtKey: AuthConfig.adminJwtKey,
    jwtSecret: AuthConfig.adminJwtSecret,
  },
})
