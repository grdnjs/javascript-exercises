/*
Fahrenheit to Celsius: C = (F - 32) × 5/9
Celsius to Fahrenheit: F = C × (9/5) + 32
*/

const convertToCelsius = function(f) {
  let res =  ((f - 32) * (5/9));
  return Math.round(res * 10)/10;
};

const convertToFahrenheit = function(c) {
  let res = (c * (9/5) + 32);
  return Math.round(res * 10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
