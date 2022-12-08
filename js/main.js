// Get the elements with class="column"
var elements = document.getElementsByClassName('column');

// Declare a "loop" variable
var i;

// Full-width images
function one() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "100%";
  }
}

// Two images side by side
function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "25%";
  }
}

// Code By Webdevtrick ( https://webdevtrick.com )
function beforeAfter() {
    document.getElementById('compare').style.width = document.getElementById('slider').value + "%";
}
// End WebdevTrick Code

function changeOne(){
    document.querySelector('figure').style.backgroundImage = "url(../img/quince2bw.jpg)";
    document.getElementById('compare').style.backgroundImage = "url(../img/quince2.jpg)";
}

function changeTwo(){
    document.querySelector('figure').style.backgroundImage = "url(../img/senior1.jpg)";
    document.getElementById('compare').style.backgroundImage = "url(../img/senior1bw.jpg)";
}

function changeThree(){
    document.querySelector('figure').style.backgroundImage = "url(../img/other6.jpg)";
    document.getElementById('compare').style.backgroundImage = "url(../img/other6bw.jpg)";
}

