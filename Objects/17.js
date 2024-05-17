


function hasProperty(obj, property) {
    // Check if the object has the given property
    return obj.hasOwnProperty(property);
  }
  
  let checkObj = {a: 1, b: 2, c: 3};
  console.log(hasProperty(checkObj, 'a')); // Outputs true
  console.log(hasProperty(checkObj, 'd')); // Outputs false
  