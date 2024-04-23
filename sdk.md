# Hướng dẫn sử dụng API

Cấu trúc api:

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








    ## I. Tài khoản

        ### 1. Đăng nhập
            - Host:
            - Method: POST
            - Body: {id: '', payLoad: object, }
            - Response: {result: bool, data: object, code: number, message: string}


        ### 2. Đăng ký thông tin

        ### 3. Xác nhận đăng ký

        ### 4. Đăng nhập thông qua QRcode mobile

        ### 5. Đăng 
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
    objFilter: 
```TypeScript
    { 
      select: Object,
      where: Object,
      group: Object,
      order: Object,
      limit: Number,
      start: Number
```

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

    Tên trường cần lưu ý: type: tt: Tình tỉnh, qh: Quận huyện,  px: Phường xã


 ### 6. Hàm gợi ý địa chỉ

 Cấu trúc: $http.cates.geo_address({address: String}, cb);

 ### 7. Hàm lấy tọa độ theo mã token địa chỉ
  Cấu trúc: $http.cates.geo_detail({place_id: String}, cb);
 
    
    
