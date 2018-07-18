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
