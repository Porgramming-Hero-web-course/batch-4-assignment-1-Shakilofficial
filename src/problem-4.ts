/* 
Problem 4:
Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.
*/

type TCircle = {
  shape: "circle";
  radius: number;
};

type TRectangle = {
  shape: "rectangle";
  height: number;
  width: number;
};

type TShape = TCircle | TRectangle;

function calculateShapeArea(shape: TShape): number {
  if (shape.shape === "circle") {
    return Math.PI * (shape.radius * shape.radius);
  }
  if (shape.shape === "rectangle") {
    return shape.width * shape.width;
  }
  return 0;
}


const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});

/* 
Note: 
1. Define Types TCircle and TRectangle shapes with their properties
2. TShape is union type for Circle and Rectangle
3. function calculateShapeArea calculate the area based on shape type
4. If the type of shape is circle then Apply formula : π * radius^2
5. If the type of shape is rectangle then Apply formula : height * width
6. Otherwise it return 0; whether shape type is unrecognized.

*/