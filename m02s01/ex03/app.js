<<<<<<< HEAD
// avem nevoie de o clasa Car
// care atunci cand este instantiata
// si se ruleaza metoda .render()
// sa afiseze in DOM masinuta cu proprietatile specificate
// pozitie (top left) color pentru culoare
=======
const Car = {
  make: '',
  color: '',
  wheels: 0,
  speed: 0,

  displaySpeed: function () {
    console.log(`Viteza curenta este: ${this.speed}.`);
  },

  accelerate: function () {
    this.speed++;

    this.displaySpeed();
  },

  decelerate: function () {
    this.speed--;

    this.displaySpeed();
  },
};

const audi = Object.create(Car);
audi.make = 'Audi';
audi.color = 'black';
audi.wheels = 4;
audi.speed = 0;

console.log(audi);
>>>>>>> 059536698267e1b827735e9f28821f8fa373b1ff
