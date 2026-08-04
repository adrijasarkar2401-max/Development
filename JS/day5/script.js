//events and event handling
//any activity on the browser raises an event
//event is any action
//event listener is the reaction to those actions 
//event binding:addEventListener,removeEventListener
let h1 = document.querySelector("h1");
//event.addEventListener("event",function(){});
h1.addEventListener("click", function () {
    h1.style.color = "red";
})
/*let p = document.querySelector("p");
function dblclick() {
    p.style.color = "green"
}
p.addEventListener("dblclick", dblclick);//passing the functions
p.removeEventListener("dblclick", dblclick);*/

//common event: click,input, change, submit, mouseover,keyup
let input = document.querySelector("input");
/*input.addEventListener("input",function(evt){
    console.log(evt.data);//evt is an object, data stores the input
})*/
//if we do not want the 
input.addEventListener("input", function (dets) {
    if (dets.data !== null) {
        console.log(dets.data)
    }
})
//change-->works when there's a change in input select or textarea 
let sel = document.querySelector("select");
sel.addEventListener("change", function (dets) {
    console.log(dets.target.value);
})
let device = document.querySelector("#device");
sel.addEventListener("change", function (dets) {
    //device.textContent= "Device selected"
    device.textContent = `${dets.target.value} selected`;
});

let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
form.addEventListener("submit", function (dets) {
    dets.preventDefault();

    let card = document.createElement("div");
    card.classList.add("card");

    let profilepic=document.createElement("div");
    profilepic.classList.add("profilepic");

    let img=document.createElement("img");
    img.setAttribute("src","https://images.unsplash.com/photo-1784437367878-3d190b970efb?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

    let h3=document.createElement("h3");
    h3.textContent="Jane Doe"
    let h5=document.createElement("h5");
    let p=document.createElement("p");
});
