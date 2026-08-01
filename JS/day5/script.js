//events and event handling
//any activity on the browser raises an event
//event is any action
//event listener is the reaction to those actions 
//event binding:addEventListener,removeEventListener
let h1= document.querySelector("h1");
//event.addEventListener("event",function(){});
h1.addEventListener("click",function(){
    h1.style.color="red";
})
let p=document.querySelector("p");
function dblclick(){
    p.style.color="green"
}
p.addEventListener("dblclick",dblclick);//passing the functions
p.removeEventListener("dblclick",dblclick);
//common event: click,input, change, submit, mouseover,keyup
let input=document.querySelector("input");
/*input.addEventListener("input",function(evt){
    console.log(evt.data);//evt is an object, data stores the input
})*/
//if we do not want the 
input.addEventListener("input",function(dets){
    if(dets.data!== null){
        console.log(dets.data)
    }
})