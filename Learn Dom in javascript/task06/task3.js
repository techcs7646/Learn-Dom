var home = document.querySelector("#home");
var about = document.querySelector("#about");
var contact = document.querySelector("#contact");

var hometext = document.querySelector("#hometext");
var abouttext = document.querySelector("#abouttext");
var contacttext = document.querySelector("#contacttext");



home.addEventListener("click",function(){
    notShow();
    hometext.style.display = "block";
    hometext.style.width = "50%";
})

about.addEventListener("click",function(){
    notShow();
    abouttext.style.display = "block";
    abouttext.style.width = "50%";
})

contact.addEventListener("click",function(){
    notShow();
    contacttext.style.display = "block";
    contacttext.style.width = "50%";
})

function notShow(){
    document.querySelectorAll("h3").forEach(function(h3){
        h3.style.display = "none"
    })
}