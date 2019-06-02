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
    const result = {};
    debugger;
    for (let key in obj){
        if(obj[key].constructor===Object){
            result[key] = {};
            result[key]=cloningObject(obj[key]);
        }
        else if(obj[key].constructor === Array){
            result[key]=[];
            for (let i = 0;i<obj[key].length;i++){
                result[key][i] =cloningObject(obj[key][i]);
            }
        }
        else {
            result[key] = obj[key];
        }

    }

    return result;
}


const clon = cloningObject(templateObj);