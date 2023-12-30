# BKPRINTER
### Swagger
- swagger ui: <host_server>/docs 
- link document swagger-autogen: [swagger-autogen](https://swagger-autogen.github.io/docs)
### Token jwt - login
--> The token is stored in sessionStorage. accessToken
```
jwt format: header.payload.signature
- payload {
    userID: user.userId,
    role: user.role
}
- signature = "secret"
```
```
    user
    email: toan.nguyenminh@hcmut.edu.vn
    pass: Hcmut12345.
    admin 
    email: admin@example.com
    pass: 12345
```
### Other
middleware for auth at: /server/middleware/authMiddleware.js

To run both server and front end at the same time, in root folder
```shell
npm run dev
```
