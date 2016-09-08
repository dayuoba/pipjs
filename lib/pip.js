const coll = require('./collection.js');
const model = require('./model.js');
const pip = module.exports = {};

pip.pip = function(obj) {
	let co = new coll(obj);

	return co;
};

pip.model = function(obj) {
	let model = new model(obj);

	return model;
};



