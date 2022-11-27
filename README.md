# sso-admin
### 相关项目
* <https://github.com/fangqk1991/sso-app>

### Admin Demo
* Demo: <https://sso-admin-demo.fangcha.net/>
* Demo 账号: sso-admin-demo@fangcha.net
* Demo 密码: sVUhtonaLp4N0M2EKIm5nLbtoxSwDdBN

![](https://image.fangqk.com/2022-11-15/sso-demo-client.png)
![](https://image.fangqk.com/2022-11-15/sso-demo-user.png)

### 准备
* MySQL 数据库、[数据表](https://github.com/fangqk1991/sso-app/blob/master/config/schemas.sql)

### 使用 Docker 启动
```
docker pull fangqk1991/sso-admin

docker run -d --restart=unless-stopped \
  --name sso-admin \
  -e ENV=production \
  -e adminBaseURL=${adminBaseURL} \
  -e adminJwtSecret=${adminJwtSecret} \
  -e DB_Host=${DB_Host} \
  -e DB_Port=${DB_Port} \
  -e DB_Name=${DB_Name} \
  -e DB_User=${DB_User} \
  -e DB_Password=${DB_Password} \
  -e Auth_User=${Auth_User} \
  -e Auth_Password=${Auth_Password} \
  -p 2599:2599 \
  fangqk1991/sso-admin
```

### 登录鉴权
* 可以使用普通认证方式或对接标准 SSO
* 普通认证方式(authMode = 'simple'): 环境变量传递的 `Auth_User`、`Auth_Password` 即用于登录的账号密码
* SSO(authMode = 'sso'): 传递 adminSSO_xxx 环境变量，对接已有的单点登录系统

### 环境变量说明
| 环境变量 | 缺省值                     | 说明 |
|:-------|:------------------------|:---|
| `adminBaseURL` | `http://localhost:2599` | 网站 baseURL |
| `adminJwtSecret` | `<TmplDemo Random 32>`  | JWT Secret |
| `DB_Host` | `127.0.0.1`             | MySQL Host |
| `DB_Port` | `3306`                  | MySQL 端口 |
| `DB_Name` | `fangcha_sso`           | MySQL 数据库名 |
| `DB_User` | `root`                  | MySQL 用户名 |
| `DB_Password` |                         | MySQL 用户密码 |
| `authMode` | `simple` | 鉴权模式，simple 或 sso |
| `Auth_User` |                         | 临时鉴权用户名 |
| `Auth_Password` |                         | 临时鉴权用户密码 |
| `adminSSO_baseURL` |  | SSO baseURL |
| `adminSSO_clientId` | `<clientId>` | SSO clientId |
| `adminSSO_clientSecret` | `<clientSecret>` | SSO clientSecret |
| `adminSSO_authorizePath` | `/api/v1/oauth/authorize` | SSO authorizePath |
| `adminSSO_tokenPath` | `/api/v1/oauth/token` | SSO tokenPath |
| `adminSSO_logoutPath` | `/api/v1/logout` | SSO logoutPath |
| `adminSSO_scope` | `basic` | SSO scope |
| `adminSSO_callbackUri` | `http://localhost:2599/api/v1/handleSSO` | SSO callbackUri |
| `adminSSO_userInfoURL` |  | SSO userInfoURL |
| `DB_Table_SsoClient` | `fc_sso_client`             | SsoClient 表名 |
| `DB_Table_UserAuth` | `fc_user_auth`              | UserAuth 表名 |
| `DB_Table_Account` | `fc_account`                | Account 表名 |
| `DB_Table_AccountCarrier` | `fc_account_carrier`        | AccountCarrier 表名 |
| `DB_Table_AccountCarrierExtras` | `fc_account_carrier_extras` | AccountCarrierExtras 表名 |
| `FE_appName` | `Fangcha SSO Admin`                   | 登录页应用名                   |
| `FE_background` | `linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)`                         | 登录页背景                    |
| `FE_logoCss` | `linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)` | 登录页 Logo 样式              |
| `FE_navBackground` | `#EA3323` | 应用导航栏背景              |
