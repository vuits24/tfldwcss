# Hướng dẫn sử dụng Tjs
## 1. Cài đặt

```html
 <script src="https://tfldwcss.pages.dev/sdknextx.js"></script>

```
## 2.Quy tắc code
Gần giống với React, vuejs, htmlx,...
1. Chèn hàm vào nội dung
   {{ Hàm, biểu thức, biến }}
2. Khai báo thuộct tính trên thẻ
  + x-app: Khai báo ứng dụng ví dụ: <body x-app> </body> => Hệ thống sẽ render từ body
  + x-script: Bổ sung kịch bản khi các đối tượng trên chưa đáp ứng được
  + x-list: Áp dụng đối với biến <varname>  thuộc  x-reactive.
    Cấu trúc: x-list="item in data" => item: là giá trị duyệt từng phần tử của biến data, data phải là reactive
 + x-include: Tham chiếu tới tệp module html VD: x-include="https://abc.com/test.html"
 + x-<thuộc tính cơ bản của thẻ>: Xây dựng thuộc tính ví dụ: x-class, x-style, ....
 + on:<sự kiện của thẻ>: Sự kiện ví dụ: on:click
    
3  Một số hàm cơ bản
  + $state: Hàm tạo trạng thái một đối tượng VD: var a = $state(true);
  + $reactive: Hàm tạo trạng thái cho object VD: var ab = $reactive({a:1,b:2})
  + $stateFields: Trạng thái cho stateFields: VD: var f = $stateFields({a:1,b:2})
  + $derive: ý nghĩa gần effects của react luôn gọi lại khi có sự thay đổi của trạng thái có thể trả về kết quả hoặc không. $derive(()=> {.... }
  + $tags: chứa các hàm theo định dạng thẻ: $tags["div"]({Thuộc tính},....); hoặc const {div} = $tags; div({class:"color-red"}, "Màu đỏ") => <div class="color-red"> Màu đỏ</div>
  + $add: Hàm sẽ thêm phần tử vào đối tượng: Ví dụ: $add(document.body, div("abc"))
  + $calc: Hàm định nghĩa tính toán lại var c = $calc(() => a + b);
  + $raw: Tạo bản sao object trạng thái thành object cơ bản: var obj = $raw(objState);
  + $list: Tạo hàm mảng các phần tử: $list(dom, dữ liệu reactive, hàm xử lý )
  + $replace: Hàm thay thế lại dữ liệu reactive
  + $addHtmToElement: Hàm thêm text html tương tự như $add, có cấu trúc dạng $addHtmToElement(dom, kiểu thay thế, textHtml, có lấy thẻ script).
  + $htmlToTjs: Hàm convert txt html sang dạng tjs
  + $domToTjs: Hàm chuyển Dom sang dạng tjs
  + $define: Hàm định nghĩa thẻ tuỳ chỉnh
  + $Await: Hàm  thẻ load dữ liệu bất đồng bộ
  + $MessageBoard: class xử lý msg trên màn hình, khởi tạo: const board = new MessageBoard({...thuộc tính})
  + $topMostZIndex: Hàm lấy giá trị index => $topMostZIndex()
  + $FloatingWindow: Hàm để tạo cửa sổ, popup,..
## 3. Ví dụ cơ bản
Trong HTML:

```html
<div
x-script="
const dem = $state(0);
"
>
<button
x-onclick="() => dem.val +=1"
> Tăng dần {{dem}}</button>
</div>
```
