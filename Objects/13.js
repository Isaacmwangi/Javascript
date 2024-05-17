


function all_properties(obj) {
    let props = []; ///this my array to store names
    
    for (let prop in obj) // Loop through all properties, including inherited ones

    {
      props.push(prop);
    }
    return props;
  }
  
  console.log(all_properties(Array)); // to display the outputs of all property names of the Array object
  