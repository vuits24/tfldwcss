# Cấu trúc class theo framework
```text
[<MQ>:][layer:]<Thuộc tính>[selector]
```
- & Liên kết thuộc tính với nhau
- ; Thay cho dấu cách của các giá trị, và selector

## Diễn giải
-  **[ < MQ > : ]: xs, sm, md, lg, xl, 2xl**
	  + xs: max-width: 575px
	  + sm: min-width: 576px
	  + md: min-width: 768px
	  + lg: min-width: 992px
	  + xl: min-width: 1200px
	  + 2xl: min-width: 1400px

-  [layer:] !<số> Trong đó số: 1-19, số càng cao sự ưu càng lớn.

-  <Thuộc tính> Bắt buộc, Được định nghĩa theo cấu trúc:    

    ```text
    <Viết tắt tên thuộc tính>[Sự ưu tiên]<Giá trị>
    ```
	+  <Viết tắt tên thuộc tính>: là ký  thường được quy ước 
	+ [Sự ưu tiên>] !
	+ <Giá trị>    
		=> #<mã màu>   
		=> --<Tên biến>   
		=> {<Biểu thức>}    
		=> Ký tự viết tắt của giá trị hoặc đầy đủ (Phải tên không có ký tự -, dấu cách).    
		Ví dụ:    
		 - dF => d: display, F: flex => dF {display: flex;}
		 - d!F => d: display, F: flex, ! ưu tiên => d!F {display: flex!importan;}
		 - dFlex => d: display, Flex : flex => dFlex{display: flex}

## Ví dụ cụ thể
### - xs:!1dF
+ **Phân tích**
	MQ: xs =>  @media screen and (max-width: 575px)
	Layer: !1, => @layer l1 
	Thuộc tính: dF => display: flex;
+ **Build thành:** 
	 @media screen and (max-width: 575px) {
		@play l1 {
		xs:!1dF {display: flex;} 
		}
	}


### - xs:!1cRed:hover;>div

+ ***Phân tích**
	MQ: xs =>  screen and (max-width: 575px)
	Layer: !1 => layer l1
	Thuộc tính:  cRed => color: red;
	Selector: :hover;>div => :hover > div, Trong đó ; là dấu cách.

+ **Build thành**
```css
@media screen and (max-width: 575px) {
		@play l1 {
		<Thuộc tính>:hover >div {color: red;} 
		}
	}
```
### - xs:!1cRed&bgGreen:hover;>div

+ **Phân tích**
	MQ: xs =>  screen and (max-width: 575px)
	Layer: !1 => layer l1
	Thuộc tính:  cRed&bgGreen => color: red; background: green; 
	Selector: :hover;>div => :hover > div, Trong đó ; là dấu cách.

+ **Build thành**
```css
@media screen and (max-width: 575px) {
		@play l1 {
		<Thuộc tính>:hover >div {color: red; background: green;} 
		}
	}

```
