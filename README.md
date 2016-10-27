## pipjs (developing)

  A POP(protocal oriented programming) lib with FP and immutable.

### Demo

**toolchain with lazy and immutable inside**

  ```javascript
const $ = require('pipjs');

const x = $.pip([0, 2, 3, 4])
	.map(item => {
		return item;
	})
	.filter(Boolean)
	.reduce((prev, curr) => {
		return prev + curr;
	}, 0)
	.done();
  ```

**deal with http**

```javascript
const $ = require('pipjs');
const $TYPE = $.MODEL_TYPE;

const people = $.model({
	name: $TYPE.string.isRequired,
	age: $TYPE.number.isRequired,
	sex: $TYPE.string.isRequired,
	habits: $TYPE.arrayString.isRequired,
});

// here is a data where you got from a http request
const u = {
	name: 'lilei',
	age: '19', // wrong type
	sex: 'F',
	habits: ['sing', 12], // wrong mix type array
	foo: 'bar'
};

let [err, data] = people.fit(u);
if (err) {
	return console.log(err);
}
console.log(data); // data is a new set which match people model
```
