/* 
Problem 7:
Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.
*/

class Car {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getCarAge(): number {
    const currentYear = new Date().getFullYear();
    const carAge = currentYear - this.year;
    return carAge;
  }
}

/* 

const car = new Car("Honda", "Civic", 2018);
console.log(car.getCarAge()); 

*/

/* 
Note: 
1. Define class named Car with Properties make,model,year
2. use constructor to get the type of the properties
3. In the method getCarAge calculate the age of Car based on Current year use: new Date().getFullYear(); and Return the age

*/
