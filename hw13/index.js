// Сеть фастфудов предлагает несколько видов гамбургеров:

// маленький (50 тугриков, 20 калорий)
// средний (75 тугриковб 30 каллорий)
// большой (100 тугриков, 40 калорий)

// Гамбургер может быть с одним из нескольких видов начинок:

// сыром (+ 10 тугриков, + 20 калорий)
// салатом (+ 20 тугриков, + 5 калорий)
// картофелем (+ 15 тугриков, + 10 калорий)
// посыпать приправой (+ 15 тугриков, 0 калорий)
// полить майонезом (+ 20 тугриков, + 5 калорий).

// При этом начинок можно добавить несколько или не быть совсем

// Напишите программу, расчитывающую стоимость и калорийность гамбургера.


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
    this.burger = size;
    this.toppings = [];
    
}

Hamburger.prototype.addTopping = function(topping) {
    this.toppings.push(topping);
    
    this.toppingPrices = this.toppings.flatMap(({price}) => price);
    this.toppingCallories = this.toppings.flatMap(({callories}) => callories);
    this.toppingTotalPrice = this.toppingPrices.reduce((sum, value) => sum + value);
    this.toppingTotalCallories = this.toppingCallories.reduce((sum, value) => sum + value);
}

Hamburger.prototype.getPrice = function() {
    this.totalPrice = this.burger.price + (this.toppingTotalPrice ? this.toppingTotalPrice : 0);
    return this.totalPrice;
}

Hamburger.prototype.getCallories = function() {
    this.totalCallories = this.burger.callories + (this.toppingTotalPrice ? this.toppingTotalPrice : 0);
    return this.totalCallories;
}

const hamburger = new Hamburger(SIZE_SMALL);

console.log('hamburger', hamburger);
hamburger.addTopping(TOPPING_CHEESE);
hamburger.addTopping(TOPPING_SALAD);
hamburger.addTopping(TOPPING_SPICE);



console.log("Price with sauce: " + hamburger.getPrice());
console.log("Callories with sauce: " + hamburger.getCallories());