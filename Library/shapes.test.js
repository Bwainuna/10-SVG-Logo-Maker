// This page is used to make sure that all of the shapes are rendering correctly from the shapes.js page
const { Circle, Square, Triangle } = require("./shapes");

test("Circle renders correctly", () => {
  const circle = new Circle();
  circle.setColor("blue");
  expect(circle.render()).toEqual('<circle cx="100" cy="100" r="50" style="fill: blue; stroke: black;" />');
});

test("Square renders correctly", () => {
  const square = new Square();
  square.setColor("red");
  expect(square.render()).toEqual('<rect x="50" y="50" width="100" height="100" style="fill: red; stroke: black;" />');
});

test("Triangle renders correctly", () => {
  const triangle = new Triangle();
  triangle.setColor("green");
  expect(triangle.render()).toEqual('<polygon points="100,50 150,150 50,150" style="fill: green; stroke: black;" />');
});
