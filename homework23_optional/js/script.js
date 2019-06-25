let resultGame;
function endGame(text){
    let response = document.createElement('div');
    response.classList.add('bg-modal-window');
    response.addEventListener('click',function (event) {
        let target = event.target;
        if(target ===response){
            target.remove();
            document.getElementById('form').style.display = 'grid';
        }
    });
    let message = document.createElement('p');
    message.classList.add('modal-window');
    message.innerHTML= text;
    response.append(message);
    return response;
}
let rangeCustom = {
    widthCustom: document.getElementById('range-width-ran'),
    heightCustom: document.getElementById('range-height-ran'),
    amountMine: document.getElementById('range-amount-mine-ran')
};
let buttonOnPage;
let btnStartGame;

function startWorkRange() {
    for(let key in rangeCustom){
        rangeCustom[key].addEventListener('input',function () {
            rangeCustom[key].nextElementSibling.innerHTML = rangeCustom[key].value;
        });
    }
}

let gameModes = {
    junior:{
        width: 9,
        height: 9,
        mine: 10
    },
    middle:{
        width: 16,
        height: 16,
        mine: 40
    },
    senior:{
        width: 30,
        height: 16,
        mine: 99
    }

};

function resetColorElement() {
    buttonOnPage.forEach((element)=>{
        if(element.getAttribute('style')){
            element.removeAttribute('style');
        }
    })
}



function setInformation(){
    let selectMode;
    buttonOnPage.forEach((element)=>{
        if(element.getAttribute('style')){
            selectMode = element;
        }
    });
    if(selectMode){
        if(selectMode.dataset.status ==='custom'){
            return{
                width: +rangeCustom.widthCustom.value,
                height: +rangeCustom.heightCustom.value,
                mine: +rangeCustom.amountMine.value
            }
        }else {
            for (let key in gameModes) {
                if (selectMode.dataset.status === key) {
                    return gameModes[key];
                }
            }
        }
    }
    else {
        return false;
    }
}




function startWorkButton() {
    buttonOnPage = document.querySelectorAll('.button-on-page');
    buttonOnPage.forEach((element)=>{
        element.addEventListener('click',function (event) {
            resetColorElement();
            this.style.backgroundColor = 'red';
        })

    });
    btnStartGame = document.getElementById('btn-start-game');
    btnStartGame.addEventListener('click',function () {
        let selectGameModeUser = setInformation();
        if(selectGameModeUser){
            document.querySelector('.flagToMine').innerHTML = ` 0 / ${selectGameModeUser.mine}`;
            document.getElementById('form').style.display = 'none';
            page.init(selectGameModeUser.width,selectGameModeUser.height,selectGameModeUser.mine);
        }
        else {
            resultGame = endGame("select game mode");
            document.body.appendChild(resultGame);
        }
    })
}

window.onload = function(){
    startWorkButton();
    startWorkRange();
};

/*LOGIC GAME*/
function Point(){
    this.isMine = false;
    this.mineAround =0;
    this.isOpen = false;
    this.isFlag =false;
}

let game = {
    width:10,
    height:10,
    mineCount:10,
    openMineCount:0,
    countFlag:0,
    field:[],
    fieldField:function(){
        this.field =[];
        for(let i =0;i<this.width;i++){
            let temp = [];
            for(let j =0;j<this.height;j++){
                temp.push(new Point());
            }
            this.field.push(temp);
        }
        for(let i =0;i<this.mineCount;){
            let x = Math.abs(parseInt(Math.random()*this.width-0.01));
            let y = Math.abs(parseInt(Math.random()*this.height-0.01));

            if(!this.field[x][y].isMine){
                this.field[x][y].isMine=true;
                i++;
            }

        }
    },
    mineAroundCounter:function(x, y){
        let xStart = x>0?x-1:x;
        let yStart = y>0?y-1:y;
        let xEnd = x<this.width-1?x+1:x;
        let yEnd = y<this.height-1?y+1:y;
        let count = 0;
        for(let i = xStart; i<=xEnd;i++ ){
            for(let j = yStart;j<=yEnd;j++){
                if(this.field[i][j].isMine && !(x===i && y===j )){
                    count++;
                }
            }
        }
        this.field[x][y].mineAround = count;

    },
    startMineCounter:function(){
        for(let i =0;i<this.width;i++){
            for(let j =0;j<this.height;j++){
                this.mineAroundCounter(i,j);
            }
        }
    },

    start:function (widthUser, heightUser,amountMineUser) {
        this.width = widthUser;
        this.height = heightUser;
        this.mineCount = amountMineUser;
        this.openMineCount=0;
        this.countFlag=0;
        this.fieldField();
        this.startMineCounter();
    }
};

