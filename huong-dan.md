# Hướng dẫn sử dụng Tjs
## 1. Cài đặt

```html
 <script src="https://tfldwcss.pages.dev/sdknextx.js"></script>

```
## 2.Quy tắc code

**1. Truyền tham số vào thuộc tính**

   {{ Hàm, biểu thức, biến }}
   Ví dụ: class="{{()=>className}}" hoặc onclick="{{()=>data.val+=1}}"
   
**2. Truyền tham số vào nội dung**

   {{ Hàm, biểu thức, biến }}
   Ví dụ: <div> Phép cộng: {{ ()=> a + b }} </div>
**3. Khai báo thuộct tính trên thẻ**
  + **x-app**: Khai báo ứng dụng ví dụ: <div x-app> </body> => Hệ thống sẽ render từ div có thuộc tính x-app
  + x-script: Bổ sung kịch bản khi các đối tượng trên chưa đáp ứng được
  + x-list: Áp dụng đối với biến <varname>  thuộc  x-reactive.
    Cấu trúc: x-list="item in data" => item: là giá trị duyệt từng phần tử của biến data, data phải là reactive
 + x-include: Tham chiếu tới tệp module html VD: x-include="https://abc.com/test.html"
 + on<sự kiện>: Sự kiện
 + this<Tên biến>: Thiết lặp thuộc tính <Tên biến> get cho Element.
    
**4.  Một số hàm cơ bản**
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
  + $defineElement: Hàm định nghĩa thẻ tuỳ chỉnh
  + $Await: Hàm  thẻ load dữ liệu bất đồng bộ
  + $MessageBoard: class xử lý msg trên màn hình, khởi tạo: const board = new MessageBoard({...thuộc tính})
  + $topMostZIndex: Hàm lấy giá trị index => $topMostZIndex()
  + $FloatingWindow: Hàm để tạo cửa sổ, popup,..

## 3. Ví dụ cơ bản
1. Trong HTML:

```html
<div x-app>
 <div
 x-script="
 const dem = $state(0);
 "
 >
 <button
 onclick="{{() => dem.val +=1}}"
 > Tăng dần {{dem}}</button>
 </div>
<div>
```

2. Về **$state** thường áp dụng cho một giá trị nhất định
   
 Truy cập giá trị hoặc gán giá trị phải thông qua hàm val,

 Ví dụ: const obj = $state({a:1}); Lấy giá trị: obj.val.a, muốn gán giá trị: obj.val = {a:30}.
   
```html
<div x-app>
 <div 
          x-script="
                    const obj = $state({a:1,b:2});
                    $derive(() => {
                    	console.log(a, b);
                    });
                    
                    "
          >
       	<input
                 value="{{()=>obj.val.a}}"
                 oninput="{{e=> obj.val = {...obj.val, a: e.target.value}}}"
                 />
       	<input 
                
                 value="{{()=>obj.val.b}}"
                 oninput="{{e=> obj.val = {...obj.val, b: e.target.value}}}"
                 />
       	<div>
            Kết quả: {{()=> obj.val.a + obj.val.b}}
       </div>
      </div>
</div>
```
3. Về **$reactive**: việc truy cập sẽ đơn giản hơn sử dụng $state. 
   
 const obj = $reactive({a:1, b:2}); truy cập các giá trị hay gán giá trị trực tiếp: obj.a = 10, obj.b = 20

```html
<div x-app>
 <div 
          x-script="
                    const obj = $reactive({a:1, b:2});
                    "
          >
       	<input
                 value="{{()=>obj.a}}"
                 onchange="{{e=> obj.a = e.target.value}}"
                 />
       	<input 
                
                 value="{{()=>obj.b}}"
                 onchange="{{e=> obj.b = e.target.value}}"
                 />
       	<div> Kết quả: {{ ()=> obj.a + obj.b }} </div>
      </div>
</div>
```
4. **$derive** Hàm có luôn luôn gọi mỗi khi trạng thái thay đổi có thể trả về một giá trị hoặc không.

