const reverseString = function(text) {
let results = "";
let length = text.length;
for (let i = length; i > 0; i--){
    results += text.charAt(i - 1);
}
return results;
};

// Do not edit below this line
module.exports = reverseString;
