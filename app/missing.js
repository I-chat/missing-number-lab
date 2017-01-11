var findMissing = function (arr1, arr2) {
  var match = false
  if (arr1.length === arr2.length) {
    return 0
  } else if (arr1.length >= arr2.length) {
    for (var i in arr1) {
      for (var prop in arr2) {
        if (arr1[i] === arr2[prop]) {
          match = true;
        }
      }
      }
  } else if (arr1.length < arr2.length) {
    for (var i in arr2) {
      for (var prop in arr1) {
        if (arr2[i] === arr1[prop]) {
          match = true;
        }
      };
    }
  }
  };

module.exports = findMissing