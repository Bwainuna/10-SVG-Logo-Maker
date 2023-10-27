// This page is used to stylize and generate the logo shapes and text.
class Shape {
  constructor() {
    this.color = "black";
    this.text = ""; // Text to be displayed inside the shape
    this.textFill = "black"; // Default text color
  }

  setColor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  getSVGStyle() {
    return `fill: ${this.color}; stroke: black;`;
  }

  render() {
    return `
      <svg width="300" height="200">
        <circle cx="100" cy="100" r="50" style="${this.getSVGStyle()}" />
        <text x="100" y="100" fill="${this.textFill}" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
      </svg>
    `;
  }
}

class Square extends Shape {
  getSVGStyle() {
    return `fill: ${this.color}; stroke: black;`;
  }

  render() {
    return `
      <svg width="300" height="200">
        <rect x="50" y="50" width="100" height="100" style="${this.getSVGStyle()}" />
        <text x="100" y="100" fill="${this.textFill}" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
      </svg>
    `;
  }
}

class Triangle extends Shape {
  getSVGStyle() {
    return `fill: ${this.color}; stroke: black;`;
  }

  render() {
    return `
      <svg width="300" height="200">
        <polygon points="100,50 150,150 50,150" style="${this.getSVGStyle()}" />
        <text x="100" y="100" fill="${this.textFill}" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
      </svg>
    `;
  }
}

module.exports = { Circle, Square, Triangle };