let page = {
    init:function (widthUser, heightUser,amountMineUser) {
        this.gameInterface.init(widthUser, heightUser,amountMineUser);
    },
    gameInterface:{
        table:null,
        init:function (widthUser,heightUser,amountMineUser) {
            game.start(widthUser,heightUser,amountMineUser);
            this.div = document.querySelector('.field');
            this.drawField();
            let self = this;
            this.div.addEventListener('click', function (event) {
                let eventDiv = event.target;
                if(event.target.matches('td') && !(eventDiv.classList.contains('lock'))){
                    self.open(event);
                }
            });
            this.div.addEventListener('contextmenu', function (event) {
                if(event.target.matches('td')){
                    self.lock(event);
                }
            })
        },
        drawField:function () {
            this.div.innerHTML ='';
            let table = document.createElement('table');
            this.table = table;
            for(let i =0;i<game.height;i++){
                let tr = document.createElement('tr');
                for (let j =0;j<game.width;j++) {
                    let td = document.createElement('td');
                    tr.appendChild(td);
                }
                table.appendChild(tr);
            }
            this.div.appendChild(table);
        },
        open:function(e){
            let x= e.target.cellIndex;
            let y = e.target.parentNode.rowIndex;
            this.recurseOpen(x,y);
        },
        recurseOpen:function(x,y){
            let td = this.table.rows[y].children[x];
            if(game.field[x][y].isOpen){
                return;
            }
            if(game.field[x][y].isMine){
                this.table.rows[y].children[x].classList.add('bomb-what-is-first');
                debugger;
                for(let i =0;i<game.width;i++){
                    for(let j =0;j<game.height;j++){
                        if(game.field[i][j].isMine && !(i===x && j===y)){
                            this.table.rows[j].children[i].classList.add('bomb-all');
                        }
                    }
                }
                if(resultGame){
                    resultGame.remove();
                }
                resultGame = endGame('GAME OVER');
                document.body.appendChild(resultGame);
            }else {
                td.innerHTML = game.field[x][y].mineAround;
                game.field[x][y].isOpen = true;

                if(game.field[x][y].mineAround===0){
                    for(let i = x>0?x-1:x; i<=x+1 &&i<game.width;i++ ){
                        for(let j = y>0?y-1:y;j<=y+1 &&j< game.height;j++){
                            this.recurseOpen(i,j);
                        }
                    }
                }
                td.classList.add('open');
                game.openMineCount++;
                if(game.width*game.height-game.mineCount===game.openMineCount){
                    if(resultGame){
                        resultGame.remove();
                    }
                    resultGame = endGame('YOU WIN');
                    document.body.appendChild(resultGame);
                }
            }
        },
        lock:function (e) {
            this.flagToMine = document.querySelector('.flagToMine');
            let x= e.target.cellIndex;
            let y = e.target.parentNode.rowIndex;
            if(game.field[x][y].isOpen){
                return;
            }


            if (game.field[x][y].isFlag) {
                game.countFlag--;
                game.field[x][y].isFlag = false;
                e.target.classList.toggle('lock');
            } else {
                if(game.countFlag<game.mineCount) {
                    game.field[x][y].isFlag = true;
                    game.countFlag++;
                    e.target.classList.toggle('lock');
                }
                else {
                    return;
                }
            }
            this.flagToMine.innerHTML = `${game.countFlag} / ${game.mineCount}`;
            e.preventDefault();


        }
    }
};