var $ = require('./index.js');

var x = $.pip([0, 2, 3, 4])
			.map(item => {
				return item;
			})
			.filter(Boolean)
			.reduce((prev, curr) => {
				return prev + curr;
			}, 0)
			.done();

console.log(x);
