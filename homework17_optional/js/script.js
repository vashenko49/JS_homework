function enterNumber(number = "Number") {
    number = prompt('Enter number pls', number);
    number = number.replace(',', '.');
    if (isNaN(number) || !number|| !Number.isInteger(+number )|| number<2) {
        number = enterNumber(number);
    }
    return +number;
}


function fibonacciNumber(n,F1 =1, F2=1) {
    for (let i = 3; i <= n; i++) {
        let F3 = F1 + F2;
        F1 = F2;
        F2 = F3;
    }
    return F2;
}

alert(fibonacciNumber(enterNumber('fibonacci'),1,1));
