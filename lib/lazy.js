const lazy = module.exports = Object.create(null);

lazy.map = function* (a, itr) {
  for (let v of a ) yield itr(v);
};

lazy.filter = function* (a, con) {
  for (let v of a) {
    if (con(v)) yield v;
  }
};
