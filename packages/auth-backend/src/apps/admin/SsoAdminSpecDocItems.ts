import { SwaggerDocItem } from '@fangcha/router'
import { SsoClientSpecs } from './specs/SsoClientSpecs'
import { AccountSpecs } from './specs/AccountSpecs'

export const SsoAdminSpecDocItems: SwaggerDocItem[] = [
  {
    name: 'SSO Client',
    pageURL: '/api-docs/v1/sso-client',
    specs: SsoClientSpecs,
  },
  {
    name: 'Account',
    pageURL: '/api-docs/v1/account',
    specs: AccountSpecs,
  },
]
