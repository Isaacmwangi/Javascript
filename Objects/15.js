

function objectToList(obj) {
    // Creating an array to store key-value pairs
    let pairs = [];
    // Loop through all properties in the object
    for (let key in obj) {
      pairs.push([key, obj[key]]);
    }
    return pairs;
  }
  
  console.log(objectToList({a: 1, b: 2, c: 3})); // Output will be: [['a', 1], ['b', 2], ['c', 3]]
  