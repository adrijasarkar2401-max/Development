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
const arrow () => {
    console.log("byebye");
    console.log("byebye");
    console.log("byebye");
    console.log("byebye");
    console.log("byebye");
}

//`${}-->



