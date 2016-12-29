var _ = require('underscore');

// 集合
// each
_.each([1,2,3], console.log);

// map
console.log(_.map([1,2,3], function(num){
  return num * 3;
}));

// reduce
// reduceRight
// find
var even = _.find([1,2,3,4,5,6], function(num){
  return num%2 == 0;
});
// ===>2

// filter
var evens = _.find([1,2,3,4,5,6], function(num){
  return num%2 == 0;
});
// ===> [2,4,6]

// where
// findWhere

// reject 结果同filter相反

// every
// some
// contains  别名：include
// invoke
// pluck  //萃取对象数组中的某属性值，返回一个数组
var stooges = [
  {name:'moe', age:40},
  {name:'larry', age:50},
  {name:'curly',age:60}
];
_.pluck(stooges, 'name');
// ==> ['moe', 'larry', 'curly']

// max
// min
// sortBy
// groupBy

// indexBy
// countBy

// shuffle //返回一个随机乱序的list副本
// sample  // 从list中返回n个随机元素，否则返回一个单一的随机项

// toArray
// size

// partition  //拆分一个数组为两个数组，第一个数组其元素都满足predicate迭代函数，第二个的所有元素均不能满足preciddate迭代函数。


///// 数组函数

// first
// initial // 返回数组中除最后一个元素外的其他全部元素
// last
// rest // 返回数组中除第一个元素外的其他全部元素，有index参数时返回从index开始剩余的元素

// compact // 返回一个除去所有fasle值的array副本 false\null\“”\udefined\NaN都是fasle值
// flatten // 将一个嵌套多层的数组array转换为只有一层的数组

// without // 返回一个删除所有values值后的array副本
// union // 并集
// intersection // 交集
// difference // 类似于without,返回的值来自array参数数组，并且不存在于other数组
// uniq  // 去重
// zip // 相应位置的值合并
// object // 将数组转换为对象
// indexOf // 索引值
// lastIndeOf // 最后开始的索引值位置
// sortedIndex  // 使用二分查找确定value在list中的位置序号
var  stooges = [
  {name:'moe',age:40},
  {name:'curly', age:60}
];
_.sortedIndex(stooges, {name:'larry', name:50}, 'age'); // ===>1

// range  // _.range([start], stop, [step])

//// 与函数有关的函数
// bind
// bindAll
// partial  // 局部应用一个函数填充在任意个数的参数 ，不改变其动态this值

var add = function(a,b){return a+b;};
add5 = _.partial(add, 5);
add5(10);
// ==> 15

// memoize // 可以缓存某函数的计算结果
var fibnoacci = _.memoize(function(n){
  return n<2?n:fibnoacci(n -1) + fibnoacci(n-2);
});

// delay // 类似setTimeout
var log = _.bind(console.log, console);
_.delay(log, 1000, 'logged later');
// ===> 'logged later'

// defer // 延迟调用function直到调用栈清空为止，类似使用延时为0的setTimeout方法
// throttle // 创建并返回一个像节流阀一样的函数，当重复调用函数时，最多每隔wait毫秒调用一次该函数。

// var throttled = _.throttled(updatePosition, 100);
// $(window).scroll(throttled);

// debounce // 返回function函数的防反跳版本，将延迟函数的执行（真正的执行）在函数最后一次调用时刻的wait毫秒之后，对于必须在一些输入停止到达之后
        // 执行的行为有帮助。例如：渲染一个Markdown格式的评论预览，当窗口停止改变大小之后重新计算布局。

// once // 创建一个只能调用一次的函数

// after // 创建一个函数，在运行count次后有效果，在处理同步异步请求返回结果时，如果要确保同组里所有异步请求完成之后才执行这个函数，这将非常有用。

// var renderNotes= _.after(notes.length, render);
// _.each(notes, function(note) {
//   note.asyncSave({success:renderNotes});
// });
// renderNotes is run once, after all notes have saved.

// before // 创建一个函数，调用不超过count次，当count已经达到时，最后一个函数调用的结果是被记住并返回

// wrap // 封装
// negate // 返回一个新的predicate函数的否定版本
var isFalsy = _.negate(Boolean);
_.find([-2,-1,0,1,2], isFalsy);
// => 0

// compose // 组合复合函数 一个函数执行完之后把返回结果作为参数赋给下一个函数来执行。 函数执行从右到左

////////////  对象函数（Object Functions）

// keys // 获取object对象所有的属性名称
// values // 返回object对象所有的属性值
// pairs // 把一个对象转变为一个[key, value]形式的数组
// invert // 键值对换 必须保证值唯一并且可以序列号城字符串
_.invert({Moe: 'Moses', Larry: 'Louis', Curly:'Jerome'});
// ====> {Moses: 'Moe', Louis:'Larry', Jerome: 'Curly'}

console.dir(_.functions(_));
// functions // 别名： methods 返回一个对象里所有的方法名，而且是已经排序的

// extend // 复制source对象中的所有属性覆盖到destination对象上，并返回destination对象，复制是按顺序的，重复会覆盖
_.extend({name:'moe'}, {age:50});
// ===>{name:'moe', age:50}

