const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, index) => sum + index, 0);
};

const multiply = function(a,b) {
	return a * b;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
	let factNum = 1;
	for(let i = 1; i < factNum ; i++){
		factNum *= i;
	}
	return factNum; 
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
