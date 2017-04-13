function _intersection() {
  var map = new Map();
  var res = [];

  for (let i = 0; i < arguments.length; i++) {
    var arr = arguments[i];
    if (arr instanceof Array && arr.length > 0) {
      for (let j = 0; j < arr.length; j++) {
        var val = arr[j];
        if (!map.get(val)) {
          map.set(val, 1);
        } else {
          var count = map.get(val);
          map.set(val, ++count);
        }
      }
    }
  }

  var entries = map.entries();
  for (let [key, value] of entries) {
    if (value == arguments.length) {
      res.push(key);
    }
  }
  return res;
}

console.log(_intersection([1, 2], [4, 2], [2, 1]));