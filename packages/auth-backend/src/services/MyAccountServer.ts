import { AccountServer } from '@fangcha/account'
import { MyDatabase } from './MyDatabase'
import { AuthConfig } from '../AuthConfig'

export const MyAccountServer = new AccountServer({
  database: MyDatabase.ssoDB,
  tableName_Account: AuthConfig.accountTableOptions.tableName_Account,
  tableName_AccountCarrier: AuthConfig.accountTableOptions.tableName_AccountCarrier,
  tableName_AccountCarrierExtras: AuthConfig.accountTableOptions.tableName_AccountCarrierExtras,
})
