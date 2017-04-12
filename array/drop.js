function _drop(array, num = 1) {
  return array.slice(num, array.length);
}

function _drop(array, num = 1) {
  var res = [];
  for (let i = num; i < array.length; i++) {
    res.push(array[i]);
  }
  return res;
}

console.log(_drop([1 ,2 , 3, 4], 1));
// [2, 3, 4]