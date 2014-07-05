var animals = require('animals');

module.exports = {
    isADog: require('./typeValidation')(animals.Dog),
    isACat: require('./typeValidation')(animals.Cat),
    getNoise: require('./getNoise')
};