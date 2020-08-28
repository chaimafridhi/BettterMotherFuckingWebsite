  
var win = document.getElementById("popUp");

var closeWin = document.getElementById("close_popUp");

var winText = document.getElementById("popUp_text");


window.onload = function () {
    setTimeout(function () {
        win.style.display = "none";
    }, 10000);
}


closeWin.onclick = function () {  // If x=1, close the popup
    win.style.display = "none";

}

window.onclick = function (event) {
    if (event.target == win) {
        win.style.display = "none";
    }
}