import { FangchaAdminApp } from '@web/frontend-kit'

declare module 'vue/types/vue' {
  interface Vue {
    $app: FangchaAdminApp
    $whitespace: string // '　'
  }
}

declare global {
  interface Window {
    _fcApp: FangchaAdminApp
  }
}
