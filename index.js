const Spy = receivesAFunction
function receivesAFunction (callback) {
    return callback ('Spy')
}; 
function returnsANamedFunction () {
    return function fn (){
    } 
};
function returnsAnAnonymousFunction () {
    return function () {
    }
};