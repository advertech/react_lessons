

'use strict';
// 
// function car(brand, model) {
//     this.brand = brand;
//     this.model = model;
// }

// car.prototype.showCar = function (name) {
//     console.log('My nane is ' + name +
//         ' my car is ' + this.brand + ' model ' + this.model);
// }

// const Mercedes = new car('mercedews', 'A200')

// Mercedes.showCar('Oleg')

// function ElectroCar(brand, model, reserve) {
//     car.call(this, brand, model);
//     this.reserve = reserve;
// }

// ElectroCar.prototype = Object.create(car.prototype)
// ElectroCar.prototype.constructor = car;

// const tesla = new ElectroCar('Tesla', 'X', 500)

// tesla.showCar('Roman')

//Переписываем на классы верхний код 

// class Car {
//     constructor(brand, model) {
//         this.brand = brand
//         this.model = model
//     }
//     showCar(name) {
//         console.log(`
//                 My name is ${name}
//                 My car is ${this.brand} ${this.model}
//             `)
//     }
// }
// const Mercedes = new Car('mercedews', 'GLS')
// Mercedes.showCar('Dima')

// class ElectroCar extends Car {
//     constructor(brand, model, reserve) {
//         super(brand, model)
//         this.reserve = reserve;
//     }
// }
// const tesla = new ElectroCar('Tesla', 'X', 500)
// tesla.showCar('Sergey')

import render from './render.js'

[1, 'Priver', 3, 5, 66].forEach(render);

