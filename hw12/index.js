'use strict'
function Calculator(val){
    this.result = val;
    this.add = (b) => this.result += b;
    this.sub = (b) => this.result -= b;
    this.div = (b) => this.result /= b;
    this.mult = (b) => this.result *= b;
}

const calc = new Calculator(10);


// calc.result; // 10
// calc.add(100); //110
// calc.result; // 110
// calc.div(11); //10
// calc.mult(5); //50
// calc.sub(20); //30
// calc.result; // 30