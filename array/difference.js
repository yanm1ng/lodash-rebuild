function _difference(array, filter) {
  var map = new Map();
  var result = [];

  filter.forEach(function(e) {
    map.set(e, 1);
  });

  array.forEach(function(e) {
    if (!map.get(e)) {
      result.push(e);
    }
  });

  return result;
}

console.log(_difference([1, '2', 3], [4, 2, 1]));
// [ '2', 3 ]