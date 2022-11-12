# sso-admin
### 准备
* MySQL 数据库、[账号数据表](https://github.com/fangqk1991/account-service/blob/master/schemas/account-service.sql)、[客户端数据表](https://github.com/fangqk1991/sso-server/blob/master/schemas/sso-server.sql) 创建

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
  -e DB_Table_Account=${DB_Table_Account} \
  -e DB_Table_AccountCarrier=${DB_Table_AccountCarrier} \
  -e DB_Table_AccountCarrierExtras=${DB_Table_AccountCarrierExtras} \
  -p 2599:2599 \
  fangqk1991/sso-admin
```