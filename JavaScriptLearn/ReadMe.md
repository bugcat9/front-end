# JavaScript学习
记录跟pink老师学习的js部分

## javaScript基础 
### 第一天
#### js中数据类型

| 简单数据类型 | 说明                                            | 默认值    |
| ------------ | ----------------------------------------------- | --------- |
| Number       | 数字类型，包含整数类型和浮点型值，如：0、1、0.1 | 0         |
| Boolean      | 布尔类型，如：true、false,等价于1和0            | false     |
| String       | 字符串类型，如：“张三”                          | “”        |
| Undefined    | var a;声明变量a但是没有给值，此时a=undefined    | undefined |
| Null         | var a = null;声明了变量a为空值                  | null      |

#### 数据类型转化

1. 转化为字符串
   * toString()
   * String强制转换
   * 加号拼接字符串(用的最多)
2. 转化为数字类型
   * parseInt()
   * parseFloat()
   * Number
   * 利用了算数运算 - * / 隐式转换
3. 布尔类型转换
   * Boolean(),代表空、否定的值会被转换为 false ，如 ''、0、NaN、null、undefined

## javaScript中Api部分

### 第一天

```javascript
getElementById 通过id获得元素
getElementsByTagName 通过标签名获得元素
getElementsByClassName 根据类名获得某些元素集合
querySelector 返回指定选择器的第一个元素对象  切记 里面的选择器需要加符号 .box  #nav
querySelectorAll()返回指定选择器的所有元素对象集合
var bodyEle = document.body; 获取body 元素
var htmlEle = document.html; 获取html 元素
事件是有三部分组成  事件源  事件类型  事件处理程序   我们也称为事件三要素
innerText 不识别html标签 非标准  去除空格和换行
innerHTML 识别html标签 W3C标准 保留空格和换行的
修改元素样式：
1.使用 element.style 获得修改元素样式  如果样式比较少 或者 功能简单的情况下使用
2.我们可以通过 修改元素的className更改元素的样式 适合于样式较多或者功能复杂的情况
3.如果想要保留原先的类名，我们可以这么做 多类名选择器
```

### 第二天

```javascript
获取元素的属性值
1.element.属性
2.element.getAttribute('属性')  get得到获取 attribute 属性的意思 我们程序员自己添加的属性我们称为自定义属性 index
设置元素属性值
1.element.属性= '值'
2.element.setAttribute('属性', '值');  主要针对于自定义属性
移除属性
removeAttribute(属性)
得到父节点 parentNode
得到子节点 1.childNodes 2.children
第一个子节点 firstChild
第一个子元素节点 firstElementChild
下一个兄弟节点 nextSibling nextElementSibling
创建节点元素节点
添加节点 node.appendChild(child)  node 父级  child 是子级 后面追加元素  类似于数组中的push
添加节点 node.insertBefore(child, 指定元素);
```

### 第三天

```javascript
removeChild(child) 删除元素
node.cloneNode(); 括号为空或者里面是false 浅拷贝 只复制标签不复制里面的内容
node.cloneNode(true); 括号为true 深拷贝 复制标签复制里面的内容
三种创建元素方式区别 :
1. document.write() 创建元素  如果页面文档流加载完毕，再调用这句话会导致页面重绘
2. innerHTML 创建元素
3. document.createElement() 创建元素
注册事件：
1.传统方式注册事件 btns[0].onclick = function ()
2.事件侦听注册事件 addEventListener
3.attachEvent ie9以前的版本支持，不推荐
删除事件：
1. 传统方式删除事件  divs[0].onclick = null;
2. removeEventListener 删除事件
3. detachEvent
dom 事件流 三个阶段
1. JS 代码中只能执行捕获或者冒泡其中的一个阶段
2. onclick 和 attachEvent（ie） 只能得到冒泡阶段。
3. 捕获阶段 如果addEventListener 第三个参数是 true 那么则处于捕获阶段  document -> html -> body -> father -> son
4. 冒泡阶段 如果addEventListener 第三个参数是 false 或者 省略 那么则处于冒泡阶段  son -> father ->body -> html -> document
事件对象event
阻止冒泡  dom 推荐的标准 stopPropagation() 
事件委托：给父节点添加侦听器， 利用事件冒泡影响每一个子节点
常见鼠标事件
```

### 第四天

```
常见键盘事件
定时器
清除定时器
```

