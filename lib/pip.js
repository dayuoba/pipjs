const coll = require('./colletion.js');
const pip = module.exports = {};

pip.pip = function(obj) {
	let co = new coll(obj);

	return co;
};



