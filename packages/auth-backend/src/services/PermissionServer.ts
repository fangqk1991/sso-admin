import { FCDatabase } from 'fc-sql'
import { _App } from '../models/permission/_App'
import { _AppAccess } from '../models/permission/_AppAccess'
import { _Group } from '../models/permission/_Group'
import { _GroupAccess } from '../models/permission/_GroupAccess'
import { _GroupMember } from '../models/permission/_GroupMember'
import { _GroupPermission } from '../models/permission/_GroupPermission'

interface Options {
  database: FCDatabase

  // Default: fc_app
  tableName_App?: string

  // Default: fc_app_access
  tableName_AppAccess?: string

  // Default: fc_group
  tableName_Group?: string

  // Default: fc_group_access
  tableName_GroupAccess?: string

  // Default: fc_group_member
  tableName_GroupMember?: string

  // Default: fc_group_permission
  tableName_GroupPermission?: string
}

export class PermissionServer {
  public readonly options: Options
  public readonly database: FCDatabase
  public readonly App!: { new (): _App } & typeof _App
  public readonly AppAccess!: { new (): _AppAccess } & typeof _AppAccess
  public readonly Group!: { new (): _Group } & typeof _Group
  public readonly GroupAccess!: { new (): _GroupAccess } & typeof _GroupAccess
  public readonly GroupMember!: { new (): _GroupMember } & typeof _GroupMember
  public readonly GroupPermission!: { new (): _GroupPermission } & typeof _GroupPermission

  private readonly tableName_App: string
  private readonly tableName_AppAccess: string
  private readonly tableName_Group: string
  private readonly tableName_GroupAccess: string
  private readonly tableName_GroupMember: string
  private readonly tableName_GroupPermission: string

  constructor(options: Options) {
    this.options = options

    this.database = options.database

    this.tableName_App = options.tableName_App || 'fc_app'
    this.tableName_AppAccess = options.tableName_AppAccess || 'fc_app_access'
    this.tableName_Group = options.tableName_Group || 'fc_group'
    this.tableName_GroupAccess = options.tableName_GroupAccess || 'fc_group_access'
    this.tableName_GroupMember = options.tableName_GroupMember || 'fc_group_member'
    this.tableName_GroupPermission = options.tableName_GroupPermission || 'fc_group_permission'

    class App extends _App {}
    App.addStaticOptions({
      database: options.database,
      table: this.tableName_App,
    })
    this.App = App

    class AppAccess extends _AppAccess {}
    AppAccess.addStaticOptions({
      database: options.database,
      table: this.tableName_AppAccess,
    })
    this.AppAccess = AppAccess

    class Group extends _Group {}
    Group.addStaticOptions({
      database: options.database,
      table: this.tableName_Group,
    })
    this.Group = Group

    class GroupAccess extends _GroupAccess {}
    GroupAccess.addStaticOptions({
      database: options.database,
      table: this.tableName_GroupAccess,
    })
    this.GroupAccess = GroupAccess

    class GroupMember extends _GroupMember {}
    GroupMember.addStaticOptions({
      database: options.database,
      table: this.tableName_GroupMember,
    })
    this.GroupMember = GroupMember

    class GroupPermission extends _GroupPermission {}
    GroupPermission.addStaticOptions({
      database: options.database,
      table: this.tableName_GroupPermission,
    })
    this.GroupPermission = GroupPermission
  }
}
