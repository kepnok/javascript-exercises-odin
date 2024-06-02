const removeFromArray = function(array, ...args) {
    let array2 = [];
    for(let i = 0; i<array.length; i++){
        if(args.includes(array[i])){
            continue;
        }
        else{
            array2.push(array[i]);
        }
    }
    return array2;
};

// Do not edit below this line
module.exports = removeFromArray;
