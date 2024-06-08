var pgr = document.querySelector("#progress");
var count = 0;
var int = setInterval(function(){
    if (count===100) {
        clearInterval(int);
        
    }
    count++;
    pgr.style.width = count+'%';
},50);
