# sso-admin
### 准备
* MySQL 数据库、[客户端数据表](https://github.com/fangqk1991/sso-server/blob/master/schemas/sso-server.sql) 创建

### 本地启动
```
yarn install

cd packages/auth-backend && yarn start
cd packages/auth-admin-frontend && yarn start
```

## 使用 Docker 启动
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
  -e DB_Table_SsoClient=${DB_Table_SsoClient} \
  -e DB_Table_UserAuth=${DB_Table_UserAuth} \
  -p 2599:2599 \
  fangqk1991/sso-admin
```

### 环境变量说明
| 环境变量 | 缺省值 | 说明 |
|:-------|:---|:---|
| `adminBaseURL` | `http://localhost:2599` | 网站 baseURL |
| `adminJwtSecret` | `<TmplDemo Random 32>` | JWT Secret |
| `DB_Host` | `127.0.0.1` | MySQL Host |
| `DB_Port` | `3306` | MySQL 端口 |
| `DB_Name` | `fangcha_sso` | MySQL 数据库名 |
| `DB_User` | `root` | MySQL 用户名 |
| `DB_Password` |  | MySQL 用户密码 |
| `Auth_User` |  | 临时鉴权用户名 |
| `Auth_Password` |  | 临时鉴权用户密码 |
| `DB_Table_SsoClient` | `sso_client` | SsoClient 表名 |
| `DB_Table_UserAuth` | `user_auth` | UserAuth 表名 |
