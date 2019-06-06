var templateObj = {
    label: 'Recursion',
    subs: [
        {
            label: 'Recursion 1',
            subs: []
        },
        {
            label: 'Recursion 2',
            subs: [
                {
                    label: 'Recursion 3 Recursion 4',
                    subs: []
                },
                {
                    label: 'Recursion 5 Recursion 6',
                    subs: [
                        {
                            label: 'Recursion 7',
                            subs: []
                        },
                        {
                            label: 'Recursion 8',
                            subs: []
                        }
                    ]
                }
            ]
        },
        {
            label: 'Recursion 9',
            subs: []
        }
    ],
    obj: {
        label: 'Recursion 10',
        subs: []
    },
    fun:function () {
      alert("help me from Recursion 11");
    },
    fun2:()=>{
        alert('Recursion');
    }
};

function cloningObject(obj) {
    if(obj.constructor===Object){
        let res ={};
        for(let key in obj){
            res[key] = {};
            res[key]=cloningObject(obj[key]);
        }
        return res;
    }
    else if(obj.constructor===Array){
        let result = [];
        for (let i =0;i<obj.length;i++){
            result[i]=cloningObject(obj[i]);
        }
        return  result;
    }
    else {
        return  obj;
    }
}


const clon = cloningObject(templateObj);