let btn = document.querySelectorAll('.btn');

function resetColorElement() {
    btn.forEach((element)=>{
        if(element.getAttribute('style')){
            element.removeAttribute('style');
        }
    })
}

function setColorElement(elementSetColor){
    if(elementSetColor) {
        resetColorElement();
        elementSetColor.style.backgroundColor = 'blue';
    }
}

function findElementKey(key){
    for(let i =0; i<btn.length;i++){
        if(btn[i].innerHTML.toUpperCase()===key.toUpperCase()){
            return btn[i];
        }
    }
    return  false;
}

document.addEventListener('click', function(event){
    let target = event.target;
    if(target.classList.contains('btn')){
        setColorElement(target);
    }
});
document.addEventListener('keydown', function (event) {
    setColorElement(findElementKey(event.key));
});
