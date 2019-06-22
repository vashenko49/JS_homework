let titleList = document.getElementById('title-list');
let titleListInformation = document.getElementById('title-list-information');

function hiddenElements(elements){
    for(let i =0;i<elements.childElementCount;i++){
        if(elements.children[i].hidden === false) {
            elements.children[i].hidden = true;
        }
    }
}
function lookElement(attribute) {
    hiddenElements(titleListInformation);
    let children = titleListInformation.children;
    for(let i =0;i<children.length;i++){
        if(children[i].dataset.item.toUpperCase()===attribute.toUpperCase()){
            children[i].hidden = false;
        }
    }
}

hiddenElements(titleListInformation);

titleList.onclick = function (event) {
    let target = event.target;
    let children = titleList.children;
    for(let i =0;i<children.length;i++){
        if(children[i].classList.contains('active')){
            children[i].classList.remove('active');
        }
    }
    target.classList.add("active");
    lookElement(target.dataset.item);
};

