# 学习案例

> 记录和pink老师学习的前端案例，bilibili地址：https://www.bilibili.com/video/BV14J4114768?p=1&share_medium=android&share_plat=android&share_source=QQ&share_tag=s_i&timestamp=1602932403&unique_k=JQf9dx


## 第一天
学习了 
```html
<h></h> 标题
<p></p> 段落
<br> 换行
<strong><strong> 加粗
<em></em> 倾斜
<del></del> 删除线
<ins></ins> 下划线
<div></div> 盒子标签(独占一行)
<span></span> 盒子标签
<img> 图像标签
<a> 超链接标签
&nbsp 特殊字符 空格
&lt 特殊字符 小于号
&gt 特殊字符 大于号
```
## 第二天
学习了
```html
表格的基本用法
<table></table>
<tr><th></th><tr>
<tr><td></td><tr>

合并单元格
colspan合并列
rowspan合并行

无序列表ul
有序列表ol
自定义列表dl

表单的使用
表单元素有:text、password、radio、checkbox、submit、reset、button、file

select下拉表单
textarea文本域
```
## 第三天
学习了
```html
标签选择器
类标签选择器
id选择器
通配符选择器
CSS字体属性：
font-family:字体类型
font-size：字体大小
font-weight：字体粗细
font-style：字体风格(斜体、正常)
字体复合属性
CSS文本属性：
color:文本颜色
text-align：文本水平对齐
text-decoration：文本装饰(上划线、删除线、下划线等)
text-indent：文本缩进(多用在p标签)
line-height：行间距
```
## 第四天
学习了
```
emmet语法的使用
后代选择器：后代都会被选择 eg: ol li 
子元素选择器：只有直接的子代被选择 eg: .nav>a
并集选择器：并集都选被选择 eg: div,p
伪类选择器：a:link、a:visited、a:hover、a:active
focus选择器：input:focus

块级元素：有宽有高，一个元素占一行
行内元素：没有宽高，一行可以有多个元素
行内块元素：有宽有高，一行可以有多个元素
元素显示模式转化：使用display
文字居中：水平垂直使用text-align: center,垂直使用line-height=height

background-color：背景颜色
background-image：背景图片
background-repeat：背景重复
background-position：背景位置
background-attachment：背景固定
background: rgba(0, 0, 0, 0.6);背景半透明
背景复合写法 background： 背景颜色 背景图片 背景平铺 背景图像滚动 背景图片位置
```
## 第五天
```
CSS层叠属性：后来者居上
CSS继承属性：子元素可以继承父元素的某些样式，text-、font、line、等
行高的继承：子元素继承父元素 body 的行高
CSS优先级：!important > 行内样式>ID选择器 > 类选择器 > 标签 > 通配符 > 继承 > 浏览器默认属性
CSS权重叠加：优先级可以叠加，但是叠加不会进位
盒子边框模型：border-with、border-style、border-color 
边框复合写法：边框的样式 solid 实线边框 dash 虚线 dotted 点线
盒子模型内边距padding：注意内边距会影响盒子实际大小，但是如果让盒子本身没有指定width/height，则此时padding不会撑开盒子大小
盒子模型外边距margin：注意外边距会影响盒子实际大小，同时在嵌套元素中，给内部元素设置外边距会作用到外部元素上，而无法达到想要效果,称为塌陷。塌陷有三种解决方法，见24-外边距合并

```
## 第六天
```
border-radius：圆角边框
box-shadow：盒子阴影
text-shadow：文字阴影
因为行内块之间有缝隙，所以引入浮动
浮动特性：脱标(脱离标准流)，脱离标准流后，浮动的盒子不在保留原先的位置，所以可能会覆盖到标准流盒子上面
浮动特性：行显示，简单的说会放的下就好尽量挤在一行
浮动特性：行内块，当一个元素浮动后，就具有行内块的特性
浮动需要注意的点:如果一个子元素浮动了,尽量其他盒子也浮动,这样保证这些子元素一行显示
为什么清除浮动：父盒子的margin可能受到影响，无法实现左右居中；没有给父盒子设置高度，浮动后父盒子的高度没有被撑开等
清楚浮动建议：使用伪元素进行清楚
```
### 第7天
```
练习了一个学成在线的网页。主要特点
1.头部header部分
2.banner部分
3.精品推荐模块
4.核心box部分
5.footer部分
```