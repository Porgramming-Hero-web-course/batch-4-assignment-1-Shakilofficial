/* 
Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.

Hints: Use keyof
*/

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));

/* 
Note:
1. The getProperty function is a Generic function that retrieves the value from an object.
2. K is extends the Property of the Object and "keyof" ensures that it exist on object T.

*/
