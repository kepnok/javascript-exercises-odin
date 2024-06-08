const palindromes = function (string) {
    let filterStr = string.split('').filter( char => {
        const pancuation = [',', '.', '?', '!', ' '];
        return !pancuation.includes(char);
    }).join('');

    //console.log(filterStr);

    let lowerStr = filterStr.toLowerCase();
    //console.log(lowerStr);

    let reversed = lowerStr.split('').reverse().join('');
    //console.log(reversed);
    return (reversed === lowerStr);
};
palindromes('A car, a man, a maraca.');

// Do not edit below this line
module.exports = palindromes;
