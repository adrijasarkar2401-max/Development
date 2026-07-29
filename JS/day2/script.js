//first class fuctions(?)
//functions that can be treated as values->can be saved as variables and can be passed inside functions
function abcd(val) {
    val();
}
abcd(function () {
    console.log("hi");
});

//higher order functions

//hof are functions which return or accept a function as a parameter

/*function xyz(val){


}//higher order function-->xyz
xyz(function(){

});*/

//or

function pqrs() {
    return function () {
        console.log("hyehye");
    }
}
pqrs()();//1st bracket --> pqrs 2nd bracket--> function

//Pure vs Impure function

//a function which does not change outside value--> pure function

//a function which changes outside value--> impure function
let a = 12;
function stuv() {
    console.log("pure func")
}
stuv();
function mnop() {
    a++;//impure func
}
mnop();

// closures and lexical scoping
//closures--> a function which returns a function and the func being returned will always use a parent functions variable
function hjkl() {
    let b = 15;
    return function () {
        console.log(b);
    }
}
//lexical scoping
function asdf() {
    let c = 10;//scope of c is from line 56-62-->only accessible inside asdf()
    function bnmv() {
        let d = 20;//scope of d is from line 58-60-->only accessible inside bnmv()
        function cvbn() {
            let e = 30;
        }
    }
}
//a variable declared inside a function is only accessible within that function 

//IIFE(immediately invoked fuction expressions)
(function(){
    console.log("iife");
})();//no need to call, alr been called

//hoisting--> calling a function before defining it
/*abdf();



function abdf(){
     console.log("hello");
} 
// this is called hoisting
but if it was
abdf();


let abdf = function(){
    console.log("bye");
}// function expression
this will not work and will show an error--> cannot access abdf before initialization*/

