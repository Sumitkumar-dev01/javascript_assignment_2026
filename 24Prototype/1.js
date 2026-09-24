// Description:The Vehicle class will be the base class that holds the common properties of all vehicles (make, model, and year).The Car and Truck classes will inherit from the Vehicle class and extend it by adding their own specific properties (doors for cars, payload capacity for trucks). Both Car and Truck should have their own method to display detailed information about the vehicle, overriding the displayInfo() method from the Vehicle class. 

// Vehicle class (Base class)
function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
Vehicle.prototype.displayInfo = function() {
  ///code here
};
// Car class (inherits from Vehicle)
function Car(make, model, year, doors) {
//code here
}
Car.prototype = Object.create(Vehicle.prototype); // Inherit methods
Car.prototype.constructor = Car;
Car.prototype.displayInfo = function() {
  //code here
};

// Truck class (inherits from Vehicle)
function Truck(make, model, year, payloadCapacity) {
 //code here
}

Truck.prototype = Object.create(Vehicle.prototype);
Truck.prototype.constructor = Truck;

Truck.prototype.displayInfo = function() {
  //code here
};
// Usage
let car = new Car("Toyota", "Corolla", 2020, 4);
let truck = new Truck("Ford", "F-150", 2021, 3);
car.displayInfo(); 