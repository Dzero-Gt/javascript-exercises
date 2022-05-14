const sumAll = function(start, end) {
    let results = 0;
    if (start < 0 || end < 0 || typeof start != "number" || typeof end != "number"){
        results = "ERROR";
    }
    else {
        if (start > end){
            let temp = start;
            start = end;
            end = temp;
        }
        for (let i = start; i <= end; i++){
            results += i;
        }
    }
    return results;
};

// Do not edit below this line
module.exports = sumAll;
