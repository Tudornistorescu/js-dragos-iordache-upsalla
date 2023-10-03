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
  accelerate() {
    this.speed++;
  }

  decelerate() {
    thiis.speed--;
  }

  stop() {
    this.speed = 0;

    console.log('Viteza noua este: ${this.speed}.');
  }

  setSpeed(speed) {
    if (speed > this.topSpeed) {
      speed = this.topSpeed;
    }
    this.speed = speed;
  }
}

const audi = new Car('Audi', 'black', 4, 50);
const opel = new Car('Opel', 'red', 4, 3);
