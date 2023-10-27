// connects all the .js files together
const { getUserInput } = require("./Library/userInput");
const { saveSVGToFile } = require("./Library/fileWriter");
const { Circle, Square, Triangle } = require("./Library/shapes");

// based on the userinput this will set their responses to generate a shape.

(async () => {
  const userInput = await getUserInput();

  let shape;
  switch (userInput.shape) {
    case "Circle":
      shape = new Circle();
      break;
    case "Square":
      shape = new Square();
      break;
    case "Triangle":
      shape = new Triangle();
      break;
  }

  shape.setColor(userInput.shapeColor);
  shape.text = userInput.text; // Set the text input
  shape.textFill = userInput.textColor; // Set the text color

  const svgString = shape.render();

  saveSVGToFile(svgString);

  console.log("Generated logo.svg");
})();
