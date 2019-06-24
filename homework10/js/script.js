//проверяет наличие класса в елементе, если находит меняет его на новый
function checkAndReplaysClassName (element, showPassword, hidePassword){
    debugger;
    if(element.classList.contains(hidePassword)){
        element.classList.remove(hidePassword);
        element.classList.add(showPassword);
        return true; //если пароль должен отображаться возращаеться true
    }
    else if(element.classList.contains(showPassword)){
        element.classList.remove(showPassword);
        element.classList.add(hidePassword);
        return false; //если пароль должен скрыться то отображение убереться
    }
}

document.addEventListener('click', function(event) {
   let target = event.target;
   if(target.hasAttribute('data-show-password')){
        if (checkAndReplaysClassName(target,'fa-eye-slash','fa-eye')){
            target.previousElementSibling.type = 'text';
        }
        else {
            target.previousElementSibling.type = 'password';
        }
   }
});

let inputWrapper = document.querySelectorAll('.input-wrapper');
let form = document.getElementById('form');

function inputPasswordSuccessful(){
    let response = document.createElement('div');
    response.classList.add('bg-modal-window');
    response.addEventListener('click',function (event) {
        let target = event.target;
       if(target ===response){
           target.remove();
       }
    });
    let message = document.createElement('p');
    message.classList.add('modal-window');
    message.innerHTML= 'You are welcome';
    response.append(message);
    return response;

}
function inputPasswordFail(){
    let response = document.createElement('p');
    response.innerHTML = 'Нужно ввести одинаковые значения';
    response.style.color = 'red';
    response.style.marginTop = '0';
    return response;
}
function checkPassword(elementToCheck){
    for(let i =0;i< elementToCheck.length;i++){
        if(elementToCheck[0].firstElementChild.value!==elementToCheck[i].firstElementChild.value || !elementToCheck[i].firstElementChild.value){
            return  false;
        }
    }
    return true;
}

let responseToUser;
form.addEventListener('submit',function (event) {
    if(responseToUser){
        responseToUser.remove();
    }

    if(checkPassword(inputWrapper)){
        responseToUser = inputPasswordSuccessful();
    }
    else {
        responseToUser = inputPasswordFail();
    }
    form.insertBefore(responseToUser,form.lastElementChild);
    event.preventDefault();
});