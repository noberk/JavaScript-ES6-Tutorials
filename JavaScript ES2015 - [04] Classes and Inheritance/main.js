"use strict"

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    register() {
        console.log(this.username + " is now registerd !");

    }
    static getMembers() {
        console.log("there's 100 members!");

    }
}

let bob = new User("bob", "bob@email", "*****");
let lily = new User("lily", 'lily@email', '**&&');



// bob.register();
// lily.register();

// User.getMembers();

class Member extends User {
    constructor(username, email, password, memberPackage) {
        super(username, email, password);
        this.memberPackage = memberPackage;
    }

    getPackage() {
        console.log(this.username + " is subscribed to the " + this.memberPackage +" package ");
    }
}


let linda = new Member('linda', 'linda@email.com', '0129321', "standard");

linda.getPackage();