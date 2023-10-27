// This page makes sure the logos are rendered to the correct place in the "examples" folder
const fs = require("fs");
const path = require("path");

function saveSVGToFile(svgString) {
  const filePath = path.join(__dirname, "..", "examples", "logo.svg");
  fs.writeFileSync(filePath, svgString);
}

module.exports = { saveSVGToFile };

