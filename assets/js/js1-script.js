/* document.getElementById("page-title").addEventListener("mouseover", function() {
    document.getElementById("page-title").style.backgroundColor = "rgb(255, 153, 0)";
    document.getElementById("page-title").style.color = "darkred";
});
document.getElementById("page-title").addEventListener("mouseout", function() {
    document.getElementById("page-title").style.backgroundColor = "darkred";
    document.getElementById("page-title").style.color = "white";
}); 
var language = document.querySelectorAll("strong");
language.forEach((element)=> {
    element.addEventListener("click", changeColor);
});
function changeColor() {
    if( event.target.style.backgroundColor == 'rgb(0, 204, 255)') {
        event.target.style.backgroundColor = 'white';
    }
    else  {
        event.target.style.backgroundColor = 'rgb(0, 204, 255)';
    }
}
var tilde = document.querySelectorAll("h2");
tilde[0].addEventListener("click", addTilde);
tilde[1].addEventListener("click", addTilde1);
tilde[2].addEventListener("click", addTilde2);

function addTilde() {
    tilde[0].innerHTML = "~" + event.target.innerHTML + "~";
} 
function addTilde1() {
    tilde[1].innerHTML = "~" + event.target.innerHTML + "~";
} 
function addTilde2() {
    tilde[2].innerHTML = "~" + event.target.innerHTML + "~";
} */ 


/* Variable + ecouteur + function */

var pageTitle = document.querySelector('h1');
var htmlTitle = document.querySelector('#html-title');
var cssTitle = document.querySelector('#css-title');
var jsTitle = document.querySelector('#js-title');
var strongArray = document.querySelectorAll('strong');
 
pageTitle.addEventListener('mouseenter', colormodify_1);
pageTitle.addEventListener('mouseleave', colormodify_2);
htmlTitle.addEventListener('click', addWaves);
cssTitle.addEventListener('click', addWaves);
jsTitle.addEventListener('click', addWaves);
strongArray[0].addEventListener('mouseover', changeColor);
strongArray[1].addEventListener('mouseover', changeColor);
strongArray[2].addEventListener('mouseover', changeColor);
strongArray[3].addEventListener('mouseover', changeColor);
strongArray[4].addEventListener('mouseover', changeColor);
strongArray[5].addEventListener('mouseover', changeColor);

function colormodify_1() {
    event.target.style.backgroundColor = "orange";
    event.target.style.color = "darkred";
}
function colormodify_2() {
    event.target.style.backgroundColor = "darkred";
    event.target.style.color = "white";
}
function addWaves() {
  event.target.innerHTML = "~ " + event.target.innerHTML + " ~";
}
function changeColor() {
    if (event.target.style.backgroundColor != "yellow") {
        event.target.style.backgroundColor = "yellow";
    }
    else {
        event.target.style.backgroundColor = "cyan";
    }
}