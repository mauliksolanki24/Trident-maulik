var navbar = document.querySelector('.navbar')
var chaluscroll = window.pageYOffset;


window.onscroll = function () {

    var karvanuscroll = window.pageYOffset;

    if(chaluscroll>karvanuscroll) {
        
        navbar.style.top = "0";
        navbar.style.opacity = "1";
    }

    else {
        navbar.style.top = "-70px";
        navbar.style.opacity = "0";
        navbar.style.transition = ".5s linear";
    }

    chaluscroll=karvanuscroll;
}