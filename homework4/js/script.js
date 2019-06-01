function enterString(message="Enter",tempString = "Enter") {
    tempString = prompt(message,tempString);
    if(!tempString){
        tempString = enterString(message ,tempString);
    }
    return tempString;
}

function createUser(firstName, lastName) {
    const newUser = {};

    Object.defineProperties(newUser,{
       "firstName":{
           value:firstName,
           configurable:true,
           writable:false
       },
        "lastName":{
            value:lastName,
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
    return newUser;
}

let test = createUser(enterString('enter firstname'),enterString('enter lastname'));

