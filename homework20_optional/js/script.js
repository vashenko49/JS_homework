function enterDate(message="Enter",tempString = "Enter") {
    tempString = prompt(message,tempString);
    if(!tempString || !tempString.match(/^(0[1-9]|1\d|2\d|3[01])\.(0[1-9]|1[0-2])\.(\d{4}) ([01]\d|2[0-3]):?([0-5]\d)$/)){
        tempString = enterDate(message ,tempString);
    }
    return tempString;
}
function getDate(message,tempString) {
    let tempDate = enterDate(message, tempString).match(/^(0[1-9]|1\d|2\d|3[01])\.(0[1-9]|1[0-2])\.(\d{4}) ([01]\d|2[0-3]):?([0-5]\d)$/);
    return new Date(tempDate[3],tempDate[2]-1,tempDate[1],tempDate[4],tempDate[5]);
}
function arraySum(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += +array[i];
    }
    return sum;
}

function getFinishDay(numberDay) {
    let date = new Date();
    while (numberDay){
        if(date.getDay()!==6 && date.getDay()!==7){
            date.setDate(date.getDate()+1);
            numberDay--;
        }
        else {
            date.setDate(date.getDate()+1);
        }

    }
    return date;
}

function forwardToTheFuture(employeesSpeed, listAllTasks, deadline){
    let powerTeam = arraySum(employeesSpeed);
    let powerTask = arraySum(listAllTasks);

    while (deadline<new Date()){
        alert("Дедлайн не может быть раньше текущего времени");
        deadline = getDate('Введите дедлайн заново в формате dd.mm.yyyy hh.mm');
    }


    let finishDayWork = getFinishDay(Math.ceil(powerTask/powerTeam));
    if(finishDayWork<=deadline){
        alert(`Все задачи будут успешно выполнены за ${Math.ceil((Math.abs(deadline.getTime()-finishDayWork.getTime())/(1000*60*60*24*365)))} дней до наступления дедлайна!`)
    }
    else {
       alert(`Команде разработчиков придется потратить дополнительно ${Math.ceil((Math.abs(deadline.getTime()-finishDayWork.getTime())/(1000*60*60*24*365)))*8} часов после дедлайна, чтобы выполнить все задачи в беклоге`)
    }
}


forwardToTheFuture([6,6],[12,12,12,12,12,12],getDate('Введите дедлайн в формате dd.mm.yyyy hh.mm'));