// exercise 1
//
// var car = {
//   type: "Honda Civic",
//   position: 0,
//   speed: 60,
//   move: function(){
//     var prev = this.position;
//     this.position = this.position + this.speed;
//     console.log(this.type + " is moving from " + prev + " to " + this.position);
//   }
// }


var moveCar = function(){
  var prev = this.position;
  this.position = this.position + this.speed;
  console.log(this.type + " is moving from " + prev + " to " + this.position);
};

var honda = {
  type: "Honda Civic",
  position: 1,
  speed: 8,
  move: moveCar
};

var chevy = {
  type: "Chevy Silverado",
  position: 1,
  speed: 6,
  move: moveCar
}

var lambo = {
  type: "Lamborghini Murcielago",
  position: 1,
  speed: 20,
  move: moveCar
};

/************decorate pattern*****************/

var reverse_adder = function(vehicle){
  vehicle.reverse = function(){
    var prev = this.position
    this.position = this.position - this.speed
    console.log(this.type + "is moving from" + prev + " to " + this.position)
  }
}
//
// reverse_adder(honda)
// reverse_adder(chevy)
// reverse_adder(lambo)

/*********car factory*************/

var car_factory = function (type, speed) {
  var car = {};
  car.position = 0;
  car.type = type;
  car.speed = speed;

  car.move = function () {
    this.position += this.speed;
  };

  return car;
};

var new_toyota = car_factory('Toyota Hilux', 3);
var new_honda = car_factory('Honda Accord', 5);

/***********excerise 3**************/
var warriorFactory = function(name, weapon){
  var warrior = {};

  warrior.name = name;
  warrior.weapon = weapon;

  warrior.attack = function(){
    return this.name + " attacks with their " + this.weapon + "!";
  };

  warrior.adventure = function(){
    return "Behold, the great warrior " + this.name + ", foremost of all warriors. They draw forth to face the Dragon of Kalamazar. Watch as " + this.attack() + ". Such bravery!";
  };

  return warrior;
};
