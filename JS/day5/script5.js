//Event object: target, type, preventDefault
let abcd=document.querySelector(".abcd");
abcd.addEventListener("click",function(dets){
    console.log(dets)
});
// dets-->event object
// target--> the div .abcd which is getting clicked
// type-->"click" 
// preventDefault is used to stop the page from reloading when the form is submitted

// Event Bubbling and Capturing
// event bubbling--> the target on which the event is occuring, if that does not have a listener then then the event will look for a listener in the parent function
document.querySelector("#nav").addEventListener("click",function(){
    window.alert("clicked");
});


