// when you deal with the the form remember that when you will submit the page at that time it become reloaded
// you remember that page is not becoming reload.if page is reload js is not working
var inp1 = document.querySelector("#inp1");
var inp2 = document.querySelector("inp2");
var btn = document.querySelector("button");
var form = document.querySelector("form");
var h4 = document.querySelector("#error");


form.addEventListener("submit", function(e){
  e.preventDefault();
 if(inp1.value=='' || inp2.value=='') {
  alert("enter missing value");


 }

})


