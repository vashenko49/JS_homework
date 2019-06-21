function enterNumber(number) {
    number = number.replace(',','.');
    if(isNaN(number) ||!number){
        return;
    }
    return +number;
}
let inputPrice = document.getElementById('inputPrice');

inputPrice.onfocus =function () {
    this.value = '';
    this.style.borderColor = 'green';
    this.style.boxShadow = '0px 0px 8px 0px rgba(0,255,0,1)';
};
//создание span с текстом и кнопка X
let spanElement = document.createElement('span');
spanElement.classList.add('under-input');
let spanPrice = document.createElement('span');
spanPrice.classList.add('under-input-price');
let spanCross = document.createElement('span');
spanCross.classList.add('under-input-cross');
spanCross.innerHTML = '&times';

//создание Please enter correct price. span
let enterCorrect = document.createElement('span');
enterCorrect.innerHTML = 'Please enter correct price.';
enterCorrect.classList.add('correct-text');
inputPrice.onblur = function () {
    if(spanCross){
        spanElement.remove();
    }
    if(enterCorrect){
        enterCorrect.remove();
    }
    this.style.boxShadow = '';

    let enterPrice = enterNumber(inputPrice.value);
    if(!enterPrice || enterPrice<=0 ){
        debugger;
        this.style.borderColor='red';
        inputPrice.parentNode.append(enterCorrect);
    }
    else {
        this.style.borderColor = '';
        spanElement.innerHTML = `Current price: $`;
        spanPrice.innerHTML = enterPrice;
        spanElement.append(spanPrice);
        spanElement.append(spanCross);
        document.body.insertBefore(spanElement,inputPrice.parentNode);
    }
};

spanCross.onmouseover = function () {
    this.style.borderColor = 'red';
    this.style.color = 'red';
    inputPrice.style.color = 'green';
};
spanCross.onmouseout = function () {
    this.style.borderColor = '';
    this.style.color = '';
    inputPrice.style.color = '';
};
spanCross.onclick = function () {
    if(spanElement){
        spanElement.remove();
        inputPrice.value = "";
        inputPrice.style.color = 'green';
    }
};