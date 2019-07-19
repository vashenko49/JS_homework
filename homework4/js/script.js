function enterString(message="Enter",tempString = "Enter") {
    tempString = prompt(message,tempString);
    if(!tempString){
        tempString = enterString(message ,tempString);
    }
    return tempString;
}

function createUser() {
    const newUser = {};

    Object.defineProperties(newUser,{
       "firstName":{
           value:enterString('enter firstname'),
           configurable:true,
           writable:false
       },
        "lastName":{
            value:enterString('enter lastname'),
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
    return newUser;
}

let test = createUser();

