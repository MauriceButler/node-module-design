var WalkingAnimal = require('./walkingAnimal');

function Cat(){
    this.noise = 'woof';
}

Cat.prototype = Object.create(WalkingAnimal.prototype);

module.exports = Cat;