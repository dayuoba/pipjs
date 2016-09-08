const $ = require('./index.js');
const $TYPE = $.MODE_TYPE;

const x = $.pip([0, 2, 3, 4])
			.map(item => {
				return item;
			})
			.filter(Boolean)
			.reduce((prev, curr) => {
				return prev + curr;
			}, 0)
			.done();

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

let [err, data] = people.suit(u);
if (err) {
	return console.log(err);
}
console.log(data); // data is a new set which match people model


