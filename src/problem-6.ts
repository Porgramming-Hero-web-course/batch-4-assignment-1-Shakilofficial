/* 
Problem 6:
Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.
*/

interface IProfile {
  name: string;
  age: number;
  email: string;
}

function updateProfile(profile: IProfile, update: Partial<IProfile>): IProfile {
  return { ...profile, ...update };
}

// Sample Input 
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };

console.log(updateProfile(myProfile, { age: 26 }));

/* 
Note: 
1. Define an Interface named IProfile with name,age,email as properties.
2. function updateProfile that accepts IProfile as object and partial object of IProfile as update.
3. Use spread to merge the original and updated properties and then return object with including updated property.
*/