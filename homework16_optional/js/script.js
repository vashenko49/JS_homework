function enterNumber(number = "Number") {
    number = prompt("Enter your number multiples of five", number);
    number = number.replace(',','.');
    if (isNaN(number) || !Number.isInteger(+number) || !number){
        number = enterNumber(number);
    }
    return +number;
}



function factoriallFunction(n=1){
    function recursion(number=1) {
        if(number !==1){
            number = number *recursion(number-1);
        }
        return number;
    }
    if(n>=1){
        n = recursion(n);
    }
    else if(n<=-1){
       n = -recursion(-n);
    }
    else {
        n=1;
    }
    return n;
}

alert(factoriallFunction(enterNumber('Enter')));