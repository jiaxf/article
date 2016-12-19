# 函数式编程类型签名

等式推导（equational reasoning）

纯函数

函数式编程的人很容易深陷类型签名（type signatures）的泥淖。类型（type）是让所有不同背景的人都能高效沟通的元语言。

类型签名不但可以用于编译时检测（compile time checks），还是最好的文档。所以类型签名在函数式编程中扮演着非常重要的角色——重要程度远远超出你的想象。

JavaScript 是一种动态类型语言，但这并不意味着要一味否定类型。我们还是要和字符串、数值、布尔值等等类型打交道的；只不过，语言层面上没有相关的集成让我们时刻谨记各种数据的类型罢了。别担心，既然我们可以用类型签名生成文档，也可以用注释来达到区分类型的目的。

JavaScript 也有一些类型检查工具，比如 [Flow](http://flowtype.org/)，或者它的静态类型方言 [TypeScript](http://www.typescriptlang.org/) 。

## 类型约束

签名可以把类型约束为一个特定的接口（interface）。

## 函数式程序

* 通过管道把数据在一系列纯函数间传递的程序。
* 声明式的行为规范
* 控制流（control flow)
* 异常处理（error handling）
* 异步操作（asynchronous actions）
* 状态（state)
* 作用（effects）

# container

```javascript
var Container = function(x) {
  this.__value = x;
}
Container.of = function(x) {
  return new Container(x);
}

Container.prototype.map = function(f) {
  return Container.of(f(this.__value);
}
```

    使用Container.of作为构造器（contructor）代替new。

### functor

> function (arguments) {}unctor是实现了`map`函数并遵守一些特定规则的容器类型。

```js
var io_window = new IO(function (){
  return window;
});

io_window.map(function (win) {
  return win.innerWidth;
});

io_window.map(_.prop('location')).map(_.prop('href')).map(split('/'));

var $ = function (selector) {
  return new IO(function() {
    return document.querySelectorAll(selector);
  });
}

$('#myDiv').map(head).map(function(div) {
  return div.innerHTML;
})

```

    命令模式（command pattern）或者队列（queue）
