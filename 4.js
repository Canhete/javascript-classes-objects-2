class Animal {
    constructor(name, canFly) {
        this.name = name;
        this.canFly = canFly;
    }

    info() {
        console.log(`This animal is called ${this.name}.`);
    }
}

class Bird extends Animal {
    constructor(name, canFly) {
        super(name, canFly);
    }
    
    info() {
        super.info();
        if(this.canFly) {
            console.log(`The ${this.name} can fly.`);
        } else {
            console.log(`The ${this.name} cannot fly.`);
        }
    }

    sing() {
        console.log(`🎵 The ${this.name} is singing!`);
    }
}

const eagle = new Bird('Eagle', true);
const penguin = new Bird('Penguin', false);

eagle.info();
eagle.sing();

penguin.info();
penguin.sing();