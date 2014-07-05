var WalkingAnimal = require('./walkingAnimal');

function Dog(){
    this.noise = 'woof';
}

Dog.prototype = Object.create(WalkingAnimal.prototype);

module.exports = Dog;