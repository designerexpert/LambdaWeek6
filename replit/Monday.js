function romanNumeralize(number) {
    const romanObj = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
    let returnedRomanNumber = '';
    let i;

    for (i in romanObj) {
        while (number >= romanObj[i]) {
            returnedRomanNumber += i;  // Add the property's name as a string to the returnedRomanNumber variable.
            number -= romanObj[i]; // Decrease Number by substracting from romanObj property values :)
        }
    }
    return returnedRomanNumber;

}

console.log('2017 on roman numerals is MMXVII :', romanNumeralize(1900));

function romanNumeralize2(number) {
    const key = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };

    let returnString = '';
    for (let entry in key) {
        while (number >= key[entry]) {
            returnString += entry;
            number -= key[entry];
        }
    }
    return returnString;
}

console.log(romanNumeralize(2017));