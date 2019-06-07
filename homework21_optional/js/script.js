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

    function isFullArray(arraySrc){
        let trigger = true;
        for(let i =0;i<arraySrc.length;i++){
            if(arraySrc[i]!==undefined){trigger=false;}
        }
        return trigger;
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

                    if(res[key]===undefined){
                        delete  res[key];
                    }

                }

            }
            if(Object.keys(res).length!==0){
                return  res;
            }
        }
        else if(obj.constructor===Array){
            debugger;
            let result = [];
            for (let i =0;i<obj.length;i++){
                result[i]=filterObjectOrArray(obj[i],keyStr,pathsArray, indexDeep);
                if(result[i]===undefined){
                    result.splice(i, 1);
                }
            }
            if (!isFullArray(result))
            {
                return result;
            }
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


//Вроде работает) сказали использовать map, Filter и так далее но придумать их использование при фильтрации не смог, использовал reduce для нахождение булевского значения массива
let test = filterCollection(vehicles,'en_US',true,'name','locales.dog.description', 'description', 'contentType.name', 'locales.name', 'locales.description' );
console.log(test);

