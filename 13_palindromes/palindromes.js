const palindromes = function (str) {
    let arr = str.toLowerCase().split('');
    arr = arr.filter(c => c.match(/\w/));
    
    for (let i = 0; i <= (Math.floor(arr.length/2)); i++) {
        let k = arr.length - 1 - i;
        if (arr[i] != arr[k]) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
