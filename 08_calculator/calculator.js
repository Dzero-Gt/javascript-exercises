const add = function(a, b) {
return a + b;
};

const subtract = function(a, b) {
return a - b;
};

const sum = function(a) {
  const sumation = a.reduce((prev, current) => prev + current, 0);
  return sumation;
};



const multiply = function(a) {
  const mult = a.reduce((prev, next) => prev * next, 1);
  return mult;
};

const power = function(a, b) {
	let c = a;
  for (let i = 1; i < b; i++){
    c *= a;
  }
  return c;
};

const factorial = function(a) {
	let c = a;
  for (let i = (a - 1); i > 0; i--){
    c *= i;
  }
  if (c === 0){
    c = 1;
  }
  return c;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
