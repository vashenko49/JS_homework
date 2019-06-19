function enterNumber(number) {
    number = number.replace(',','.');
    if(isNaN(number) ||!number){
       return;
    }
    return +number;
}
let inputPrice = document.getElementById('inputPrice');

let spanElement = document.createElement('span');
spanElement.classList.add('under-input');

let spanCross = document.createElement('span');
spanCross.classList.add('under-input-cross');
spanCross.innerHTML = '&times';


inputPrice.onfocus =function () {
    this.value = '';
    this.style.borderColor = 'green';
    this.style.boxShadow = '0px 0px 8px 0px rgba(0,255,0,1)';
};
inputPrice.onblur = function () {
    if(spanCross){
        spanElement.remove();
    }

    this.style.boxShadow = '';
    this.style.color = 'green';
    let enterPrice = enterNumber(inputPrice.value);
    if(!enterPrice){
      this.style.borderColor='red';
    }
    else if(enterPrice<=0){
      this.style.borderColor='red';
      this.value = 'Please enter correct price';
    }
    else {
      this.style.borderColor = '';
      spanElement.innerHTML = `Current price: ${enterPrice}$`;
      spanElement.appendChild(spanCross);
      document.body.insertBefore(spanElement,inputPrice.parentNode);
    }
};

spanCross.onclick = function () {
    spanElement.remove();
};

