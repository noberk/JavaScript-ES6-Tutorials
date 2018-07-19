// 数组的解构赋值

let a = 1
let b = 2
let c = 3

let [x, y, z] = [1, 2, 3];
// 成功

// 失败 undefinded
let [x1, x2] = [1];



let [, , third] = ["first", "second", "third"];
third // "third"


let [x, , y] = [1, 2, 3];
x // 1
y // 3

let [head, ...tail] = [1, 2, 3, 4];
head // 1
tail // [2, 3, 4]

let [x, y, ...z] = ['a'];
x // "a"
y // undefined
z // []


let [a, [b], d] = [1, [2, 3], 4];    //1, 2, 4
let [a, b, d] = [1, [2, 3], 4];    //1, [2,3], 4



// 解构不是数组的话 
let [foo] = 1;
let [foo] = false;
let [foo] = NaN;
let [foo] = undefined;
let [foo] = null;
let [foo] = {};


//set也可以结构
let [x, y, z] = new Set(['a', 'b', 'c']);
x // "a"



function* fibs() {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

let [first, second, third, fourth, fifth, sixth] = fibs();
sixth // 5
//   上面代码中，fibs是一个 Generator 函数
//原生具有 Iterator 接口。解构赋值会依次从这个接口获取值



// 默认值
// 解构赋值允许指定默认值。

let [foo = true] = [];
foo // true

let [x, y = 'b'] = ['a']; // x='a', y='b'
let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'
// 注意，ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，只有当一个数组成员严格等于undefined，默认值才会生效。

let [x = 1] = [undefined];
x // 1

let [x = 1] = [null];
x // null
// 上面代码中，如果一个数组成员是null，默认值就不会生效，因为null不严格等于undefined。

// 如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值。

function f() {
    console.log('aaa');
}

let [x = f()] = [1];
// 上面代码中，因为x能取到值，所以函数f根本不会执行。上面的代码其实等价于下面的代码。

let x;
if ([1][0] === undefined) {
    x = f();
} else {
    x = [1][0];
}
// 默认值可以引用解构赋值的其他变量，但该变量必须已经声明。

let [x = 1, y = x] = [];     // x=1; y=1
let [x = 1, y = x] = [2];    // x=2; y=2
let [x = 1, y = x] = [1, 2]; // x=1; y=2
let [x = y, y = 1] = [];     // ReferenceError: y is not defined
// 上面最后一个表达式之所以会报错，是因为x用y做默认值时，y还没有声明。




