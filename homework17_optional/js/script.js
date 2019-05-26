function enterNumber(number = "Number") {
    number = prompt('Enter number pls', number);
    number = number.replace(',', '.');
    if (isNaN(number) || !number|| !Number.isInteger(+number )|| number<2) {
        number = enterNumber(number);
    }
    return +number;
}



function fibonacciNumber(F0=1, F1=1, n){
    if(n===1){
        return F1;
    }
    if(n===2){
        return F0;
    }
    return fibonacciNumber(F0+F1,F0,n-1);

}

console.log(fibonacciNumber(1,1,enterNumber('enter number fibonacci')));