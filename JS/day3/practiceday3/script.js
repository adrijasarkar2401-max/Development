//ARRAYS

//Q. create array with 3 fruits and print the second fruit
let fruits=["lychee","peaches","apples"];
console.log(fruits[1]);
//Q. add mango at the end add pineapple at the beginning
fruits.push("mango");
fruits.unshift("pineapple");
fruits.push("banana");
//Q. replace banana with kiwi
fruits[5]="kiwi";
//remove last item using a method
let numbers=[1,2,3,4];
numbers.pop();
//insert red and blue at index 1 of this array
let colors=["green","yellow"];
colors.splice(1,0,"red","blue");//using splice to add elemets
//extract the middle 3 elemets
let items=[1,2,3,4,5,6];
let extitems=items.slice(1,4);
console.log(extitems);
//sort this array alphabetically and then reverse it
let names=["zara","arjun","mira","bhavya"];
//names.sort();
//names.reverse();
names.sort().reverse();
//use .map to square each number
let arr=[1,2,3,4];
let newarr=arr.map(function(val){
    return val*val;
});
//use .filter to keep number greater than 10
let arr2=[5,12,8,20,3];
/*let newarr2=arr2.filter(function(val){
    return val>10;
})*/
let newarr2= arr2.filter((val)=>{
    return val>10;
});
//use .reduce to find the sum of this array
let arr3=[10,20,30];
let sum=arr3.reduce(function(acc,val){
    return acc+val;
},0);
//use .find to find 1st numbers less than 10
let arr4=[12,15,3,8,20]
let small=arr4.find(function(val){
    return val<10;
});
//use .some to ceck if ay studets got less  than 35
let scores=[45,60,28,90];
let ans=scores.some(function(val){
    return val<35;
});
//use .every to check if all umbers are even
let arr5=[2,4,6,8,10];
let even=arr5.every(function(val){
    return val%2===0;
});
//destructure this array to get firstname ad lastname
let fullName=["Kate","Sharma"];
let [firstName,lastName]=fullName;
//merge 2 array using spread operator
let a=[1,2];
let b=[3,4];
let c=[...a,...b];
//add "india" to the start of this array using spread operator
let countries=["uk","usa"];
countries=["India",...countries];
//clone this array
let arr6=[1,2,3]
let newarr6=[...arr6];

//OBJECTS

//Q. create an object for a student with name, age and isEnrolled
let student={
    name:"adrija",
    age:21,
    isEnrolled:true
};
//can the key of a object be a number or a boolean
let obj={
    true:"yes",
    42:"answer"
};
console.log(obj[42]);//yes it can be
//acess the value of firstname
const username={
    firstname:"adrija",
};
username.firstname;
//given a dynamic key let key= "age",ow will you access it?
let key="age";
let user={
    age:21,
};
user[key];
//from the object below print the latitude
const locations={
    city:"bhopal",
    coordinates:{
        lat:23.2,
        lng:77.4,
    }
};
console.log(locations.coordinates.lat);
//if coordinates is missing,what will happen?how can you prevent that error
console.log(location?.coordinates?.lat);
//destructure the city and lat from the locatio object
let {city}=locations;
let{lat}=locations.coordinates;
//destructure the key first-name asa variable called firstName
const user2={
    "first-Name":"adrija"
}
let {"first-Name":firstName2}=user2;
//use for in to print all keys in this object
const course={
    title:"JavaScript",
    duration:"4 weeks"
};
for(let key in course){
    console.log(key);
}
//use object.entries to print all key-value pairs as 
//title:javascript
//console.log(Object.entries(course));
Object.entries(course).forEach(function(val){
    console.log(val[0]+":"+val[1]);
});
// copy this object using spread operator
const original={
    a:1,
    b:2
};
const copy={...original};
//deep clone this obj:
/*const obj1={info: {
    score:80
}
}
let clone={...obj1};
clone.info.score=100;
console.log(clone.info.score);*/
const obj1={info: {
    score:80
}
}
let clone=JSON.parse(JSON.stringify(obj1));
clone.info.score=100;
console.log(clone);