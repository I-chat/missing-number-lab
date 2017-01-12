var findMissing = function(arr1,arr2) {
   
    match = false,
    found = 0;

  if(arr1.length === arr2.length) {
    return 0;
  }

  for (var key in arr2) {
   
    for ( var prop in arr1) {
      if (arr2[key] == arr1[prop]){
        match = true;
        break;
      } else {
        match = false;
      }
    }
  if (match === false) {
    found = arr2[key]
  }
  }
 return found;
};


module.exports = findMissing