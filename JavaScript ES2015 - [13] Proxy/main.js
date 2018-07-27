var handle = {
    get: function (target, name) {
        if (name in target)
            return target[name]
        else
            return 'error'
    },
    set: function (target, name,value) {
        if (typeof value === 'number'){
              value*=2;
              target[name]=value;
        }
        else
        target[name]=value;
    }


}

var p = new Proxy({}, handle);

p.age = 2;
p.name = '55';
console.log(p);
