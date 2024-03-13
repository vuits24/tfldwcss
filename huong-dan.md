# Hướng dẫn sử dụng Tjs
## 1. Cài đặt

```html
 <script src="https://tfldwcss.pages.dev/tfl.js"></script>

```
## 2.Quy tắc code
Gần giống với React, vuejs, htmlx,...
1. Chèn hàm vào nội dung
   {{ Hàm, biểu thức, biến }}
2. Khai báo trạng thái, bổ sung thêm phần tử, thực hiện khai báo trên thuộc tính của phần tử
    Chú ý:  varname: Tên biến được quy tắc viết chữ thường, viết liền không dâu, không có chứa ký tự đặc biệt,...
  + x-tags="Các phần tử nếu chưa từng xuất hiện ở trong tài liệu html"
  + x-state:<varname> => Đại diện cho một giá trị có thể được cập nhật trong suốt ứng dụng của bạn
  + x-reactive:<varname> => Cung cấp một cách thuận tiện để xác định một đối tượng phản ứng duy nhất trong đó mỗi trường riêng lẻ của nó tương ứng với một đối tượng Trạng thái cơ bản
  + x-stateFields:<varname> => Cho một đối tượng phản ứng obj, trả về một đối tượng cho tất cả các trường trạng thái cơ bản của obj

  + x-derive[:<varname>] => Là một hàm, có giá trị trả về hoặc không. Tạo một đối tượng Trạng thái dẫn xuất dựa trên hàm dẫn xuất của hàm f.
    Giá trị của trạng thái dẫn xuất luôn đồng bộ với kết quả của f. tức là: bất cứ khi nào giá trị của phụ thuộc của nó thay đổi, f sẽ được gọi để cập nhật giá trị của trạng thái dẫn xuất một cách đồng bộ.
  + x-script: Bổ sung kịch bản khi các đối tượng trên chưa đáp ứng được
  + x-list: Áp dụng đối với biến <varname>  thuộc  x-reactive.
    Cấu trúc: x-list="item in data" => item: là giá trị duyệt từng phần tử của biến data, data phải là reactive 


## 3. Ví dụ cơ bản
Trong HTML:

```html
<div
x-state:dem="0"
>
<button
x-onclick="dem.val +=1"
> Tăng dần {{dem}}</button>
</div>
```
