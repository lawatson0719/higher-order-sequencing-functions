function isPositive (x) {
	if (x > 0) {
		return true;
	} else {
		return false;
	}
}

var arr = [-1, 0, 1, 2, -2];

var result = filter(arr, isPositive); // --> [0, 1, 2]

// Iterate over each item in our array.
for (var i = 0; i < arr.length; i++) {
	// If the test function returns true with the value
	if (isPositive(arr[i])) {
		// Assert that our filtered result should contain the value
		console.assert(result.indexOf(arr[i]) > -1);
	} else {
		// Assert that our filtered result should have omitted the value
		console.assert(result.indexOf(arr[i]) === -1)
	}
}

// arguments
// { 0: 'blh baldsifjalsdkf j(1) idjfsd (2)', 1: 'Amanda', 2: 'get good grades' }
function madlib (string) {
	for (var i = 1; i < arguments.length; i++) {
		string = string.replace('(' + i + ')', arguments[i]);
	}
	return string;
}

madlib('Hey (1)', 'Yo') === 'Hey Yo'




