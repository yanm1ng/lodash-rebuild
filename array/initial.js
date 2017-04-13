function _initial(array) {
  var len = array.length;
  array.length = len - 1;
  return array;
}

function _initial(array) {
  var res = [];
  for (let i = 0; i < array.length - 1; i++) {
    res.push(array[i]);
  }
  return res;
}

function _initial(array) {
  return array.slice(0, array.length - 1);
}

console.log(_initial([1, 2, 3]));