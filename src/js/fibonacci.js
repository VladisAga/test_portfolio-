function nthFibo(n) {
    if (n < 1) return 'Надо вводить больше 0';
    if (n === 1) return 0;
    if (n === 2) return 1;

    let number1 = 0;
    let number2 = 1;
    let count = 2;

    while (count < n) {
        let newNumber2 = number1 + number2;
        number1 = number2;
        number2 = newNumber2;
        count++;
    }

    return number2;
}

const fiboNumber = nthFibo(9);
const fiboNumber2 = nthFibo(4);
console.log(fiboNumber, fiboNumber2);