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
* 环境变量传递的 `Auth_User`、`Auth_Password` 即用于登录的账号密码

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
| `Auth_User` |                         | 临时鉴权用户名 |
| `Auth_Password` |                         | 临时鉴权用户密码 |
| `DB_Table_SsoClient` | `fc_sso_client`             | SsoClient 表名 |
| `DB_Table_UserAuth` | `fc_user_auth`              | UserAuth 表名 |
| `DB_Table_Account` | `fc_account`                | Account 表名 |
| `DB_Table_AccountCarrier` | `fc_account_carrier`        | AccountCarrier 表名 |
| `DB_Table_AccountCarrierExtras` | `fc_account_carrier_extras` | AccountCarrierExtras 表名 |
