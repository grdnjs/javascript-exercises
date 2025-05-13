const findTheOldest = function(people) {
    let oldest = 0;
    let oldestPerson = "";
    for (let person of people) {
        let death = person.yearOfDeath ? person.yearOfDeath : new Date().getUTCFullYear();
        let birth = person.yearOfBirth;
        let age = death-birth;
        console.log(age);
        if (age > oldest) {
            oldest = age;
            oldestPerson  = person;
        }
    }
    return oldestPerson;

};

// Do not edit below this line
module.exports = findTheOldest;
