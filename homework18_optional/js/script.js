function enterAssessment(message="Enter",number = "Enter",fromAssessment =1,toAssessment = 12) {
    number = prompt(message,number);
    number = number.replace(',','.');
    if(+number > toAssessment ||+number<fromAssessment || !number || isNaN(number)){
        number = enterAssessment(message,number);
    }
    return +number;
}
function createStudent() {
    //Создать пустой объект student, с полями name и last name.
    //Спросить у пользователя имя и фамилию студента, полученные значения записать в соответствующие поля объекта.
    const student ={
        name : prompt("Enter students name"),
        'last name' : prompt("Enter students surname")
    };

    student.table={};
   // В цикле спрашивать у пользователя название предмета и оценку по нему. Если пользователь нажмет Cancel при n-вопросе о названии предмета, закончить цикл. Записать оценки по всем предметам в свойство студента tabel.
    let triggerCancelAndSubject = true;
    do {
        triggerCancelAndSubject = prompt('Enter subject');
        if(triggerCancelAndSubject!==null || triggerCancelAndSubject){
            student["table"][triggerCancelAndSubject] =enterAssessment("Enter assessment","Assessment",1,12);
        }
    }while (triggerCancelAndSubject);

    //Посчитать количество плохих (меньше 4) оценок по предметам. Если таких нет, вывести сообщение Студент переведен на следующий курс.
    // Посчитать средний балл по предметам. Если он больше 7 - вывести сообщение Студенту назначена стипендия.
    let numberBadAssessment =0;
    let middleAssessment =0;
    let numberSubject =0;
    for (let key in student['table']) {
        let tempDate = +student["table"][key];
        numberSubject++;
        middleAssessment+= tempDate;
        if(tempDate<4){
            numberBadAssessment++;
        }
    }
    if(numberBadAssessment===0){
        alert('Студент переведен на следующий курс');
        if(middleAssessment/numberSubject>7){
            alert("Студенту назначена стипендия")
        }
    }
    else {
        alert('Студент не переведен на следующий курс');
    }


    return student;
}

const newStudent = createStudent();