let $linkOnChange =null;

window.onload=function () {
    $linkOnChange = $('#changeTheme');
    if(localStorage.getItem('countTheme')===null)
        localStorage.setItem('countTheme','0');
    setTheme();
    $('#changeMode').click(function () {
        localStorage.getItem('countTheme')==='0'?localStorage.setItem('countTheme',"1"):localStorage.setItem('countTheme',"0");
        setTheme()
    });
};
function setTheme() {
    localStorage.getItem('countTheme')==='0'? $linkOnChange.attr('href','css/regular_version.css'):$linkOnChange.attr('href','css/modified_version.css');
}
