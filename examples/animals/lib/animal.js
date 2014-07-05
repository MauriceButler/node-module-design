function Animal(){
    this.noise = 'potatoes';
}

Animal.prototype.speak = function(){
    return this.noise;
};

module.exports = Animal;
