const removeFromArray = function(arrayEx, place1, place2, place3, place4) {
    for (let i = 0; i < arrayEx.length; i++){
        if (arrayEx[i]===place1 || arrayEx[i]===place2 || arrayEx[i]===place3 || arrayEx[i]===place4){
            arrayEx[i] = '*';
        }
    }
    for (let i = 0; i < arrayEx.length; i++){
        while (arrayEx[i]==='*'){
            arrayEx.splice(i,1);
        }
    }
    
    return arrayEx;

};

// Do not edit below this line
module.exports = removeFromArray;
