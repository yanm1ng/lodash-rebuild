function _compact(array) {
  function f(element) {
    if (element !== false || element !== null || element !== 0 || element !== "" || element !== undefined || element !== NaN) {
      return element;
    }
  }
  var filtered = array.filter(f);
  return filtered;
}

console.log(_compact([0, 1, false, 2, '', 3]));
// [1, 2, 3]