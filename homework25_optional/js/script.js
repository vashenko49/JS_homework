const prevBnt = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const item = document.querySelectorAll('.slider .item');
const horizon = document.querySelector('.slider .horizon');
const forTheMove = document.querySelector('.for-the-move');
let  itemsWidth =item[0].offsetWidth*item.length + 3.5*item.length;
let itemScroll = itemsWidth/item.length;

window.addEventListener('load',function () {
    horizon.style.width = `${itemsWidth}px`;
    forTheMove.style.width=`${itemsWidth/item.length}px`;
    forTheMove.style.height=`${item[0].offsetHeight}px`;
    last();
});


prevBnt.addEventListener('click',function () {
    shift(false,last);
});

nextBtn.addEventListener('click',function () {
    shift(true, next);
});


function last(){
        forTheMove.scrollLeft=itemScroll;
        let last = horizon.lastElementChild;
        last.remove();
        horizon.insertBefore(last, horizon.firstChild);
}
function next(){
        forTheMove.scrollLeft=itemScroll;
        let next = horizon.firstElementChild;
        next.remove();
        horizon.appendChild(next);
}
/**
 * сдвиг горизонта
 * @param mode {boolean} true-next, false-prev
 * @param callback {function}
 */
function shift(mode, callback) {
    let interval = setInterval((function () {
        if(Math.abs(forTheMove.scrollLeft)>=itemScroll*2||Math.abs(forTheMove.scrollLeft)<=4){
            clearInterval(interval);
            setTimeout(callback,5)
        }
        else {
            mode?forTheMove.scrollLeft+=6:forTheMove.scrollLeft-=6;
        }
    }),10);
}
