const convertToCelsius = function(temp) {
  tempF = (temp - 32) * (5/9);
  return Math.round(tempF * 10)/10;
};

const convertToFahrenheit = function(temp) {
  tempC = (temp * (9/5) + 32);
  return Math.round(tempC * 10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
