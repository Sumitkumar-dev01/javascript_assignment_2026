// Description:Create a simple JavaScript program that defines: A base Shape class that holds common properties (like x, y for position).Specific shape classes (like Circle and Rectangle) that inherit from the Shape class and have their own unique properties (like radius for circles and width, height for rectangles). Each shape should have a displayInfo method to print its properties.


// Base Shape Class
function Shape(x, y) {
  this.x = x;
  this.y = y;
}

Shape.prototype.displayInfo = function() {
 //code here
};

// Circle Class (inherits from Shape)
function Circle(x, y, radius) {
 //code here
}

Circle.prototype = Object.create(Shape.prototype); // Inherit from Shape
Circle.prototype.constructor = Circle;

// Override displayInfo for Circle
Circle.prototype.displayInfo = function() {
 //code here
};

// Rectangle Class (inherits from Shape)
function Rectangle(x, y, width, height) {
  //code here
}

Rectangle.prototype = Object.create(Shape.prototype); // Inherit from Shape
Rectangle.prototype.constructor = Rectangle;

// Override displayInfo for Rectangle
Rectangle.prototype.displayInfo = function() {
  //code here
};

// Usage

// Creating a Circle object
let circle = new Circle(10, 20, 5);
circle.displayInfo(); 
// Expected Output: "Circle at position (10, 20) with radius 5"

// Creating a Rectangle object
let rectangle = new Rectangle(30, 40, 10, 20);
rectangle.displayInfo(); 
// Expected Output: "Rectangle at position (30, 40) with width 10 and height 20"
