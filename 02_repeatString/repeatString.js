const repeatString = function(text, n) {
let results = "";
if (n >= 0){
    for (let i = 0; i < n; i++){
        results += text;
    }
}
else {
    results = "ERROR";
}
return results;
};

// Do not edit below this line
module.exports = repeatString;
