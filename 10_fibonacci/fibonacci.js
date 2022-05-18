const fibonacci = function(place) {
    if (place < 0){ return 'OOPS'}
    place = +place;

    let a = 0;  //trailing number
    let b = 1;  //leading number
    let temp = 0;
    let sum = 1;
    for (let i = 1; i < place; i++){
        sum = a + b;
        temp = sum;
        a = b;
        b = sum;
    }
    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
