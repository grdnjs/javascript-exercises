const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
  return x - y;
};

const sum = function(arr) {
  if (arr.length == 0) return 0;
  return arr.reduce((total, n) => n + total);
};

const multiply = function(arr) {
  return arr.reduce((total, n) => n * total);
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(n) {
  if (n <= 0) return 1;
  return n * factorial(n-1);
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
