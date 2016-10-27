const Util = module.exports = {};
const typeFn = {}.toString;

Util.isString = function(obj) {
  return typeFn.call(obj) === '[object String]';
};

Util.isObject = function(obj) {
  return typeFn.call(obj) === '[object Object]';
};

Util.isArray = function(obj) {
  return Array.isArray
  ? Array.isArray(obj)
  : typeFn.call(obj) === '[object Array]';
};

Util.isFn = function(obj) {
  return typeof obj === 'function';
}
