//参数默认值

function greet($greeting = "hello world ") {
    console.log($greeting);

}

greet();




//spread operator
//  copy this array
//  let x =[1,2,3,4];

//  let y = x;

// x[0]=5
//  console.log(y);


let x = [1, 2, 3, 4];
let y = [5, 6, 7];

// [...x, ...y] = [1, 2, 3, 4, 5, 6, 7]

// console.log([...x,...y]);
console.log(x.concat(y));


console.log(Math.hypot(...x))
console.log(Math.min(...x))