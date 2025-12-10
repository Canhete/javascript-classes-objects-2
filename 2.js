class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, I am ${this.name}.`);
    }
}

class Student extends Person {
    constructor(name) {
        super(name);
    }

    greet() {
        super.greet();
        console.log(`I am studying right now.`);
    }
}

const student = new Student('Alice');
student.greet();