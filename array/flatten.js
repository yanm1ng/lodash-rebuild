function _flatten(array, isDeep = false) {
  var res = [];
  (function baseFlatten(array, isDeep, res) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].constructor === Array) {
        if (isDeep) {
          baseFlatten(array[i], isDeep, res);
        } else {
          for (let j = 0; j < array[i].length; j++) {
            res.push(array[i][j]);
          }
        }
      } else {
        res.push(array[i]);
      }
    }
  }(array, isDeep, res));
  return res;
}

console.log(_flatten([1, 2, 3, [4, 5, [6]]], true));
// [ 1, 2, 3, 4, 5, 6 ]