```html
<div x-app>
      <div 
           x-script="
                     const obj = $reactive({a:1, b:2});
                     const d = $derive(()=> obj.a + obj.b);
                     "
           >
        <input
               value="{{()=>obj.a}}"
               onchange="{{e=> obj.a = e.target.value}}"
               />
        <input 

               value="{{()=>obj.b}}"
               onchange="{{e=> obj.b = e.target.value}}"
               />
        <div> Kết quả: {{ d }} </div>
      </div>
    </div>
```

4. **$defineElement** Hàm định nghĩa thẻ tuỳ chỉnh
 $defineElement(<Tên thẻ>, element, options);

Trong đó:
- element: ({$this, attr, mount}) => trả về một element: 
+ $this: trả về mặc định của element được định nghĩa
+ attr thuộc tính của thẻ, để lấy giá trị của thẻ: const className = attr('class') hoặc thiết đặt giá trị mặc định: const className = attr('class', 'red');
+ mount: là hàm khởi tạo có dạng: mount(() => {.... return unmount })
- options: {mode: 'open'}

  Ví dụ:

```javascript
   $defineElement("check-box", ({$this, attr, mount}) => {
  const {div, input, style}=$tags;
const styleElement = style(`
  .checkbox-wrapper-2 .ikxBAC {
    appearance: none;
    background-color: #dfe1e4;
    border-radius: 72px;
    border-style: none;
    flex-shrink: 0;
    height: 20px;
    margin: 0;
    position: relative;
    width: 30px;
  }

  .checkbox-wrapper-2 .ikxBAC::before {
    bottom: -6px;
    content: "";
    left: -6px;
    position: absolute;
    right: -6px;
    top: -6px;
  }

  .checkbox-wrapper-2 .ikxBAC,
  .checkbox-wrapper-2 .ikxBAC::after {
    transition: all 100ms ease-out;
  }

  .checkbox-wrapper-2 .ikxBAC::after {
    background-color: #fff;
    border-radius: 50%;
    content: "";
    height: 14px;
    left: 3px;
    position: absolute;
    top: 3px;
    width: 14px;
  }

  .checkbox-wrapper-2 input[type=checkbox] {
    cursor: default;
  }

  .checkbox-wrapper-2 .ikxBAC:hover {
    background-color: #c9cbcd;
    transition-duration: 0s;
  }

  .checkbox-wrapper-2 .ikxBAC:checked {
    background-color: #6e79d6;
  }

  .checkbox-wrapper-2 .ikxBAC:checked::after {
    background-color: #fff;
    left: 13px;
  }

  .checkbox-wrapper-2 :focus:not(.focus-visible) {
    outline: 0;
  }

  .checkbox-wrapper-2 .ikxBAC:checked:hover {
    background-color: #535db3;
  }`);
return [
styleElement,
 div({class:"checkbox-wrapper-2"}, input({type: "checkbox", class: "sc-gJwTLC ikxBAC"}))]
  })

```

5. **$Await** Hàm tiện ích bổ sung
 $Await({ value, container = div, Loading: () => "", Error: () => "" }, calback(d)=> d);
+ value: là giá trị xử lý bất đồng bộ
+ Loadding: không bắt buộc là một hàm trả khi đang tải dữ liệu về
+ Error: hàm sẽ trả về dữ liệu khi tải bị lõi
+ calback: là hàm trả kết quả sau tải về và sẽ xử lý render ra màn hình

  Ví dụ:
```javascript
 $add(document.body, $Await({value:fetch('https://api.ipify.org?format=json').then(t => t.json())}, (r) => r.ip))

```


6. **$MessageBoard **
  
  - Khởi tạo

```javascript
   const board = new $MessageBoard({top,bottom, left,right,backgroundColor:"#333D",fontColor:"white",fadeOutSec:0.3,
boardClass: "", boardStyleOverrides: {}, messageClass: '', messageStyleOverrides: {}, closerClass: '', closerStyleOverrides: {}})
```
+ Xác định vị trí hiển thị top left, top right, bottom left, bottom right

- Hiển thị

