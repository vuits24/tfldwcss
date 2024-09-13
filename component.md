# component
# I. Định nghĩa 
## 1. Các biến
```css
   --c-black: #303030;
    --c-dgreen: #043C39;
    --c-lgreen: #9BCE39;
    --c-blue: #1062E5;
    --c-yellow: #FBBC05;
    --c-red: #EA4335;
    --c-white: #FFFFFF;
    --c-s-black: #565656;
    --c-s-dgreen: #33605E;
    --c-s-lgreen: #BDDB84;
    --c-s-blue: #3C7EE8;
    --c-t-black: #1A1A1A;
    --c-t-dgreen: #002A28;
    --c-t-lgreen: #7DBE01;
    --c-t-blue: #004BC2;
    --c-q-black: #C9C9CF;
    --c-q-dgreen: #C0CCD1;
    --c-q-lgreen: #DFE9D1;
    --c-q-blue: #C3D3F4;
    --c-black-rgba: 48, 48, 48, 1;
    --c-dgreen-rgba: 4, 60, 57, 1;
    --c-lgreen-rgba: 155, 206, 57, 1;
    --c-blue-rgba: 16, 98, 229, 1;
    --c-yellow-rgba: 251, 188, 5, 1;
    --c-red-rgba: 234, 67, 53, 1;
    --c-white-rgba: 255, 255, 255, 1;
    --c-s-black-rgba: 86, 86, 86, 1;
    --c-s-dgreen-rgba: 51, 96, 94, 1;
    --c-s-lgreen-rgba: 189, 219, 132, 1;
    --c-s-blue-rgba: 60, 126, 232, 1;
    --c-t-black-rgba: 26, 26, 26, 1;
    --c-t-dgreen-rgba: 0, 42, 40, 1;
    --c-t-lgreen-rgba: 125, 190, 1, 1;
    --c-t-blue-rgba: 0, 75, 194, 1;
    --c-q-black-rgba: 201, 201, 207, 1;
    --c-q-dgreen-rgba: 192, 204, 209, 1 ;
    --c-q-lgreen-rgba: 223, 233, 209, 1;
    --c-q-blue-rgba: 195, 211, 244, 1;
    --fs-4xl: 48pt;
        --fs-3xl: 40pt;
        --fs-2xl: 32pt;
        --fs-xl: 24pt;
        --fs-lg: 20pt;
        --fs-m: 16pt;
        --fs-s: 13pt;

```

## 2. Nhúng vào trong thẻ head

```html
<script src="https://tfldwcss.pages.dev/tfl/tfl.min.js"> </script>
<link rel="stylesheet" href="https://tfldwcss.pages.dev/tfl/tfl.min.css">
``` 

## 3. Tạo component svg
- t-svg:   
  Thuộc tính:  width, heigth, fill, name   
  Trong đó:  
   - name tên svg viết Tương tứng tên của icon , dấu cách sẽ được viết liền, không phân biệt hoa thường.
   - fill: --<tên biến màu> hoặc mã màu   
  Copy SVG từ trang sau: https://fonts.google.com/icons?selected=Material+Symbols+Outlined:loupe:FILL@0;wght@400;GRAD@0;opsz@24&icon.size=24&icon.color=%235f6368&icon.platform=web   


# II. Các component



## 1. button: 
#### 1.1 t-button

##### -  Thuộc tính
+ t-size= "small|normal|lager"
+ t-style="  
  background: "--<biến màu> hoặc mã màu",   
  border:"--<biến màu> hoặc mã màu",   
  radius:"-- <biến màu> Hoặc mã màu"   
  ",  
+ t-icon="   
  align:'top|right|bottom|left' default: left,   
  icon:'Tên icon'   
  "
+ t-disable="true|false" default: false

##### -  Sự kiện
+ onclick


##### -  Phương thức hàm
+ disable

## 2. input:
#### 2.1 t-input
##### -  Thuộc tính
+ t-value   
+ t-disable="true/false"      
+ t-readonly="true/false"      
+ t-valid="   
  color: --<var> hoặc mã màu, default red   
  isShow: true/false,   
  pattern:'',  
  message:'',  
  align:'top|right|bottom|left',  
 "

