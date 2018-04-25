# nodejs 学习的地方

---

#### JavaScript基础类型

> 原始类型: Undefined、Null、Boolean、Number、String、Symbol

1.**原始类型**又被称为**基本类型**，原始类型保存的变量和值直接保存在**栈内存**(Stack)中,且空间相互独立,通过值来访问.

2.`Number`是基于“二进制浮点数”实现的,使用的是“双精度”格式,不能用于===比较；特殊的(NaN!==NaN)只能使用isNaN()判断。

3.**类型转换**虽然很方便，但有时也跟我们预期相去甚远，如：{}+[]返回0
![](screenshots/15517231.jpg)

> 引用类型: Object、Array、Date、Function

1.引用类型是保存在**堆内存**中,而**栈内存**(Heap)中会有一个**堆内存地址**,通过这个地址变量被指向堆内存中`Object`真正的值,因此引用类型是按照引用访问的.

2.数组`Array`不仅可以通过数字索引,也可以通过字符串索引,但值得注意的是,字符串索引的键值对并不算在数组的长度里.






















