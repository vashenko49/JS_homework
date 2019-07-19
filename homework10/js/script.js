/*region with show or hide password*/
function checkAndReplaysClassName (element, showPassword, hidePassword){
    if(element.classList.contains(hidePassword)){
        element.classList.remove(hidePassword);
        element.classList.add(showPassword);
        return true; //если пароль должен отображаться возращаеться true
    }
    else{
        element.classList.remove(showPassword);
        element.classList.add(hidePassword);
        return false; //если пароль должен скрыться то отображение убереться
    }
}

document.addEventListener('click', function(event) {
   let target = event.target;
   if(target.hasAttribute('data-show-password')){
       checkAndReplaysClassName(target,'fa-eye-slash','fa-eye')?target.previousElementSibling.type = 'text':target.previousElementSibling.type = 'password';
   }
});
/*end region with show or hide password*/

/*region with compare password*/
let inputWrapper = document.querySelectorAll('.input-wrapper');
let form = document.getElementById('form');
/*модальное окно при успехе*/
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
/*дабавляет строку уведомляя про неудачу*/
function inputPasswordFail(){
    let response = document.createElement('p');
    response.innerHTML = 'Нужно ввести одинаковые значения';
    response.style.color = 'red';
    response.style.marginTop = '0';
    return response;
}
let responseToUser;
form.addEventListener('submit',function (event) {
    if(responseToUser){
        responseToUser.remove();
    }
    (inputWrapper[0].firstElementChild.value === inputWrapper[1].firstElementChild.value && inputWrapper[1].firstElementChild.value && inputWrapper[0].firstElementChild.value)? responseToUser = inputPasswordSuccessful():responseToUser = inputPasswordFail();
    form.insertBefore(responseToUser,form.lastElementChild);
    event.preventDefault();
});
/*end region with compare password*/