##### -  Sự kiện
+ onchange
+ oninput

##### -  Phương thức hàm
+ getValue()
+ setValue(v)
+ setReadOnly(true/false)  
+ setDisable(true/false)   
  

#### 2.2 t-checkbox
##### -  Thuộc tính   
+ t-value=" "   
+ t-disable= "true/false"      
+ t-class=""   
+ t-toggle="true/false"   
##### -  Sự kiện
+ onchange   


##### -  Phương thức hàm
+ getValue()   
+ setValue(v)
+ isChecked() => true/false
+ setDisable(true/false)   

#### 2.3 t-radio
##### -  Thuộc tính
+ t-value=" "   
+ t-disable= "true/false"      
+ t-class=""   
##### -  Sự kiện
+ onchange 


##### -  Phương thức hàm
+ getValue()   
+ setValue(v)
+ isChecked() => true, false   
+ setReadOnly(true/false)  
+ setDisable(true/false)   

#### 2.4  t-datetime
##### -  Thuộc tính


##### -  Sự kiện



##### -  Phương thức hàm


#### 2.5  t-color
##### -  Thuộc tính


##### -  Sự kiện



##### -  Phương thức hàm


#### 2.6 t-input-list
##### -  Thuộc tính


##### -  Sự kiện



##### -  Phương thức hàm


## 3. Select

#### 3.1 t-select
##### -  Thuộc tính


##### -  Sự kiện



##### -  Phương thức hàm


#### 3.2 t-selecttree
##### -  Thuộc tính


##### -  Sự kiện



##### -  Phương thức hàm


#### 3.3 t-selectgrid

## 4. upload, danh sách file, folder
#### 4.1  t-upload
##### -  Thuộc tính


##### -  Sự kiện



##### -  Phương thức hàm


#### 4.2 t-file
##### -  Thuộc tính


##### -  Sự kiện



##### -  Phương thức hàm


#### 4.3 t-folder
##### -  Thuộc tính


##### -  Sự kiện



##### -  Phương thức hàm


#### 4.4 t-pdf
##### -  Thuộc tính


##### -  Sự kiện



##### -  Phương thức hàm


## 5. Bảng dữ liệu (table)
#### 5.1 t-page
##### -  Thuộc tính


##### -  Sự kiện



##### -  Phương thức hàm


#### 5.2 t-datagrid
##### -  Thuộc tính


##### -  Sự kiện



##### -  Phương thức hàm


## 6. Tab  (sự kiện: thêm, xoá, chọn )
#### 6.1 t-tab
##### -  Thuộc tính


##### -  Sự kiện



##### -  Phương thức hàm


## 7. Tooltip
#### 7.1 t-tooltip
##### -  Thuộc tính


##### -  Sự kiện



##### -  Phương thức hàm



## 8. Thông báo
#### 8.1 t-modal
##### -  Thuộc tính


##### -  Sự kiện



##### -  Phương thức hàm


#### 8.2 t-message (4 loại thông báo)
##### -  Thuộc tính


##### -  Sự kiện



##### -  Phương thức hàm


## 9. Sơ đồ, tree view
#### 9.1 t-diagram 
##### -  Thuộc tính


##### -  Sự kiện



##### -  Phương thức hàm


#### 9.1 t-tree
##### -  Thuộc tính


##### -  Sự kiện



##### -  Phương thức hàm


## 10. Dropdown, help

#### 10.1 t-dropdown
##### -  Thuộc tính


##### -  Sự kiện



##### -  Phương thức hàm


#### 10.1 t-frame (Gắn vào địa chỉ frame )
##### -  Thuộc tính


##### -  Sự kiện



##### -  Phương thức hàm


## 11. list box

#### 11.1 t-list
##### -  Thuộc tính


##### -  Sự kiện



##### -  Phương thức hàm


## 12. layout
#### 12.1 t-nabar
##### -  Thuộc tính


##### -  Sự kiện



##### -  Phương thức hàm


#### 12.2 t-sidemenu
##### -  Thuộc tính


##### -  Sự kiện



##### -  Phương thức hàm


#### 12.3 t-layout
##### -  Thuộc tính


##### -  Sự kiện



##### -  Phương thức hàm





