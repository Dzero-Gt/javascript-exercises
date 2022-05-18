const palindromes = function (a) {
    const aSplit = a.split('');
    const palinSplit = a.split('');
    palinSplit.reverse();
    const aFilter = aSplit.filter(character => character.toLowerCase() != character.toUpperCase());
    const palinFilter = palinSplit.filter(character => character.toLowerCase() != character.toUpperCase());
    let aFinal = '';
    let palinFinal = '';
    let temp = '';
    for (let i = 0; i < aFilter.length; i++){
        temp = aFilter[i].toLowerCase();
        aFinal += temp;
    }
    for (let i = 0; i < palinFilter.length; i++){
        temp = palinFilter[i].toLowerCase();
        palinFinal += temp;
    }
    console.log(aFinal);
    console.log(palinFinal);
    return (aFinal === palinFinal);
};

// Do not edit below this line
module.exports = palindromes;


//use filter