var WalkingAnimal = require('./walkingAnimal');

function Cat(){
    this.noise = 'woof';
}

Cat.prototype = Object.create(WalkingAnimal.prototype);
Cat.prototype.constructor = Cat;

module.exports = Cat;