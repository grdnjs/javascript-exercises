const getTheTitles = function(books) {
    let res = [];
    for (let book of books) {
        res.push(book.title);
    }
    return res;
};

// Do not edit below this line
module.exports = getTheTitles;
