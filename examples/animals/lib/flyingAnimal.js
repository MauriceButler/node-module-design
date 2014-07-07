var Animal = require('./animal');

function FlyingAnimal(){
}

FlyingAnimal.prototype = Object.create(Animal.prototype);
FlyingAnimal.prototype.constructor = FlyingAnimal;

FlyingAnimal.prototype.canFly = true;
module.exports = FlyingAnimal;
