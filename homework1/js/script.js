function check_enter_name(name = "Name") {
    name = prompt("Enter your name",name);
    if (!name){
        name = check_enter_name(name);
    }
    return name;
}
function check_enter_year(years = "Years") {
    years = prompt("How are you years?", years );
    if (isNaN(years)){
        years = check_enter_year(years);
    }
    return years;
}

let name = check_enter_name();
let years = check_enter_year();

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