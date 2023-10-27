// This page is an inquirer page used to ask the user various prompts to determine how the logo will be rendered based on their prompts.
const inquirer = require("inquirer");

function getUserInput() {
  return inquirer.prompt([
    {
      type: "input",
      name: "text",
      message: "Enter up to three characters for the text:",
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter the text color:",
    },
    {
      type: "list",
      name: "shape",
      message: "Choose a shape:",
      choices: ["Circle", "Square", "Triangle"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter a shape color:",
    },
  ]);
}

module.exports = { getUserInput };
