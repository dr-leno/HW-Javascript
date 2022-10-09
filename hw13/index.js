'use strict'
const SIZE_SMALL = { price: 50, callories: 20 };
const SIZE_MEDIUM = { price: 75, callories: 30 };
const SIZE_BIG = { price: 100, callories: 40 };


const TOPPING_CHEESE = { price: 10, callories: 20 };
const TOPPING_SALAD = { price: 20, callories: 5 };
const TOPPING_POTATO = { price: 15, callories: 10 };
const TOPPING_SPICE = { price: 15, callories: 0 };
const TOPPING_MAYO = { price: 20, callories: 5 };

function Hamburger(size) {
    this.burger = {...size};
}

Hamburger.prototype.addTopping = function(topping) {

    this.burger.price += topping.price;
    this.burger.callories += topping.callories;
}

Hamburger.prototype.getPrice = function() {
    return this.burger.price;
}

Hamburger.prototype.getCallories = function() {
    return this.burger.callories;
}

// вариант рабочий, через него я поняла, что в конечном итоге все равно меняю .price/ .callories бургера
// function Hamburger(size) {
//     this.burger = size;
//     this.toppings = [];
// }

// Hamburger.prototype.addTopping = function(topping) {
//     this.toppings.push(topping);
    
//     // если код через копипасту - это не ок, а как сделать как надо мозг уже не понимает :(

//     this.toppingPrices = this.toppings.flatMap(({price}) => price);
//     this.toppingCallories = this.toppings.flatMap(({callories}) => callories);
//     this.toppingTotalPrice = this.toppingPrices.reduce((sum, value) => sum + value);
//     this.toppingTotalCallories = this.toppingCallories.reduce((sum, value) => sum + value);
// }

// Hamburger.prototype.getPrice = function() {
//     this.totalPrice = this.burger.price + (this.toppingTotalPrice ? this.toppingTotalPrice : 0);
//     return this.totalPrice;
// }

// Hamburger.prototype.getCallories = function() {
//     this.totalCallories = this.burger.callories + (this.toppingTotalPrice ? this.toppingTotalPrice : 0);
//     return this.totalCallories;
// } 

const hamburger = new Hamburger(SIZE_SMALL);

hamburger.addTopping(TOPPING_CHEESE);
hamburger.addTopping(TOPPING_SALAD);
hamburger.addTopping(TOPPING_SPICE);

console.log("Price with sauce: " + hamburger.getPrice());
console.log("Callories with sauce: " + hamburger.getCallories());