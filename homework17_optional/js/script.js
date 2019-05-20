function enterNumber(number = "Number") {
    number = prompt('Enter number pls', number);
    number = number.replace(',', '.');
    if (isNaN(number) || !number|| !Number.isInteger(+number )|| number<2) {
        number = enterNumber(number);
    }
    return +number;
}


//не самый удачный алгоритм требует большой мощности, если ввести число больше 45 приходится ждать минут 5
function fibonacciNumber(n) {
    if(n<2) return n;
    return fibonacciNumber(n-1)+fibonacciNumber(n-2)
}

alert(fibonacciNumber(enterNumber('fibonacci')));
