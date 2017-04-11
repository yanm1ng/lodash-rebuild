function _chunk(array, size = 1) {
  var temp = [];
  var length = array.length / size;
  for(var i = 0; temp.length < length; i++) {
    temp[i] = array.splice(0, size);
  }
  return temp;
}

console.log(_chunk([1, 2, 4, 5, 8], 2));
// [ [ 1, 2 ], [ 4, 5 ], [ 8 ] ]