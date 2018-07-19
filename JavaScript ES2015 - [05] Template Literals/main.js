let name = "bob";

function makeUppercase(word) {
        return word.toUpperCase()
}

const template = `<h1>${makeUppercase('Hello')} ${name}</h1>
<p>this is a simple template </p>`;



document.getElementById('template').innerHTML = template;


// 字符串生成😄

const data = [
        { first: '<azb>', last: 'wes' },
        { first: 'ags', last: '<zmg>' },
];

const tmpl = addrs => `
  <table>
  ${addrs.map(addr => `
    <tr><td>${addr.first}</td></tr>
    <tr><td>${addr.last}</td></tr>
  `).join('')}
  </table>
`;

console.log(tmpl(data))

// 标签模板 😄


var ABC = Symbol`ABC`;



let a = 5;
let b = 10;
function tag(stringArr, value1, value2) {
        console.log(stringArr);
        console.log(value1);
        console.log(value2);       
}
// 等同于
// tag(['Hello ', ' world ', ''], 15, 50);
 tag`A${a}c${b}b`;