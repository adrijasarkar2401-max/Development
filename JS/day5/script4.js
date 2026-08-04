let abcd = document.querySelector("#abcd");
abcd.addEventListener("mouseover", function() {
    abcd.style.backgroundColor = "yellow";
});
abcd.addEventListener("mouseout", function() {
    abcd.style.backgroudColor = "red";
});
window.addEventListener("mousemove", function(dets){
    //console.log(dets);
    //clientx-->x-axis and clientY-->y-axis
    //console.log(dets.clientX,dets.clientY);
    abcd.style.top=dets.clientY+"px";
    abcd.style.left=dets.clientX+"px";
});