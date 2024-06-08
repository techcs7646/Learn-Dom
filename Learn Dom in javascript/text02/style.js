var img1 = document.querySelector("#img1");
var img2 = document.querySelector("#img2");
var change= document.querySelector("button");

change.addEventListener("click",function(){
   var src1 = img1.src;
   var src2 = img2.src;
   img1.src = src2;
   img2.src = src1;
});