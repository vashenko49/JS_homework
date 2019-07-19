function checkEnterName(name = "Name") {
    name = prompt("Enter your name",name);
    if (!name){
        name = checkEnterName(name);
    }
    return name;
}
function checkEnterYear(years = "Years") {
    years = +prompt("How are you years?", years );
    if (isNaN(years)){
        years = checkEnterYear(years);
    }
    return years;
}

let name = checkEnterName();
let years = checkEnterYear();

if (years<18){
    alert("You are not allowed to visit this website")
}
else if (18<=years && years <= 22 ){
    let questionUser=confirm("Are you sure you want to continue?");
    if (questionUser){
        alert("Welcome, " + name);
    }
    else {
        alert("You are not allowed to visit this website")
    }
}
else {
    alert("Welcome, " + name);
}