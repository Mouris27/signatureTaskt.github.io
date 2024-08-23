var input = document.getElementById("input");
var outPut = document.getElementById("outPut")
var outPut2 = document.getElementById("outPut2")

input.onkeyup = function(){
    outPut.innerHTML = input.value;
    outPut.style.fontFamily = "Algerian"
    outPut2.innerHTML = input.value;
    outPut2.style.fontFamily = "Algerian"
}