const noOfFactors = function(num) {
	let count = 0;
	// let iterations = 0;
	for(let i = 1; i <= num; i++) {
		// iterations++;
		if(num % i == 0) {
			count += 1;
		}
	}
	// console.log('Total iterations: ', iterations);
	return count;
};

const noOfFactors2 = function(num) {
	let count = 2;   //  1 and num iteself are feault factors
	// let iterations = 0;
	for(let i = 2; i <= num / 2; i++) {
		// iterations++;
		if(num % i == 0) {
			count += 1;
		}
	}
	// console.log('Total iterations: ', iterations);
	return count;
};


const noOfFactors3 = function(num) {
	let count = 0;
	// let iterations = 0;
	for(let i = 1; i * i <= num; i++) {
		// iterations++;
		if(num % i == 0) {
			if(num / i == i) {
				count++;
			} else {
				count += 2;
			}
		}
	}
	// console.log('Total iterations: ', iterations);
	return count;
};


// console.log(noOfFactors(10000000));   // 1 2 3 4 6 12


const isPrime = function(num) {
	let factCount = noOfFactors(num);
	if(noOfFactors(num) == 2) {
		return true;
	} else {
		return false;
	}
};

console.log(isPrime(10000097));