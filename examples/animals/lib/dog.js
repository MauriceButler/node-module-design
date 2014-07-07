var WalkingAnimal = require('./walkingAnimal');

function Dog(){
    this.noise = 'woof';
}

Dog.prototype = Object.create(WalkingAnimal.prototype);
Dog.prototype.constructor = Dog;

module.exports = Dog;