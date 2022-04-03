//Part 1

class Vehicle {
  constructor(make, model, yaer) {
    this.make = make;
    this.model = model;
    this.yaer = yaer;
  }
  honk() {
    return "Beep";
  }

  toString() {
    return `This vehicle is a ${this.make}, ${this.model}, ${this.yaer}`;
  }
}

//Part 2

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }
}

//Part 3

class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }
  revEngine() {
    return "VROOM!!!";
  }
}

//Part 4

class Garage {
  constructor(capacity) {
    this.vehicles = [];
    this.capacity = capacity;
  }
  add(car) {
    if (!(car instanceof Vehicle)) {
      return "Only vehicles are allowed in here!";
    }
    if (this.vehicles.length < this.capacity) {
      this.vehicles.push(car);
      return "New Car added!";
    } else {
      return "Soory We're full";
    }
  }
}
