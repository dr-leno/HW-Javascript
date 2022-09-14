'use strict'
function createCalculator(val){
    return {
        add: (b) => val += b,
        sub: (b) => val -= b,
        div: (b) => val /= b,
        mult: (b) => val *= b,
        set: (b) => val = b,
    };
}

const calc = createCalculator(100);