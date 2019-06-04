//number, string, boolean, null, undefined, object

function filterBy(array,typeData) {
    let result = [];

    for (let i = 0;i<array.length;i++){
        if((typeof array[i]).toUpperCase()!==typeData.toUpperCase()){
            if(typeData.toUpperCase()==="null".toUpperCase()&&array[i]===null){
                break;
            }
            else if(typeData.toUpperCase()==='object'.toUpperCase()&& array[i]!==null ){
                break;
            }
            else {
                result.push(array[i]);
            }
        }
    }
    return result

}


let test = filterBy(['hello', 'world',undefined, true, 23, '23', null,{name:465,surname:456}],'undefined');
console.log(test);

