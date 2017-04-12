function _dropRight(array, num = 1) {
  return array.slice(0, array.length - num);
}

function _dropRight(array, num = 1) {
  var res = [];
  for (let i = 0; i < array.length - num; i++) {
    res.push(array[i]);
  }
  return res;
}

console.log(_dropRight([1, 2, 3]));
// [1, 2]