//screen-->window
let h1 = document.querySelector("h1")
window.addEventListener("keydown", function (dets) {
    //console.log(dets.key);
    if (dets.key === " ") h1.textContent = "space";
    else h1.textContent = dets.key;
})
let btn = document.querySelector("#btn");
let fileinp=document.querySelector("#fileinp");
btn.addEventListener("click",function(){
    fileinp.click();
});
fileinp.addEventListener("change",function(dets){
    btn.textContent=fileinp.name
})