//var, let, const --- datatypes comparision

var a = 12;


//window e add kore
//function scoped -- can be used only inside function-- in any other laguage except js if you declare a var inside an if statement the it will work only inside the if statement in js tho var is func scoped so it will work inside the whole function even if declared inside the  
//you can declare this again same name no error will be shown


//scope(global, block, function)
//var doesnot respect block

//reassignment vs redeclaration
var b = 10;
var b = 30;//redeclaration

let c = 20;
c = 40;//reassignment

//Temporal dead zone
//console.log(z);
//let z=12;

for (let i = 0; i < 10; i++) {
    console.log(i)

}


let j = 1;
while (j < 31) {
    console.log("hello");
    j++;
}
let k = 1;


do {
    console.log("bye");
    k++;
} while (k < 6);


let num = 13;

//if(num=='13'){
//    console.log("==");
//}

if (num === 13) {
    console.log("===")
}

//function
function dance() {
    console.log("dance");
    console.log("dance");
    console.log("dance");
    console.log("dance");
    console.log("dance");
}
dance();//func call

//func expression
let fnc = function () {
    console.log("hey");
    console.log("hey");
    console.log("hey");
    console.log("hey");
    console.log("hey");
}
fnc();

//fat arrow func
const arrow = () => {
    console.log("byebye");
    console.log("byebye");
    console.log("byebye");
    console.log("byebye");
    console.log("byebye");
}
arrow();

//`${}`--> dynamic value
function dance(s) {
    console.log(`${s} dance`);
}
dance("ballet");
dance("kathak");
dance("hip-hop");

function add(n1,n2){//n1,n2 are parameters
    console.log(n1+n2);
}
add(20,25);//20,25 are arguments

//default parameters
function defpara(v1,v2){
    console.log(v1,v2);
}
defpara();// undefined,undefined

function defpara2(v1,v2){
    console.log(v1+v2);
}
defpara2();// NaN

function defpara3(v1=0,v2=0){//we can take the default values of the parameters as 0, if values are sent as args the te func will ot use the def paras
    console.log(v1,v2)
}
defpara3();// 0

//rest and spread parameters
// when there are a lot of args, we have to take alot of paras. To make it easier we use rest and spread paras....
//basically arrays
function rnds(...val){
    console.log(val)
}
rnds(2,4,6,8,10,12,14);
//if the ... is in the functions parameter space, its called rest operator ad if the ... is the arrays and the objects it is called spread operator

//return value
function abcd(){
    return 12;
}
abcd();// nothing because value is not stored properly

function bcd(){
    return 12;
}
let val= bcd();
console.log(val);//12

function cd(m){
    return 12+m;
}
let sum= cd(2);
console.log(sum);//12

