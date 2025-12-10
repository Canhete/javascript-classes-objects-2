class Vehicle {
    constructor(type){
        this.type = type;
    }

    move(){
        console.log(`The ${this.type} is moving.`);
    }
}

class Car extends Vehicle {
    constructor(type){
        super(type);
    }

    move(){
        super.move();
        console.log(`The ${this.type} is driving fast.`);
    }
}

const myCar = new Car('Fusca');
myCar.move();