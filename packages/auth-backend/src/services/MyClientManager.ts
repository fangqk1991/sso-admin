import { SsoClientManager } from '@fangcha/sso-server'
import { MyDatabase } from './MyDatabase'
import { AuthConfig } from '../AuthConfig'

export const MyClientManager = new SsoClientManager({
  database: MyDatabase.ssoDB,
  tableName_SsoClient: AuthConfig.ssoTableOptions.tableName_SsoClient,
  tableName_UserAuth: AuthConfig.ssoTableOptions.tableName_UserAuth,
})
