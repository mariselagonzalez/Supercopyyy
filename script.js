var one= document.getElementById ("second")
var two= document.getElementById ("third")
var three= document.getElementById ("fourth")
var water= document.getElementById ("music")


function imageone(){
	one.classList.remove("hide");
}
function imagetwo(){
	two.classList.remove("hide");
}
function imagethree(){
	three.classList.remove("hide");
	water.play();
}
