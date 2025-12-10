# JavaScript exercises - object, classes and inheritance

### Exercise 1 — Vehicle → Car

#### Instructions

1. Create a base class Vehicle with:

    - `constructor(type)`
    - method `move()` → logs *"The {type} is moving."*

2. Create a subclass Car that:

    - calls `super(type)`
    - overrides `move()`
        - first calls `super.move()`
        - then logs *"The {type} is driving fast."*

3. Create a Car object and call `.move()`.

**Expected output pattern**

        The car is moving.
        The car is driving fast.


### Exercise 2 — Person → Student

#### Instructions

1. Create a class Person with:

    - `constructor(name)`
    - method `greet()` → *"Hello, I am {name}."*

2. Create a child class Student:

    - calls `super(name)`
    - overrides `greet()`
      - calls `super.greet()`
      - logs *"I am studying right now."*

3. Instantiate a Student and call `greet()`.

**Expected output pattern**

        Hello, I am Maria.
        I am studying right now.


### Exercise 3 — Appliance → Microwave

#### Instructions

1. Class Appliance:

   - `constructor(brand)`
   - method `turnOn()` → *"The {brand} appliance is now on."*

2. Subclass Microwave:

   - calls `super(brand)`
   - overrides `turnOn()`:
     - `super.turnOn()`
     - logs *"The {brand} microwave is heating."*

3. Create a Microwave and call `turnOn()`.

**Expected output pattern**

        The Samsung appliance is now on.
        The Samsung microwave is heating.


### Exercise 4 – Animal → Bird (new methods + extra property)

### Goal

**Practice:**
- Inheritance
- Overriding
- Adding new methods and extra properties in the subclass.

**Instructions**

1. Create a class Animal:

    - `constructor(name)`
    - method `info()` → logs: *"This animal is called {name}."*

2. Create a subclass Bird:

    - constructor(name, canFly)
      - calls `super(name)`
      - stores `canFly` (true/false)

    - overrides `info()`:
      - first calls `super.info()`
      - then logs:
        - *"It can fly."* if `canFly` is true
        - *"It cannot fly."* if `canFly` is false

    - adds a new method sing():
      - logs: *"🎵 {name} is singing."*

3. Create two birds:

   - One that can fly, e.g., "Eagle"
   - One that cannot fly, e.g., "Penguin"

4. Call `info()` and `sing()` for both.
