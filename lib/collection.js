const _ = require('lodash');
const co = module.exports = function(obj) {
  this._data = obj;
  this._chainMethods = [];
  this._done = false;
};
//TODO immutable, lazy

co.prototype.map = function(iterator) {
  let _map = () => {
    this._data = _.map(this._data, iterator);
  };

  _map.name = 'map';
  this._chainMethods.push(_map);

  return this;
};

co.prototype.filter = function(iterator) {
  let _filter = () => {
    this._data = _.filter(this._data, iterator);
  };

  _filter.name = 'filter';
  this._chainMethods.push(_filter);

  return this;
};

co.prototype.reduce = function(iterator, accumulator) {
  let _filter = () => {
    this._data = _.reduce(this._data, iterator, accumulator);
  };

  _filter.name = 'filter';
  this._chainMethods.push(_filter);

  return this;
};

co.prototype.done = function() {
  this._chainMethods.forEach(fn => {
    fn();
  });

  this._done = true;

  return this._data;
};

