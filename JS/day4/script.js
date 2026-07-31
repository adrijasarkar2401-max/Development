//DOM Manipulation
//select html elements
//change text
//change htmal
//change css
//change attribute
//event listeners

//dom tree structure:node, elements,text, comment
//dom=body

//selecting element: getElementById, getElementsByClassName, querySelector, querySelectorAll(1st 2 are old,2nd 2 are mostly used nowadays)
let abcd=document.getElementById("abcd");
console.log(abcd);//will show a tag
console.dir(abcd); 

let abc=document.getElementsByClassName("abc");//returns an array like(nodelist) structure as more than one elements can have the same class name
console.dir(abc);

document.querySelector("h1");//selects only the first element

document.querySelectorAll("h1");

//text/content access: innerText,textContent,innerHTML
let h1= document.querySelector("h1");//(h1 is an object)
h1.textContent="Hey, how are you?";
//document.querySelector("h1").textContent="cheese";

h1.innerText="cheetos";//textContent and innerText change the text content only while innerHTML changes the html

h1.innerHTML="<i>Pepper</i>";


//Attribute manipulation:  getAttribute,setAttribute,removeAttribute
let a=document.querySelector("a");
//a.href="https://google.com";
a.setAttribute("href","https://google.com");//element.setAttribute("name of attrribute","value you want to set it to")
let img=document.querySelector("img");
img.setAttribute("src","https://images.unsplash.com/photo-1785443040874-6b466880203f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

let a2=document.querySelectorAll("a")[1];//chooses second element by index
console.log(a2.getAttribute("href"));

a2.removeAttribute("href");

//Dynamic DOM maipulation: createElement,appendChild,removeChild,prepend(imp)
//create element
//append/prepend element
let h2=document.createElement("h2");//creates a blank tag
h2.textContent="dynamic dom maipulation";//still not showing content
document.body.append(h2);//append--> the element will get added below
document.body.prepend(h2);//prepend--> the element will get added above
//document.querySelector("body").append(h2);
let p=document.querySelector("p");
p.remove();
let h3=document.createElement("h1");
h3.textContent="heading5";
document.querySelector("div").appendChild(h3);// same as append 


//style updates via .style ad classList(add,remove,toggle)
//manipulating css through js
h3.style.color="yellow";
console.dir(h3);
h3.style.backgroundColor="blue";
h3.style.fontFamily="fantasy";
h3.style.textTransform="uppercase";
//how to add class or remove class with js
let div=document.querySelector("div");
div.classList.add("werty");
let h6=document.querySelector("h6");
h6.classList.remove("abc");
//toggle--> if the class is alr there it removes the class, if the class is not there it add the class
a.classList.toggle("toggle class");
