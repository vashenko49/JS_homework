let vehicles = [
    {
        locales:{
            name:'Toyota',
            description:'en_US'
        }
    },
    {
        dog:{
            name:'Toyota2',
            description:'test'
        }
    },
    {
        name:'Toyota3',
        description:'en_US'
    },
    {
        locales:{
            dog:{
                name:'Toyota',
                description:'en_US'
            }
        }
    },
    [{
        locales:{
            name:'Toyota5',
            description:'en_U5'
        }
    },
        {
            locales:{
                dog:{
                    name:'Toyota6',
                    description:'test'
                }
            }
        }],
    {
        contentType: [
            {
                name:'Toyota7',
                description:'en_U7'
            }
        ]
    },
    {
        name:'Toyota8',
        description:'Toyota8'
    }
];




function filterCollection(array, keyString,boolean, ...paths) {
    keyString= keyString.split(' ');
    paths.forEach((elem,index,array)=>{array[index]=array[index].split('.')});

    let resultFindKeyString = [];
    for (let i = 0;i<keyString.length;i++){
        resultFindKeyString[i]=false;
    }


    function filterObjectOrArray(obj, keyStr, pathsArray, indexDeep =-1){
        if(obj.constructor===Object){
            let res ={};
            indexDeep++;
            for(let key in obj){
                for(let i = 0; i<pathsArray.length;i++){
                    if(pathsArray[i][indexDeep]===undefined){
                        continue
                    }
                    if(key.toUpperCase()===pathsArray[i][indexDeep].toString().toUpperCase()){

                        res[key] = {};
                        res[key]=filterObjectOrArray(obj[key],keyStr,pathsArray,indexDeep);

                    }

                }

            }
            return  res;
        }
        else if(obj.constructor===Array){
            let result = [];
            for (let i =0;i<obj.length;i++){
                result[i]=filterObjectOrArray(obj[i],keyStr,pathsArray, indexDeep);
            }
            return  result;
        }
        else {

            for (let i =0; i<keyStr.length;i++){
                if(obj.toUpperCase()===keyStr[i].toUpperCase()){
                    resultFindKeyString[i]=true;
                    return obj;
                }
            }

        }
    }

    let filterClone = filterObjectOrArray(array,keyString,paths);
    let boolFind = resultFindKeyString.reduce((pre,current)=>{
        if(boolean){
            return  Boolean(pre) && Boolean(current);
        }
        else {
            return  Boolean(pre) || Boolean(current);
        }
    });

    if(boolean===true && boolFind===true){
        return filterClone;
    }
    else  if(boolean===true&&boolFind===false){
        return 'Не все ключевые слова были найдены'
    }
    else {
        return filterClone;
    }

}


//Вроде работает но не могу решить проблему с undefined
//Но он выдает очищеный массив который мы дали
let test = filterCollection(vehicles,'en_US test jojo Toyota',true,'name','locales.dog.description', 'description', 'contentType.name', 'locales.name', 'locales.description' );
console.log(test);
