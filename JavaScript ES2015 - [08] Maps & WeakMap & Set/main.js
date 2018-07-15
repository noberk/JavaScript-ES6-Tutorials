// const x = {}, a = {}, b = {};
// x[a] = 'a'
// x[b] ='b'

// console.log(x);
// javascript only has one key object

// const a = {}
// const b = { num: 1 }
// const c = {}
// const map = new Map()
// map.set(a, 'a').set(b, 'b').set(a, 'c')


// for (let [key, value] of map.entries()) {
//     console.log(key)
//     console.log(value)

// }

// const ary = [...map]

// console.error(ary);
// console.dir(map)

//Map 被删除引用后还可以找回来
//WeakMap 被删除key后再也不能找回了. 而且key需要是引用类型

let x = {
    a: [1, 2]
}, y = [];

var weakMap = new WeakMap();
weakMap.set(x, 'something1');
weakMap.set(y, 'something2');

y = null;
x = null;

console.log(weakMap.size);







