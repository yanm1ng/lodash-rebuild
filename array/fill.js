function _fill(array, val, start = 0, end = array.length) {
  for (let i = start; i < end; i++) {
    array[i] = val;
  }
  return array;
}

console.log(_fill([1, 2, 3, 4], '*', 1, 2));
// [ 1, '*', 3, 4 ]