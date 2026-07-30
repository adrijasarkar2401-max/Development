// array creation
//1
let arr=[1,2,3,4];
//2
let a= new Array();

// accessing
arr[0];//1
arr[3];//4
arr[40];//undefined

//modifying
arr[3] = 15;
//array methods: push,pop,shift,unshift,slice,splice,reverse,sort,map,filter,reduce,find,some,every(intro level)
let barr=[1,2,3,4,5,6];
//push/pop --> add/deletes from the end
barr.push(15);
barr.pop();
//shift-->deletes from the front and unshift--> adds to the front 
barr.shift();
barr.unshift(7);
//splice --> deletes value from  middle arr.splice(index,how many values to remove)
barr.splice(3,2);
//splice changes te actual array while slice returns a copy of the array, arr.slice(start,end-1)
let newarr= barr.splice(1,1);
let carr=[11,23,56,89,45,92];
carr.reverse();
//sort always accepts a function
let scarr=carr.sort(function(a,b){
    return a-b;//ascending order
});
/*let scarr=carr.sort(function(a,b){
    return b-a; //descending order
});*/

// forEach--> accepts a function, each element of the array is stored one by one in val and the following code ia performed on the array
carr.forEach(function(val){
    console.log(val);
});
carr.forEach(function(val){
    console.log(val+10);
});
//map--> accepts a function and returns something
//we use the map method only when we want a new array on the basis of the old array's data
let newcarr=carr.map(function(val){
    return 12;
});//should return an array which as 12 5 times -->[12,12,12,12,12],if there is no return,then it will display undefined
let newcarray=carr.map(function(val){
    if(val>50) return val;
})
//filter-->makes a new aaray from the old array and leaves out some of the old array elements, retur will either be true or false 
let darr=[1,2,3,4,5,6,7];
darr.filter(function(val){
    if(val>4) return true;
});
//reduce--> reduces array to a sigle digit
darr.reduce(function(accumulator,val){
    return accumulator+val;
},0);// 0 is the accumulator's initial value. The accumulator remembers its previous value
//find--> return first occurence of an element
let newdarr=darr.find(function(val){
    //if (val===1) return val;
    return val===1;
})

//some and every
//some checks if atleast one of the elements has passed the condition
let marks=[10,85,92,67,45];
let any=marks.some(function(val){
    return val>80;
});
// every checks if all of the elemets meet the condition
let eve=marks.every(function(val){
    return val>10;
});

//destructuring
let earr=[1,2,3,4,5];
//let [a,b]=earr;
let [a,b,,c]= earr;//skips the 3rd element
//spread operator
//let earr2=earr;
//the reference gets copied so if any changes are made to earr2 the og is also affected
let earr2=[...arr];




