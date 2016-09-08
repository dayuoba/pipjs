## pipjs (developing)

  A POP(protocal oriented programming) lib with FP and immutable.

### Demo
  ```
var $ = require('pipjs');

var x = $.pip([0, 2, 3, 4])
	.map(item => {
		return item;
	})
	.filter(Boolean)
	.reduce((prev, curr) => {
		return prev + curr;
	}, 0)
	.done();
  ```
