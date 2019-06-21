function enterNumber(number) {
    number = number.replace(',','.');
    if(isNaN(number) ||!number){
        return;
    }
    return +number;
}
let buttonPaintCircle = document.getElementById('paint-circle');
let textInput = document.createElement('input');
textInput.type = 'text';
textInput.classList.add('style-input');
let divWithCircle = document.createElement('div');
let countTouch=0;

function randomColor() {
    let r = Math.floor(Math.random() * (255));
    let g = Math.floor(Math.random() * (255));
    let b = Math.floor(Math.random() * (255));
    return `rgb(${r},${g},${b})`
}

function createCircle(size) {

    for(let i =0; i<100;i++){
        let circle = document.createElement('div');
        circle.style.cssText=`display: inline-block; border: 6px solid ${randomColor()}; height: ${size}px; width: ${size}px; border-radius: 50%;`;
        circle.dataset.circle = 'circle';
        divWithCircle.append(circle);
    }
}

function firstTouch(){
    buttonPaintCircle.parentNode.append(textInput);
    countTouch++;
}
function secondTouch(){
    let enterSize = enterNumber(textInput.value);
    if(!enterSize||enterSize<=0){
        textInput.style.borderColor='red';
        textInput.value = 'Enter correct size';
    }
    else {
        debugger;
        createCircle(textInput.value);
        textInput.remove();
        buttonPaintCircle.parentNode.append(divWithCircle);
        countTouch++;
    }
}

function removeAllCircle(){
    for(let i =0; i<divWithCircle.childElementCount;){
        divWithCircle.children[i].remove();
    }
}
buttonPaintCircle.onclick =function () {
    if(countTouch===0){
        firstTouch();
    }
    else if(countTouch===1){
        secondTouch();
    }
    else {
        divWithCircle.remove();
        removeAllCircle();
        countTouch=0;
    }

};

divWithCircle.onclick = function (event) {
  let target = event.target;
  if(target.dataset.circle === 'circle') {
      target.remove();
  }
};


