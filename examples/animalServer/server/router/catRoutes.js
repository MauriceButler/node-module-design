var animals = require('animals'),
    animalProcessor = require('animalProcessor');

function speak(request, response){
    var cat = new animals.Cat(),
    noise = animalProcessor.getNoise(cat);
    response.end(noise);
}

module.exports = function(routes){
    routes['/cat/speak'] = speak;
};