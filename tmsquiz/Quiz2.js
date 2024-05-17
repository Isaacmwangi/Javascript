let obj = {};
obj[1] = 'One';
obj['1'] = 'String One';

console.log(obj[1]);
console.log(obj['1']);
console.log(obj[1] === obj['1']);



// The output of the following code is:
// String One
// String One
// true

// Explanation:
// The code creates an empty object 'obj'.
// It then assigns two properties to 'obj': obj[1] = 'One' and obj['1'] = 'String One'.
// When accessing obj[1], it returns 'String One' because obj[1] is treated as obj['1'] due to JavaScript's type coercion in property names.
// When accessing obj['1'], it directly returns 'String One'.
// The comparison obj[1] === obj['1'] returns true because both values are 'String One'.

