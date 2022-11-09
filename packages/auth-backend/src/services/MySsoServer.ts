import { SsoServer } from '@fangcha/sso-server'
import { MyDatabase } from './MyDatabase'
import { AccountServer } from '@fangcha/account'
import { AuthConfig } from '../AuthConfig'

export const MySsoServer = new SsoServer({
  database: MyDatabase.ssoDB,
  redisConfig: AuthConfig.redisCache,
  webBaseURL: AuthConfig.webBaseURL,
  webJwtSecret: AuthConfig.webJwtSecret,
  tableName_SsoClient: 'sso_client',
  tableName_UserAuth: 'user_auth',
  accountServer: new AccountServer({
    database: MyDatabase.ssoDB,
    tableName_Account: 'account_v2',
    tableName_AccountCarrier: 'account_carrier',
    tableName_AccountCarrierExtras: 'account_carrier_extras',
  }),
})
