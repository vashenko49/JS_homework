const displayCal = document.querySelector('.display').children[0];
const keys = document.querySelector('.keys');


//будем хранить тут историю элемент который нужно запомнить
let history = [null,null,null];
//элемент который нужно запомнить
let mrc=null;
//чистить строку ввода или нет
let clean = true;
//очистка
let numberClick=true;


keys.addEventListener('click',function (event) {
    let target = event.target;
    if(target.tagName.toLocaleUpperCase()==="INPUT".toLocaleUpperCase()){
        calculations(target.value);
    }
});

document.addEventListener('keydown', function (event) {
    if((event.keyCode>=96&&event.keyCode<=111)||(event.keyCode>=48&&event.keyCode<=57)||event.keyCode===13||event.keyCode===27){
        calculations(event.key);
    }
});


function calculations(symbol) {
    //только числа
    if(/^[0-9]|\.$/.exec(symbol)){
        if(clean){
            displayCal.value='';
            clean=false;
        }
        displayCal.value+=symbol;
    }//математические операции
    else if(/^[/*+-]/.exec(symbol)){
        if(history[1]){
            if(task()){
                history[1]=symbol;
            }else{
                cancel();
                return;
            }
        }else {
            history[0] = parseFloat(displayCal.value);
            history[1] = symbol;
        }
        clean=true;
    }//посчитать
    else if(/=|Enter/.exec(symbol)){
        if(task()){
            history[1]=null;
        }else{
            cancel();
            return;
        }
    }//управление с число в памяти
    else if(/mrc|m-|m+/.exec(symbol)){
        let temp = parseFloat(displayCal.value);
        if(symbol==='mrc'){
            if(numberClick){
                if(mrc!==null){
                    displayCal.value=mrc;
                    numberClick=false;
                }
            }else {
                mrc=null;
                numberClick=true;
            }
        }else if(symbol==='m-'){
            if(mrc===null){
                mrc=0;
            }
            mrc-= temp
        }else if(symbol==="m+"){
            if(mrc===null) {
                mrc = 0;
            }
            mrc+=temp;
        }
    }//отменить действие
    else {
        cancel();
    }
}

function task() {
    history[2]=parseFloat(displayCal.value);
    let result =  count(history[0],history[2],history[1]);
    if(isNaN(result)||result===undefined){
        return false;
    }
    else {
        history[0]=result;
        displayCal.value=result;
        return true;
    }
}

function cancel() {
    displayCal.value=0;
    history=[null,null,null];
    clean=true;
}
function count(first,second,operation) {
    if(operation==="+"){
        return  first+second;
    }else if(operation==="-"){
        return  first-second;
    }else if(operation==="/"){
        return  first/second;
    }else if(operation==="*"){
        return  first*second;
    }
}


