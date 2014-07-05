var animals = require('animals');

module.exports = function(target){
    if(target instanceof animals.Animal){
        return target.noise;
    }
};