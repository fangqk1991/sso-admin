import { BasicApp } from '@fangcha/vue/app'
import { AuthFrontendPlugin } from '@fangcha/auth-frontend'
import ClientListView from './views/client/ClientListView'
import MyClientListView from './views/client/MyClientListView'
import ClientDetailView from './views/client/ClientDetailView'

const _fcApp = new BasicApp({
  appName: 'Auth Admin',
  plugins: [AuthFrontendPlugin()],
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
  ],
})
window._fcApp = _fcApp
_fcApp.launch()
