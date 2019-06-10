let test1 =['hello', ['1', '2', '3', 'sea', 'user', 23], 'Kiev', ['1', '2', ['hello', 'world', 'Kiev', 'Kharkiv', 'Odessa', 'Lviv'], 'sea', 'user', 23], 'Odessa', 'Lviv'];



function viewArray(array) {
    let arrayElement = printArray(array);
    document.body.appendChild(arrayElement);

    let sec  = 10;
    let timer = document.createElement('p');
    timer.style.fontSize = '50px';
    timer.style.color = 'red';
    document.body.appendChild(timer);

    let timeOut = setInterval(function ()
    {
        if(sec<0){
            arrayElement.remove();
            timer.remove();
            clearInterval(timeOut);
        }
        else {
            timer.innerHTML = sec.toString();
            sec--;
        }
    },1000);

}

function printArray(array) {
    let ul = document.createElement('ul');
    let liItems = array.map((item)=>{
        if(Array.isArray(item)){
             return printArray(item);
        }
        else {
            let li = document.createElement('li');
            li.innerHTML=item;
            return  li;
        }
    });
    liItems.forEach((item)=>{ul.appendChild(item)});
    return ul;
}
window.onload = function () {
    viewArray(test1);
};