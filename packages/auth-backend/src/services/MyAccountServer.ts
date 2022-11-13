import { AccountServer } from '@fangcha/account'
import { MyDatabase } from './MyDatabase'
import { AuthConfig } from '../AuthConfig'

export const MyAccountServer = new AccountServer({
  database: MyDatabase.ssoDB,
  tableName_Account: AuthConfig.WebAuth.accountTableOptions.tableName_Account,
  tableName_AccountCarrier: AuthConfig.WebAuth.accountTableOptions.tableName_AccountCarrier,
  tableName_AccountCarrierExtras: AuthConfig.WebAuth.accountTableOptions.tableName_AccountCarrierExtras,
})
