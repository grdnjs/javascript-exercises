const sumAll = function(min,max) {
    if (isInvalid(min) || isInvalid(max)) return 'ERROR'
    if (max < min) [min, max] = [max, min];
    let sum = min;
    if (min == max) {
        return sum;
    }else {
        return sum + sumAll(min + 1, max)
    }
};

const isInvalid = function(n) {
    if ((!Number.isInteger(n)) || (n < 0)) return true;
    return false;
}

sumAll(2,4);

// Do not edit below this line
module.exports = sumAll;
