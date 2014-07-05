module.exports = function(type){
    return function(target){
        return target instanceof type;
    };
};