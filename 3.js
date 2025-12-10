class Apliance {
    constructor(brand) {
        this.brand = brand;
    }

    turnOn() {
        console.log(`The ${this.brand} appliance is now on.`);
    }
}

class Microwave extends Apliance {
    constructor(brand) {
        super(brand);
    }

    turnOn() {
        super.turnOn();
        console.log(`The ${this.brand} microwave is heating.`);
    }
}

const microwave = new Microwave('Mondial');
microwave.turnOn();