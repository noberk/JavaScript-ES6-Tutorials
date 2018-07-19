//箭头函数语法  对比
let fn1 = function () { }
let fn2 = () => { }

//箭头可以省略参数列表括号  当只有一个参数时
let fa11 = function (a) { }
let fa22 = a => { }

// 代码一行显示的时候 可以省略 {return }；
let fa1 = function () { return 1 }
let fa2 = () => 1;

//多个参数
let fn11 = function (a, b, c) { }
let fn22 = (a, b, c) => { }

// 箭头函数的一些好处

// 代码量的减少
const arr = [1, 2, 3];
const squaresArrowFunction = arr.map(x => x * x);

const squaresTraditionalFunction = arr.map(function (x) { return x * x });



//绑定上下文

function Prefixer(prefix) {
    this.prefix = prefix
}

Prefixer.prototype.prefixArray = function (arr) {
    // let that = this;
    return arr.map(function (item) {
        console.log(this.prefix + " " + item)
    }, this)
}

Prefixer.prototype.prefixArrayArrowFunction = function (arr) {
    return arr.map(item => console.log(this.prefix + ' ' + item))
}

let prefix = new Prefixer("Hello");

prefix.prefixArray(['tang', 'lee']);
prefix.prefixArrayArrowFunction(['tang', 'lee']);



const f = x => ((x % 2) === 0 ? x : 0);


console.log(typeof 1); // SyntaxError
console.log(typeof (() => { })); // OK



const add = (x, y) => x + y;
const plus1 = (y) => add(1, y);

plus1(10);

