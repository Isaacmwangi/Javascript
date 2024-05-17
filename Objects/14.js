

function all_property_values(obj) {
    let values = [];  // an array to store property values
 
    for (let prop in obj)   // Looping through all properties in the object

    {
      values.push(obj[prop]);
    }
    return values;
  }
    console.log(all_property_values(Array));
  