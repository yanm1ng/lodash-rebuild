function _pull(array, ...args) {
  var res = [];
  for (let i = 0; i < array.length; i++) {
    var value = array[i];
    if (args.indexOf(value) === -1) {
      res.push(value);
    }
  }
  return res;
}

function _pull(array, ...args) {
  return array.filter(function(val) {
    return args.indexOf(val) === -1;
  })
}

console.log(_pull([1, 2, 3, 4, 1, 2], 1, 2));