// pick // 返回一个object副本，只过滤出keys（有效的键组成的数组）参数指定的属性值或者接受一个判断函数，指定挑选哪个key

// omit // 返回一个object副本，只过滤出除去keys（有效的键组成的数组）参数指定的属性值或者接受一个判断函数指定忽略哪个可以

// defaults // 用defaults对象填充object中的undefined属性，并且返回这个object。

// clone // 创建一个浅拷贝的克隆object.任何嵌套的对象或数组都通过引用拷贝，不会复制。

// tap // 用object作为参数来调用函数的interceptor，然后返回object。

// has // 对象是否包含给定的键 等同于object.hasOwnProptery(key)

// property // 返回一个函数，这个函数返回任何传入的对象的key属性

// matches // 断言函数 这个函数给一个断言来辨别给定的对象是否匹配attrs指定键/值属性

// isEqual
// isEmpty
// isElement
// isArray
// isObject
// isArguments
// isFunction
// isString
// isNumber
// isFinite // 如果object是一个有限的数字，返回true
// isBoolean
// isDate
// isRegExp
// isNaN // 和原生的isNaN函数不一样，如果变量是undefined，原生isNaN函数也会返回true
// isNull
// isUndefined


////////////实用功能 工具函数（Utility Functions)

// noConflict // 放弃Underscore的控制变量“_”,返回Underscore对象的引用。

var underscore = _.noConflict();

// identity // 返回与传入参数相等的值，相当于f(x) = x
// constant // 创建一个函数返回相同的值用来作为_.constant的参数
// noop // 返回udefined，不论传递给它的是什么参数，可以用作默认可选的回调参数。
// obj.initialize = _.noop;
// times  // 调用给定的迭代函数n次，每一次调用iteratee传递index参数。生成一个返回值的数组。

// _(3).times(function(n){genie.grantWishNumber(n);});

// random // 返回一个min和max之间的随机整数。如果只传递一个参数，将返回0和这个参数之间的整数。
// _.random(0, 100);   // ===> 42

// mixin // 允许用您自己的实用程序函数扩展Underscore.传递一个{name: function}定义的哈希添加到Underscore对象，以及面向对象封装。

// _.mixin({
//   capitalize: function(string){
//     return string.chatAt(0).toUpperCase() + string.substring(1).toLowCase();
//   }
// });

// ("fabio").capitalize();  // ===> "Fabio"

// iteratee // 一个重要的内部函数用来生成可应用到集合中每个元素的回调，返回想要的结果 - 无论是等式，任意回调，属性匹配或属性访问。
// 通过_.iteratee 转换判断的Underscore方法的完整列表是map、find、filter、reject、every、some、max、min、sortBy、groupBy、
// indexBy、countBy、sortedIndex、partition和uique。

var stooges = [
    {name: 'curly', age:25}, {name: 'moe', age:21},
    {name:'larry', age:23}
];
_.map(stooges, _.iteratee('age')); // ===> [25, 21, 23]

// uniqueId  _.uniqueId('contact_')// 为需要的客户端模型或DOM元素生成一个全局唯一的id。如果prefix参数存在，id将附加给它。
_.uniqueId('contact_');   // ===> 'contact_104'

// escape // 转义HTML字符串，替换&，<, >, ", ', /字符
// unescape // 和escape相反，转义HTML字符串 替换&， &lt; &gt; &quot; &#96; &#x2F字符

// result // 如果对象object中的属性property是函数，则调用它，否则返回它
// now // 一个优化的方式来获得一个当前时间的整数时间戳，可用于实现定时/动画功能
// template // 将javascript模板编译成为可以用于页面呈现的函数，对于通过json数据源生成复杂的HTMLbing呈现出来的操作非常有用。
        // 模块函数可以使用<%= ... %>插入变量，也可以用<% ...%>执行任意的javascript
        // 代码,如果需要HTML转义，使用<%- ...%>
var compiled = _.template("hello: <%= name %>");
compiled({name: 'moe'}); // ==> 'hello moe'

var template = _.template("<b><%- value %></b>");
template({value: '<script>'});
// ====> '<b> &lt;script&gt; </b>'

///////////链式语法（Chaining）///////////

_.map([1,2,3], function(n){
  return n * 2;
});

_([1,2,3]).map(function(n){
  return n * 2;
});

var lyrics = [
  {line: 1, words: "I'm a lumberjack and I'm okay"},
  {line: 2, words: "I sleep all night and I work all day"},
  {line: 3, words: "He's a lumberjack and he's okay"},
  {line: 4, words: "He sleeps all night and he works all day"}
];

_.chain(lyrics)
  .map(function(line){return line.words.split(' ');})
  .flatten()
  .reduce(function(counts, word){
    counts[word] = (counts[word] || 0) + 1;
    return counts;
  }, {})
  .value();

// 返回结果
// ==> {lumberjack: 2, all:4, night:2}

value // _(obj).value()  获取封装对象的最终值
