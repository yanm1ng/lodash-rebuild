function _indexOf(array, val, from) {
  var index = -1;
  var len = array.length;
  from = from < 0 ? Math.abs(from) : from;
  
  for (let i = from; i < len; i++) {
    if (array[i] === val) {
      index = i;
    }
  }
  return index;
}

console.log(_indexOf([1, 2, 1, 2], 2, -1));
// 3