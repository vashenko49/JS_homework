function hideOrShowButtonContinue(hideOrShow){
    if(hideOrShow){
        document.getElementById('continue').style.display = 'inline-block';
    }
    else {
        document.getElementById('continue').style.display = 'none';
    }
}

$('#stop').click(function () {
   stop();
   hideOrShowButtonContinue(true);
});
$('#continue').click(function () {
   start();
   hideOrShowButtonContinue(false);
});

let currentImg=0;
let $imd = $('.image-to-show');

function getHideIndexSetCurrentImg() {
    let old = currentImg;
    if(currentImg>=$imd.length-1){
        currentImg=0;
    }
    else {
        currentImg++;
    }
    if(currentImg===0){
        old = $imd.length-1;
    }

    return old;
}

let timeBegan = null
    , timeStopped = null
    , stoppedDuration = 0
    , started = null;

function start() {
    if (timeBegan === null) {
        timeBegan = new Date();
    }
    $imd.eq(currentImg).delay(500).fadeIn(500);
    if (timeStopped !== null) {
        stoppedDuration += (new Date() - timeStopped);
    }
    console.log(stoppedDuration);

    started = setInterval(clockRunning, 10);
}

function stop() {
    timeStopped = new Date();
    clearInterval(started);
}

function reset() {
    clearInterval(started);
    stoppedDuration = 0;
    timeBegan = null;
    timeStopped = null;
    document.getElementById("display-area").innerHTML = ":00.000";
}

function clockRunning(){
    let currentTime = new Date()
        , timeElapsed = new Date(currentTime - timeBegan - stoppedDuration)
        , sec = timeElapsed.getUTCSeconds()
        , ms = timeElapsed.getUTCMilliseconds();
    if(sec>=10){
        reset();
        $imd.eq(getHideIndexSetCurrentImg()).fadeOut(500);
        start();
    }
    document.getElementById("display-area").innerHTML =
        (sec > 9 ? sec : "0" + sec) + "." +
        (ms > 99 ? ms : ms > 9 ? "0" + ms : "00" + ms);
}

window.onload = function () {
    hideOrShowButtonContinue(false);
  start();
};