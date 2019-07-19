let $btnContinue =null,
    timeBegan = null,
    currentImg =0,
    $allImg = null,
    $displayArea = null,
    timeStopped = null,
    stoppedDuration = 0,
    started = null;

/*скрытие кнопки продолжить*/
function hideOrShowButtonContinue(hideBtn){
    return hideBtn?$btnContinue.css({display:'inline-block'}):$btnContinue.css({display:'none'});
}

function getHideIndexSetCurrentImg() {
    let old = currentImg;
    (currentImg>=$allImg.length-1)?currentImg=0:currentImg++;
    if(currentImg===0)
        old = $allImg.length-1;
    return old;
}

function startTime() {
    if(timeBegan===null)
        timeBegan = new Date();

    //появдение картинки
    $allImg.eq(currentImg).delay(500).fadeIn(500);

    if(timeStopped!==null)
        stoppedDuration+=(new Date()-timeStopped);

    started = setInterval(runTime,10);
}
function stopTime() {
    timeStopped= new Date();
    clearInterval(started);
}

function resetTime() {
    clearInterval(started);
    stoppedDuration =0;
    timeBegan =null;
    timeStopped = null;

}
function runTime() {
    let currentTime = new Date(),
        timeRunOut = new Date(currentTime - timeBegan - stoppedDuration),
        sec = timeRunOut.getUTCSeconds(),
        ms = timeRunOut.getUTCMilliseconds();
    if (sec >= 10) {
        resetTime();
        //показ картинки
        $allImg.eq(getHideIndexSetCurrentImg()).fadeOut(500);
        startTime();
    }
    $displayArea.html(`${sec > 9 ? sec : "0" + sec}.${(ms > 99 ? ms : ms > 9 ? "0" + ms : "00" + ms)}`);
}

window.onload = function () {
    $btnContinue = $('#continue');
    $btnContinue.click(function () {
        startTime();
        hideOrShowButtonContinue(false);
    });
    $('#stop').click(function () {
        stopTime();
        hideOrShowButtonContinue(true);
    });
    $allImg = $('.image-to-show');
    $displayArea = $('#showTime');
    $('.image-to-show:eq(0)').css('display','block');
    hideOrShowButtonContinue(false);
    startTime();
};