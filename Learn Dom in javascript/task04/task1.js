var inp1 = document.querySelector("#inp1");
var add = document.querySelector("#add");
var rem = document.querySelector("#remove");
var li =document.createElement('li');
var ul = document.querySelector("ul");

add.addEventListener("click",function(){
    if (inp1.value.trim ==='') {} 
    else{
     li.textContent = inp1.value;
     ul.appendChild(li);
     inp1.value = '';
    }
})
 
rem.addEventListener("click",function(){
    ul.removeChild(li);
})