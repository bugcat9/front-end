# JavaScript学习
记录跟pink老师学习的js部分

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