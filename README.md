### BKPRINTER
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
middleware for auth at: /server/middleware/authMiddleware.js
