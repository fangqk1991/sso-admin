import { FangchaAdminApp } from '@web/frontend-kit'
import { Session } from '@fangcha/vue/auth'

declare module 'vue/types/vue' {
  interface Vue {
    $app: FangchaAdminApp
    $whitespace: string // '　'
    $session: Session
  }
}

declare global {
  interface Window {
    _fcApp: FangchaAdminApp
  }
}
