/**
 * to be written
 */
const collection = require('./collection.js');
const model = require('./model.js');
const basicMethods = require('./basicMethods.js');
const MODEL_TYPE = require('./modelType.js');

const pip = module.exports = {};

pip.pip = function(obj) {
  let co = new collection(obj);

  return co;
};

pip.model = function(obj) {
  let model = new model(obj);

  return model;
};

pip.MODEL_TYPE = MODEL_TYPE;



