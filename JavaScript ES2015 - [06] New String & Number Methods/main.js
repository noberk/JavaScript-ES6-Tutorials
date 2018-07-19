

// ES6 加强了对 Unicode 的支持，并且扩展了字符串对象。

"\u0061"
// "a"
"\uD842\uDFB7"
// "𠮷"

"\u20BB7"
// " 7"

"\u{20BB7}"
// "𠮷"

"\u{41}\u{42}\u{43}"
// "ABC"


//字符串遍历

for (let codePoint of 'foo') {
    console.log(codePoint)
}

//重复
'ABC'.repeat(10);


//补充头部
"x".padStart(5,'ab');
"ad".padStart(5,'op');

//补充尾部
"x".padEnd(5,22);
'x'.padEnd(5, 'ab') // 'xabab'


let theString = 'Hello , my name is brad  and I love Javascript';
startsWith();
endsWith();
includes();

console.log(theString.startsWith('H'));
console.log(theString.endsWith('Javascript'));
console.log(theString.includes('H'));





//Hex
//console.log(0xff);

//Binary
//console.log(0b101010101001001010);

//Octal
//console.log(0o1747264);

// console.log(Number.isFinite(0));
// console.log(Number.isFinite(Infinity));
// console.log(Number.isFinite(NaN));

// console.log(Number.isNaN(NaN));

// console.log(Number.isInteger(1));
console.log(Number.isNaN("@1123123xasd"));
console.log(isNaN("@1123123xasd"));