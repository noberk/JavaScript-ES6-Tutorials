// demo1 socpe
// {
//     var yourName ="ke"
//     let myName ='le';
// }
// console.log(yourName);

//demo2
// {{{{{ let inside = 5} console.log(inside);}}}}

//demo3 
// var a = [];
// for (var i = 0; i < 8; i++) {
//     a[i] = function () {
//         console.log(i);
//     }
// }
// a[1]();
// console.dir(a);


// function testVar() {
//     var a = 30
//     if (true) {
//         var a = 50
//         console.log(a);
//     }
//     console.log(a);
// }

// function testLet() {
//     let a = 30
//     if (true) {
//         let a = 50;
//         console.log(a);
//     }
//     console.log(a)
// }

// testVar();
// testLet()


//😄 const ---------------------------------------- 😄
const PI = 3.1415;
PI // 3.1415

PI = 3;

// TypeError: Assignment to constant variable.



const foo;
// SyntaxError: Missing initializer in const declaration



if (true) {
    const MAX = 5;
}

MAX // Uncaught ReferenceError: MAX is not defined


const colors = [];

colors.push("red");
colors.push("green");
colors.push("blue");

console.log(colors);


colors = "red";  //ERROR

const obj = {}
obj.a = 2;
obj= {};