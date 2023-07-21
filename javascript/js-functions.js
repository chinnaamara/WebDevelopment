// var add = function() {
// 	const result = 5 + 4;
// 	// return result;
// };

// function addition() {
// 	const result = 5 + 4;
// 	return result;
// }

// var sum = add();
// var sum1 = addition();
// console.log('sum: ', sum);
// console.log('sum1: ', sum1);


// var add = function(p1, p2) {
// 	const result = p1 + p2;
// 	console.log('result is ', result);
// 	// return result;
// }

// var sum = add('hello ', 8);
// console.log('sum: ', sum);


const sayHello = function(name1, name2) {
	console.log(`Hello ${name1} and ${name2}`);
};


// sayHello('Harsha');

// const add = function(a, b) {
// 	return a + b;
// };

// const sum = add(5, 7);

// console.log(sum);

// const mul = function(a, b) {
// 	const val = a * b;
// 	console.log('multiplication is: ', val);
// 	return val;
// };

// const res = mul(5, 7);

// console.log('res: ', res);


const isEven = function(num) {
	if(num % 2 == 0) {
		return true;
	} else {
		return false;
	}
	console.log('after if else block');
};

const isEven2 = function(num) {
	if(num % 2 == 0) {
		return 'Even number';
	}
	return 'Odd Number';
};

const isEven3 = function(num) {
	return num % 2 == 0;
}

const isEven4 = function(num) {
	return num % 2 == 0 ? 'Even Number' : 'Odd Number';
}

console.log('result: ', isEven4(17));

// Factors 

// what are the factors of 10? 1, 2, 5, 10



