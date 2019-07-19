function enterString(message="Enter",tempString = "Enter") {
    tempString = prompt(message,tempString);
    if(!tempString){
        tempString = enterString(message ,tempString);
    }
    return tempString;
}

function enterDate(message="Enter",tempString = "Enter") {
    tempString = prompt(message,tempString);
    if(!tempString || !tempString.match(/^(0[1-9]|1\d|2\d|3[01])\.(0[1-9]|1[0-2])\.(19|20)\d{2}$/)){
        tempString = enterDate(message ,tempString);
    }
    return tempString;
}

function createUser() {
    const newUser = {};

    Object.defineProperties(newUser,{
        "firstName":{
            value:enterString("Enter firstName"),
            configurable:true,
            writable:false
        },
        "lastName":{
            value:enterString("Enter lastName"),
            configurable:true,
            writable:false
        }
    });

    newUser.setLastName= function (tempLast){
        Object.defineProperty(newUser,"lastName",{value:tempLast});
    };

    newUser.setFirstName= function (temFirst){
        Object.defineProperty(newUser,"firstName",{value:temFirst});
    };
    newUser.getLogin = function () {
        return this.firstName[0].toLowerCase() + this.lastName.toLowerCase();
    };

    let tempDate = enterDate('Введите день рождение в формате dd.mm.yyyy').split(".");

    newUser.age = new Date(tempDate[2],tempDate[1]-1,tempDate[0]);

    newUser.getAge = function () {
        return parseInt((Math.abs(new Date().getTime() - this.age.getTime())/(1000*60*60*24*365)));
    };
    newUser.getPassword = function () {
       return this.firstName[0].toUpperCase()+this.lastName.toLowerCase() + this.age.getFullYear();
    };
    return newUser;
}

let test = createUser();

console.log(createUser());
console.log(test.getAge());
console.log(test.getPassword());
