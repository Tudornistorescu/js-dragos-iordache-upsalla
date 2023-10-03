// syntatic sugar
// js nu are clase
class Car {
  // notatia 1
  topSpeed = 160;
  topReverseSpeed = -50;

  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
  }
<<<<<<< HEAD
=======

>>>>>>> 121fc967390ceca65508113c5f6d6502daded0d6
  accelerate() {
    this.speed++;
  }

  decelerate() {
<<<<<<< HEAD
    thiis.speed--;
=======
    this.speed--;
>>>>>>> 121fc967390ceca65508113c5f6d6502daded0d6
  }

  stop() {
    this.speed = 0;

<<<<<<< HEAD
    console.log('Viteza noua este: ${this.speed}.');
=======
    console.log(`Viteza noua este: ${this.speed}.`);
>>>>>>> 121fc967390ceca65508113c5f6d6502daded0d6
  }

  setSpeed(speed) {
    if (speed > this.topSpeed) {
      speed = this.topSpeed;
    }
<<<<<<< HEAD
=======

    if (speed < this.topReverseSpeed) {
      speed = this.topReverseSpeed;
    }

>>>>>>> 121fc967390ceca65508113c5f6d6502daded0d6
    this.speed = speed;
  }
}

const audi = new Car('Audi', 'black', 4, 50);
const opel = new Car('Opel', 'red', 4, 3);
<<<<<<< HEAD
=======

const cars = [audi, opel];
// sa vedem bucla pe tema
>>>>>>> 121fc967390ceca65508113c5f6d6502daded0d6
