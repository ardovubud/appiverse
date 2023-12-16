/*
* Filename: sophisticated-code.js
* Description: A sophisticated and complex JavaScript code example
* Author: Your Name
* Date: Current Date
*/

// Utility function to generate a random number between a given range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Enum for the possible colors in a rainbow
const RainbowColors = {
  RED: 'red',
  ORANGE: 'orange',
  YELLOW: 'yellow',
  GREEN: 'green',
  BLUE: 'blue',
  INDIGO: 'indigo',
  VIOLET: 'violet',
};

// Prototype for a geometric shape
class Shape {
  constructor(color) {
    this.color = color;
  }

  draw() {
    console.log(`Drawing a shape with ${this.color} color.`);
  }
}

// Class representing a Circle
class Circle extends Shape {
  constructor(x, y, radius, color) {
    super(color);
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  draw() {
    console.log(`Drawing a circle with ${this.color} color at (${this.x}, ${this.y}) with a radius of ${this.radius}.`);
  }
}

// Function to generate a random circle
function generateRandomCircle() {
  const x = getRandomNumber(1, 100);
  const y = getRandomNumber(1, 100);
  const radius = getRandomNumber(5, 20);
  const color = Object.values(RainbowColors)[getRandomNumber(0, Object.keys(RainbowColors).length - 1)];
  return new Circle(x, y, radius, color);
}

// Main program
function main() {
  const circles = [];
  
  for (let i = 0; i < 10; i++) {
    const circle = generateRandomCircle();
    circles.push(circle);
  }

  console.log('Generated Circles:');
  circles.forEach((circle, index) => {
    console.log(`Circle ${index + 1}:`);
    circle.draw();
  });
}

// Execute the main program
main();