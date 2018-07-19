箭头函数的一些好处
```javascript

const arr = [1,2,3];
const squares= arr.map(x => x*x);

```






function Prefixer(prefix) {
    this.prefix = prefix
}

Prefixer.prototype.prefixArray = function (arr) {
    // let that =this;
    return  arr.map(function(item){
        console.log(this.prefix +" "+ item);
    })
}

let prefix = new Prefixer("Hello");
prefix.prefixArray(['tang','lee']);
