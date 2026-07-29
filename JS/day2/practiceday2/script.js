//Q1. diff b/w function declaration and expressions in terms of hoisting?
// func dec ca be hoisted while func exp cannot be hoisted
abcd();

function abcd(){
    console.log("hi");
}

//abdf();


let abdf= function(){
    console.log("bye");
}
/*Q2. convert to arrow func
function multiply(a,b)
{
    return a*b;
}*/
let multiply = (a,b) => {
    return a*b;
}
// predict output
function sayHi(name="guest"){
    console.log("hi",name);
}
sayHi();
// hi guest

//Q. use rest operator to accept any number of scores and return the total
function getScores(...scores){
    let total=0;
    scores.forEach(function(val){
        console.log(val);
        total+=val;
    });
    return total;
}
console.log(getScores(10,20,30,40,50,60));
//Q. fix the function using early return
/*function checkAge(){
    if(age<18){
        console.log("too young");
    }
    else{
        console.log("allowed");
    }
}
console.log(checkAge());*/
function checkAge(age){
    if(age<18) return "too young";
    return "allowed";
}
console.log(checkAge(23));
//return type of the following function
function f(){
    return;
}
console.log(f());// will return undefined

//Q. what does it mea whe we say "functions are first-class citizens"?
/*this means you can treat your functions like values. They ca be stored as variables and can be passed as pararmeters*/

//Q. can you assign a function to variable and then call it? show how
//yes
let g= function(){
    console.log("hello");
}
g();

//Q. pass a function inside another functio and then execute it
function greet(val){
    val();
}
greet(function(){
    console.log("hello");
});
//map is a hof
[1,2,3].map(function(x){
    return x*2;
});
//convert this normal function into an iife
/*function init(){
    console.log("initialized");
}*/
(function init(){
    console.log("initialized");
})();

//bmi calculator
function bmi(weight,height){
    return weight/(height*height);
}
console.log(bmi(66,1.62).toFixed(2));

//reusable discount calculator(hof)
function discountcalc(discount){
    return function(price){
        return price-price*(discount/100)
    }
}
let disc= discountcalc(10);
console.log(disc(500));

let fifty= discountcalc(50);
console.log(fifty(2500));

let twenty= discountcalc(20);
console.log(twenty(1700));

//conter using closure(?)
function counter(){
    let count=0;
    return function(){
        count++;
        return count;
    };
}
let c= counter();//starts from 0
console.log(c());//1
console.log(c());//2
console.log(c());//3

let d= counter();//whole diff counter
console.log(d());//1

//a pure function to transfom a value
/*(?)let total=0;
function calculator(val){
    newtotal= total;
    return newtotal+=val;
}
let calc= calculator(20);
console.log(calc);*/

function square(val){
    return val*val;
}
console.log(square(15));

//use iife to isolate variables(private variables)
(function(){
    const password="password";
    console.log(password);//private variable can be accessed inside the functions but not outside
})();
console.log(password);// will display an error message
 
