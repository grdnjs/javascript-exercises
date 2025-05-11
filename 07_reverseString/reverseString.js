const reverseString = function(str) {

    let strArr = str.split('');
    let res = '';
    for (let i = str.length-1; i >= 0; i--) {
        res += strArr[i];
    }
    return res;
};

// Do not edit below this line
module.exports = reverseString;
