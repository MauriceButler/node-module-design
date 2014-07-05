var Animal = require('./animal');

function WalkingAnimal(){
}

WalkingAnimal.prototype = Object.create(Animal.prototype);

WalkingAnimal.prototype.canWalk = true;

module.exports = WalkingAnimal;
