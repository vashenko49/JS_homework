function enterNumber(number = "Number") {
    number = prompt('Enter number pls',number);
    number = number.replace(',','.');
    if(isNaN(number) ||!number){
        number = enterNumber(number);
    }
    return +number;
}
function enterOperation(operation = "Your operation") {
    operation = prompt("Enter your operation",operation);
    if(!operation || !operation.match(/[\-\+\*\/]/g) || operation.length !== 1 ){
        operation = enterOperation(operation);
    }
    return operation;
}


function miniCalculator(firstNumber=1,secondNumber=1,operation='+') {
    //перезаписываю в firstNumber результат математической операции для економии использованой памяти
    switch (operation) {
        case "+":
            firstNumber = firstNumber+secondNumber;
            break;
        case "-":
            firstNumber = firstNumber-secondNumber;
            break;
        case "*":
            firstNumber = firstNumber*secondNumber;
            break;
        case "/":
            firstNumber = firstNumber/secondNumber;
            break;
        default:
            firstNumber="Sorry, something problems";
            break;
    }
    return firstNumber;
}

alert(miniCalculator(enterNumber('first'),enterNumber('second'),enterOperation('operation')));
