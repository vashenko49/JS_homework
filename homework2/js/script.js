function enterNumber(number = "Number") {
    number = prompt("Enter your number multiples of five", number);
    number = +number.replace(',','.');//сделал так потому что когда пользователь введет дробное число, число не проходит проверку и передается рекурсии NaN
    if (isNaN(number) || !Number.isInteger(number)){
        number = enterNumber(number);
    }
    return number;
}

function multiplesFive(start, finish) {
    let listNumber = [];
    for (;start<=finish;start++){
        if(start%5===0){
            listNumber.push(start);
        }
    }
    if(listNumber.length===0){
        listNumber='Sorry, no numbers';
    }
    return listNumber;
}

function simpleNumber(start = 2, finish=3){
    //инкапсулировал функцию, что бы ее нетрогали из внешки
    function isPrime(temp){
        let max=Math.floor(Math.sqrt(temp));
        for (let i = 2; i <= max; i++) {
            if (temp%i===0) {
                return false;
            }
        }
        return true;
    }

    let listNumber = [];
    if(start<2||finish<2 || start>=finish|| !isFinite(start) || start%1 || !isFinite(finish) || finish%1  ){
        alert('No valid');
        simpleNumber(enterNumber('from'),enterNumber('to'));
    }
    else {
        for (;start<=finish;start++){
            if(isPrime(start)){
                listNumber.push(start);
            }
        }
    }
    if(listNumber.length===0){
        listNumber='Sorry, no numbers';
    }
    return listNumber;
}

//кратные 5
console.log(multiplesFive(enterNumber('from'),enterNumber('to')));
//простые числа
console.log(simpleNumber(enterNumber('from'),enterNumber('to')));
