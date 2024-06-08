const findTheOldest = function(obj) {
    let array = obj.sort((a, b) => {

        if(a.yearOfDeath === undefined){
            a.yearOfDeath = new Date().getFullYear();
        }
        if(b.yearOfDeath === undefined){
            b.yearOfDeath = new Date().getFullYear();
        }

        const lifespanA = a.yearOfDeath - a.yearOfBirth;
        const lifespanB = b.yearOfDeath - b.yearOfBirth;
    
        if (lifespanA > lifespanB) return -1;
        if (lifespanA < lifespanB) return 1;
        return 0;
    });
    return array[0];
    
};
console.log(findTheOldest([
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]));

// Do not edit below this line
module.exports = findTheOldest;
