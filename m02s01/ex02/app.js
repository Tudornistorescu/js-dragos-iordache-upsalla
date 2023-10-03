class Vehicle {
  constructor(
    make,
    color,
    wheels,
    speed,
    topSpeed = 160,
    topReverseSpeed = -50,
  ) {
    this.make = make;
    this.color = color;
    this.speed = speed;
    this.wheels = wheels;
    this.topSpeed = topSpeed;
    this.topReverseSpeed = topReverseSpeed;
  }

  displaySpeed() {
<<<<<<< HEAD
    console.log(`Viteza curenta este: ${this.speed}.`);
=======
    console.log(`Viteza curenta este: ${this.speed}`);
>>>>>>> 121fc967390ceca65508113c5f6d6502daded0d6
  }

  accelerate() {
    this.speed++;

    this.displaySpeed();
  }

  decelerate() {
    this.speed--;

    this.displaySpeed();
  }

  setSpeed(speed = 5) {
    if (speed > this.topSpeed) {
      speed = this.topSpeed;
    }

    if (speed < this.topReverseSpeed) {
      speed = this.topReverseSpeed;
    }

    this.speed = speed;
    this.displaySpeed();
  }
}
<<<<<<< HEAD

class Car extends Vehicle {
  constructor(make, color, speed, topSpeed, topReverseSpeed) {
    super(make, color, 4, speed, topSpeed, topReverseSpeed);
  }
}

class Bicycle extends Vehicle {
  constructor(make, color, speed, topSpeed) {
    super(make, color, 2, speed, topSpeed, 0);
  }
}

const bike = new Bicycle('pegas', 'red', 8, 20);
bike.setSpeed('');
=======
>>>>>>> 121fc967390ceca65508113c5f6d6502daded0d6
