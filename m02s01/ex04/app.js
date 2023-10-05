// avem nevoie de o clasa Car
// care atunci cand este instantiata
// si se ruleaza metoda .render()
// sa afiseze in DOM masinuta cu proprietatile specificate
// pozitie (top left) color pentru culoare

// new Car(100, 200, purple)
// left: 100; top: 200; background: purple;

class Car {
  constructor(left = 10, top = 10, color = 'black') {
    this.positionX = left;
    this.positionY = top;
    this.color = color;

    thisframe = document.createElement('div');
    this.frame.classList.add('frame');
    this.frame.style.left = this.positionX + 'px';
    this.frame.style.top = this.positionY + 'px';

    this.car = document.createElement('div');
    this, car.classlList.add('car');
    this.frame.append(this.car);

    this.carTop = document.createElement('div');
    this.carTop.classList.add('car_top');
    this.carTop.style.background = this.color;
    this.car.append(this.carTop);

    this.carBody = document.createElement('div');
    this.carBody.classList.add('car__body');
    1;
    this.carBody.style.backgroundColor = this.color;
    this.carBody.append(this.lightFront);

    this.lightBack = document.createElement('div');
    this.lightBack.classList.add('light', 'light--front');
    this.carBody.append(this.lightBack);

    this.wheelFront = document.createElement('div');
    this.wheelFront.classList.add('wheel', 'car__wheel', 'car__wheel--front');
    this.carBody.append(this.wheelFront);
    this.hubCapFront = document.createElement('div');
    this.hubCapFront.classList.add('wheel__cap');
    this.wheelFront.append(this.hubCapFront);

    this.wheelBack = document.createElement('div');
    this.wheelBack.classList.add('wheel', 'car__wheel', 'car__wheel--back');
    this.carBody.append(this.wheelBack);
    this.hubCapBack = document.createElement('div');
    this.hubCapBack.classList.add('wheel__cap');
    this.wheelBack.append(this.hubCapBack);
  }

  e(elementType = 'div') {
    // wrapper pentru document.create element
    return document.createElement(elementType);
  }

  render() {
    // only touch the DOM at the last moment
    document.body.append(this.frame);
  }
}

const purpleCar = new Car(100, 200, 'purple').render();
// new Date().getFullYear().setFullYear;
