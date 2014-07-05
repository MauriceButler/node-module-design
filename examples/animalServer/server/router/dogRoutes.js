var animals = require('animals'),
    animalProcessor = require('animalProcessor');

function speak(request, response){
    var dog = new animals.Dog(),
    noise = animalProcessor.getNoise(dog);
    response.end(noise);
}

module.exports = function(routes){
    routes['/dog/speak'] = speak;
};