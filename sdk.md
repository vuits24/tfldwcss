# Hướng dẫn sử dụng API

**1. Hàm kết quả định dạng chung**
```TypeScript
{
    "result": bool,
    "data": any,
    "code": number,
    "message": string,
}
```
Giải thích mã code:

| STT | mã code | Mô tả | result |
|---|---|---|---|
| 1 | 200 | Thành công | true |
| 2 | 400 | Lỗi | false |
| 3 | 500 | Lỗi xử lý nghiêm trọng server | false |
| 4 | 201 | Validate | false |
| 5 | 202 | constructor | false |
| 6 | 203 | token invalid | false |
| 7 | 205 | token expired | false |
| 8 | 207 | token no permision | false |
| 9 | 206 | ip lock | false |
| 10 | 208 | account lock | false |
| 11 | 402 | No internet | false |



2. Cấu trúc tìm kiếm

```TypeScript
    { 
      select: Object,
      where: Object,
      group: Object,
      order: Object,
      limit: Number,
      start: Number
    }
```

**Trong đó:**
   - **Select**: null || {[key:String]: StringFunction|String}
   - **where**: null || {type: String, filterRules: filterItem[]}
     + **type**: Toán tử loại trừ hay gộp có giá trị OR, AND
     + **filterItem**: {field: String, op: String, value: String|Number|Number} | {type: String, filterRules: filterItem[]}
         * **field**: Tên trường hoặc Hàm xử lý
         * **op**: Toán tử: >, <, >=, <=,....
         * **value**: Giá trị
  - **group**: String[], là Danh sánh mảng field cần group
  - **order**: {[field:String]: ASC|DESC}
  - **limit**: Giới hạn số lượng bản ghi cần lấy
  - **start**: Bắt đầu bản ghi 




## I. Tài khoản
### 1. Đăng nhập
#### 1.1. Đăng nhập theo tên đăng nhập
   Cấu trúc: $http.account.login(obj,cb);

#### 1.2. Đăng nhập bằng thiết  bị mobile (qrcode)
##### 1.2.1 Kiểm tra thông tin theo qrcode
    Cấu trúc: $http.checkQrcode.login(obj,cb);

##### 1.2.2 Đăng nhập
    Cấu trúc: $http.account.loginQrcode(obj,cb);


### 2. Lấy thông tin qrcode để login

    Cấu trúc: $http.account.generateQrcode(obj,cb);

### 3. Đăng ký

#### 3.1. Gửi thông tin đăng ký

    Cấu trúc: $http.account.register(obj,cb);

#### 3.2. Gửi lại mã xác thực

    Cấu trúc: $http.account.resendCode(obj,cb);



#### 3.3. Xác thực đăng ký

    Cấu trúc: $http.account.verifyCode(obj,cb);



### 4. Lấy thông tin user

    Cấu trúc: $http.account.profile(obj,cb);

### 5. Đổi mật khẩu

    Cấu trúc: $http.account.changePassword(obj,cb);

### 6. Cập nhật thông tin cá nhân

    Cấu trúc: $http.account.updateProfile(obj,cb);


### 7. Quên mật khẩu

    Cấu trúc: $http.account.forgotPassword(obj,cb);


### 8. Thiết lập mật khẩu mới

    Cấu trúc: $http.account.setNewPassword(obj,cb);



### 9. Đăng xuất

    Cấu trúc: $http.account.logout(cb);

## II. Tổ chức

   ### 1.Thêm và cập nhật tổ chức
   Cấu trúc: $http.business.createOrUpdate(obj,cb);
   
  obj = {id: String, ....các thông tin tên trường khác}, cb: là hàm trả về
  
  ** Ví dụ: **
   
```javascript
    $http.business.createOrUpdate({id: "abc1", name: "Tên doanh nghiệp"}, console.log);
```
  ### 2. Hàm lấy danh sách

    Cấu trúc: $http.business.list(objFilter, cb);
    

   **Ví dụ**
 

```javascript
      $http.business.list({}, console);
```

   ### 3. Hàm lấy thông tin theo mã số thuế
      
      Cấu trúc: $http.business.taxCode(taxString:String, cb:Function);
   ### 4. Hàm lấy danh sách ngân hàng
      
      Cấu trúc: $http.business.banks(cb:Function);


  ### 5. Hàm lấy Danh sách địa chỉ tình thành, quận/huyện, phường/xã.

    Cấu trúc: $http.cates.address_list(objFilter, cb);

    Tên trường cần lưu ý: type: tt: Tình tỉnh, qh: Quận huyện,  px: Phường xã, pid: Mã cấp trên, cấp cha, id: Mặc định là object sau khi khởi tạo

    Ví dụ:

```javascript
    $http2.cates.address_list({select: {id: "meta::id(id)", name: "name", pid: "pid"}, where: {filterRules: [{field:"meta::id(id)", op:"=", value:"001"}]}},console.log)

 ```


 ### 6. Hàm gợi ý địa chỉ

 Cấu trúc: $http.cates.geo_address({address: String}, cb);

 ### 7. Hàm lấy tọa độ theo mã token địa chỉ
  Cấu trúc: $http.cates.geo_detail({place_id: String}, cb);
 
    
    
