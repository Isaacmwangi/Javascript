



function swapKeysAndValues(obj) {
    // Creatinf a new object to store swapped key-value pairs
    let swappedObj = {};
    for (let key in obj)     // Looping through all properties in the object
    {
      swappedObj[obj[key]] = key;
    }
    return swappedObj;
  }
  
  console.log(swapKeysAndValues({a: 'x', b: 'y', c: 'z'})); // Outputs will be: {x: 'a', y: 'b', z: 'c'}
  