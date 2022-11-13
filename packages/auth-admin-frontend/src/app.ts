import { AdminApp } from '@fangcha/vue/app-admin'
import { AuthFrontendPlugin, MySession } from '@fangcha/vue/auth'
import ClientListView from './views/client/ClientListView'
import MyClientListView from './views/client/MyClientListView'
import ClientDetailView from './views/client/ClientDetailView'
import { KitAuthApis } from '@fangcha/backend-kit/lib/apis'
import { I18nCode, VisitorInfo } from '@fangcha/tools'
import { HomeView } from './views/HomeView'
import { AccountListView } from './views/account/AccountListView'

MySession.defaultRedirectUri = '/'

const _fcApp = new AdminApp({
  appName: 'SSO Admin',

  homeView: HomeView,

  plugins: [AuthFrontendPlugin()],

  loginUrl: KitAuthApis.RedirectLogin.route,
  logoutUrl: KitAuthApis.RedirectLogout.route,

  reloadUserInfo: async (): Promise<VisitorInfo> => {
    await MySession.reloadSessionInfo()
    const email = MySession.curUser?.email || ''
    return {
      iamId: 0,
      email: email,
      name: email,
      permissionKeyMap: {},
      // isAdmin: true,
      locale: I18nCode.en,
    }
  },

  sidebarNodes: [
    {
      titleEn: '授权应用',
      titleZh: '授权应用',
      icon: 'el-icon-user',
      links: [
        {
          titleEn: '客户端管理',
          titleZh: '客户端管理',
          path: '/v1/client',
        },
        {
          titleEn: '我的客户端',
          titleZh: '我的客户端',
          path: '/v1/mine/client',
        },
      ],
    },
    {
      titleEn: '用户管理',
      titleZh: '用户管理',
      icon: 'el-icon-user',
      links: [
        {
          titleEn: '账号管理',
          titleZh: '账号管理',
          path: '/v1/account',
        },
      ],
    },
  ],
  routes: [
    {
      path: '/v1/client',
      component: ClientListView,
      name: 'ClientListView',
    },
    {
      path: '/v1/mine/client',
      component: MyClientListView,
      name: 'MyClientListView',
    },
    {
      path: '/v1/client/:clientId',
      component: ClientDetailView,
      name: 'ClientDetailView',
    },
    {
      path: '/v1/account',
      component: AccountListView,
      name: 'AccountListView',
    },
  ],
})
window._fcApp = _fcApp
_fcApp.launch()