```javascript
board.show({message: Nội dung, closer: "❌", durationSec: 3, closed: false })

```

+ Nếu thiết đặt closed = true board sẽ đóng lại, có thể đứng từ nơi khác để thiết đặt. 
+ Nếu closer thiết đặt thì sẽ hiển thị đấu "❌" => khi click thì  board sẽ đóng lại, 
+ Nếu thiết đặt durationSec thì sau số giây sẽ tự động đóng lạii

- Xoá khỏi dom

```javascript
board.remove()

```


7. **Hàm List  duyệt danh sách**
 
  7.1: **x-list**: Thuộc tính duyệt danh sách
 
  Cấu trúc: x-list="v, deleter, k in ls"
   + v: Giá trị của phần tử dạng $state
   + deleter: Hàm xoá
   + k: là key của mảng
   + in là từ khoá
   + ls là Danh sách thiết đặt trạng thái $reactive
    
```html
 <div x-app>
  <div 
      x-script="
                     const ls = $reactive([{a:1, b:2},{a:1, b:2},{a:1, b:2},{a:1, b:2}]);
                     " >
       
  <div x-list="v, deleter, k in ls"> 
     <div class="dF">
       <div>{{v}}</div><button class="" onclick="{{()=>deleter(k)}}">Delete</button>
     </div> 
   </div>
  </div>
 </div>
```

7.2: **$list** Hàm duyệt sách sách

 Cấu trúc: **$list**(container, ls, (v, deleter, k) => Element) => Element 
 Trong đó:
  + v: Giá trị của phần tử dạng $state
  + deleter: Hàm xoá
  + k: là key của mảng
  + in là từ khoá
  + ls là Danh sách thiết đặt trạng thái $reactive


```javascript
$add(document.body,
 () => {
  const {ul, li} = $tags;
  const ls = $reactive([1, 2, 3])
  return $list(ul, ls, v => li(v))
 });


```

8. **x-include** Thuộc tính load tệp html từ nguồn khác

   **Cấu trúc**: x-include="url" hoặc x-include="{{()=>Biến}}"

```html
 <div x-include="https://....."> </div>
```


9. **$FloatingWindow** Cửa sổ window

    Cấu trúc: FloatingWindow({...props}, ...children) => Tạo ra cửa sổ

   Trong đó:
  -  props:
  ```TypeScript
  {
  title:ChildDom,
  closed:State<boolean>,
  x:number | State<number>|100(px),
  y:number | State<number>|100(px),
  width:number | State<number>|300(px),
  height:number | State<number>|200(px),
  closeCross: ChildDom|"×",
  customStacking:boolean|false,
  zIndex:number | State<number>,
  disableMove:boolean|false,
  disableResize:boolean|false,
  headerColor:string|"lightgray",
  windowClass:string|"",
  headerClass:string|"",
  childrenContainerClass:string|"",
  crossClass:string|"",
  crossHoverClass:string|"",
  windowStyleOverrides:RecordStyle<string, string | number>|{},
  headerStyleOverrides:RecordStyle<string, string | number>|{},
  childrenContainerClass:RecordStyle<string, string | number>|{},
  childrenContainerStyleOverrides:RecordStyle<string, string | number>|{},
  crossStyleOverrides:RecordStyle<string, string | number>|{},
 crossStyleOverrides:RecordStyle<string, string | number>|{}
 }
```
 ++  Ví dụ: RecordStyle

```json
{
  "z-index": 1000,
  "border-radius": "0.2rem",
  "padding": "0.8rem",
  "background-color": "yellow",
}

```

++ Ví dụ State< number >,  State< boolean >
 ```javascript
const zIndex = $state(1);
const closed = $state(false);
```
- children: là ChildDom

  Ví dụ cụ thể

```javascript
  $add(document.body, $FloatingWindow(
    {title: "tiêu đề", disableMove: true},
    $tags["div"]({style: "display: flex; justify-content: center;"},
      $tags["p"]("Nội dung được thiết kế tại đây"),
    ),
  ))

```
 



  .
