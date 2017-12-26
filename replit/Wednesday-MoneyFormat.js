function moneyFormat(float) {
    const roundFloat = float.toFixed(2);
    return roundFloat.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

console.log(moneyFormat(2310000.167));

function moneyFormat2(float) {
    const roundFloat = float.toFixed(2);
    const arr = roundFloat.split('');
    const newArr = Array.from(arr);
    let checkCase = 0;

    if (arr.length > checkCase) {
        newArr.splice(arr.length - 6, 0, ' ');
        console.log(newArr.join(''))
        checkCase = 9;
    }

    while (checkCase < arr.length) {
        newArr.splice(arr.length - checkCase, 0, ' ');
        checkCase = checkCase + 3;
    }

    return newArr.join('');
}

console.log(moneyFormat2(99999999999992310000.1670045));