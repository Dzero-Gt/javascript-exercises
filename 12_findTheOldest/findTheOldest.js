const findTheOldest = function(people) {
   const oldestList = people.sort((a,b) => age(a) > age(b) ? -1 : 1); 
   return people[0];
}

function age(person){
    if (!person.yearOfDeath){
        person.yearOfDeath = new Date().getFullYear();
    }
    return (person.yearOfDeath - person.yearOfBirth);
}

// Do not edit below this line
module.exports = findTheOldest;
