function enterNumber(number) {
    number = number.replace(',','.');
    if(isNaN(number) ||!number){
        return false;
    }
    return +number;
}
let inputPrice = document.getElementById('inputPrice');

function createElement(tagName, className, innerHTML=''){
    let newElement = document.createElement(tagName);
    newElement.classList.add(className);
    newElement.innerHTML = innerHTML;
    return newElement;
}

function putNodeInNode(parentNode,childNode){
    parentNode.append(childNode);
}
//создание span с текстом и кнопка X
let spanElement = createElement('span','under-input','Current price: $');
let spanPrice = createElement('span', 'under-input-price');
let spanCross = createElement('span','under-input-cross','&times');
//создание Please enter correct price. span
let enterCorrect = createElement('span', 'correct-text','Please enter correct price.');


inputPrice.addEventListener('focus', function () {
    this.value = '';
    this.style.borderColor = 'green';
    this.style.boxShadow = '0px 0px 8px 0px rgba(0,255,0,1)';
});
inputPrice.addEventListener('blur',function () {
    this.style.boxShadow = '';

    if(spanElement){
        spanElement.remove();
    }
    if(enterCorrect){
        enterCorrect.remove();
    }

    let enterPrice = enterNumber(this.value);

    if(!enterPrice || enterPrice<=0 ){
        this.style.borderColor='red';
        putNodeInNode(this.parentNode,enterCorrect);
    }
    else {
        this.style.borderColor = '';
        spanPrice.innerHTML = enterPrice;
        putNodeInNode(spanElement,spanPrice);
        putNodeInNode(spanElement,spanCross);
        document.body.insertBefore(spanElement,this.parentNode);
    }
});

spanCross.addEventListener('mouseover',function () {
    this.style.borderColor = 'red';
    this.style.color = 'red';
    inputPrice.style.color = 'green';
});
spanCross.addEventListener('mouseout',function () {
    this.style.borderColor = '';
    this.style.color = '';
    inputPrice.style.color = '';
});
spanCross.addEventListener('click',function () {
    if(spanElement){
        spanElement.remove();
        inputPrice.value = "";
        inputPrice.style.color = 'green';
    }
});
