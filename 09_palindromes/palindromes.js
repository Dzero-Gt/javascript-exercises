const palindromes = function (a) {
    let palindrome = a.split('');
    palindrome.reverse();
    let palin = '';
    for (let i = 0; i < palindrome.length; i++){
        palin += palindrome[i];
    }
    return palin === a;
};

// Do not edit below this line
module.exports = palindromes;


//use filter