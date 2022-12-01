import { PermissionServer } from './PermissionServer'
import { MyDatabase } from './MyDatabase'

export const MyPermissionServer = new PermissionServer({
  database: MyDatabase.ssoDB,
})
